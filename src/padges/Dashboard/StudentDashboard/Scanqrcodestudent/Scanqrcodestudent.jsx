import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate, useParams } from "react-router-dom";
import useStudentStore from "../../../../store/useStudentStore";
import toast from "react-hot-toast";

export default function ScanQrCodeStudent() {
  const { scanQr } = useStudentStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const qrRef = useRef(null);
  const hasScannedRef = useRef(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraError, setCameraError] = useState("");

  const handleScan = async (decodedText) => {
    if (hasScannedRef.current) return;
    hasScannedRef.current = true;
    setIsLoading(true);

    try {
      let data;
      try {
        data = JSON.parse(decodedText);
        console.log(data);
        
      } catch {
        data = { qr: decodedText };
      }

      if (
        !data.timestamp ||
        !data.courseId ||
        !data.lecture_id ||
        !data.signature
      ) {
        throw new Error("Invalid QR code");
      }

      await scanQr(data);
      toast.success("Scanned successfully");
      navigate(`/student-dashboard/courses/${id}/scan-done`, {
        state: { success: true, data },
      });
    } catch (err) {
      console.log(err);
      
      toast.error(err.message || "Invalid QR code");
      navigate(`/student-dashboard/courses/${id}/scan-done`, {
        state: { success: false, message: err.message || "Scan failed" },
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        hasScannedRef.current = false;
      }, 2000);
    }
  };

  const startScan = async () => {
    if (isScanning || !document.getElementById("reader")) return;

    setIsScanning(true);
    setCameraError("");

    try {
      const config = { fps: 10, qrbox: 250 };
      const qrCodeScanner = new Html5Qrcode("reader");
      qrRef.current = qrCodeScanner;

      await qrCodeScanner.start(
        { facingMode: "environment" },
        config,
        handleScan,
        (error) => console.warn("Scan error:", error)
      );
    } catch (err) {
      console.error("Start failed:", err);
      setCameraError("Camera access denied or not available.");
      setIsScanning(false);
    }
  };

  const stopScan = async () => {
    if (!qrRef.current) return;
    try {
      await qrRef.current.stop();
      await qrRef.current.clear();
      qrRef.current = null;
      setIsScanning(false);
    } catch (err) {
      console.error("Stop failed:", err);
    }
  };

  useEffect(() => {
    return () => {
      if (qrRef.current) {
        qrRef.current
          .stop()
          .then(() => qrRef.current.clear())
          .catch((err) => console.warn("Scanner cleanup failed:", err.message));
      }
    };
  }, []);

  return (
    <div className="px-6 py-20 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-[#161B39]">Scan QR Code</h1>
      <p className="text-md text-gray-800 text-center max-w-md">
        Press <span className="font-semibold">Start Scan</span> and point your
        camera at the QR code
      </p>

      {isLoading && (
        <div className="flex flex-col items-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#161B39]"></div>
          <p className="mt-2 text-[#161B39] font-medium">Processing...</p>
        </div>
      )}
      {!isScanning && (
        <div
          className={`flex flex-col items-center justify-center border rounded-lg w-[400px] h-[300px] ${
            cameraError ? "bg-red-300" : ""
          }`}
        >
          {!cameraError && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M13 6.5H7A2.5 2.5 0 0 0 4.5 9v5A2.5 2.5 0 0 0 7 16.5h6a2.5 2.5 0 0 0 2.5-2.5v-.024l2.348 1.565a.5.5 0 0 0 .777-.416v-7a.5.5 0 0 0-.777-.416L15.5 9.274V9A2.5 2.5 0 0 0 13 6.5"
                  clip-rule="evenodd"
                  opacity="0.2"
                />
                <path
                  fill-rule="evenodd"
                  d="M11 4.5H5A2.5 2.5 0 0 0 2.5 7v5A2.5 2.5 0 0 0 5 14.5h6a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 11 4.5M3.5 7A1.5 1.5 0 0 1 5 5.5h6A1.5 1.5 0 0 1 12.5 7v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.728 5.58L12.75 7.517a.5.5 0 0 0-.228.414l-.027 2.612a.5.5 0 0 0 .227.425l3.004 1.952a.5.5 0 0 0 .773-.419V6a.5.5 0 0 0-.773-.42m-.226 6l-2.001-1.301l.021-2.07l1.98-1.287z"
                  clip-rule="evenodd"
                />
                <path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z" />
              </g>
            </svg>
          )}
          <p
            className={`text-[18px] font-bold text-center mt-5 ${
              cameraError ? "text-red-600" : "text-[#161B39]"
            }`}
          >
            {cameraError || "No Camera Access"}
          </p>
        </div>
      )}

      <div
        id="reader"
        className={`  rounded-lg overflow-hidden border 
          ${isScanning ? "border-[#161B39] w-[400px] h-[300px] md:w-[400px] md:h-[300px]" : ""} 
          flex items-center justify-center`}
      ></div>

      <div className="mt-4">
        {!isScanning && (
          <button
            onClick={startScan}
            disabled={isLoading}
            className="bg-[#161B39] hover:opacity-90 text-white px-6 py-2 rounded-lg shadow"
          >
            <i className="fa-solid fa-play mr-2"></i> Start Scan
          </button>
        )}

        {isScanning && (
          <button
            onClick={stopScan}
            className="bg-[#161B39] hover:opacity-90 text-white px-6 py-2 rounded-lg shadow"
          >
            <i className="fa-solid fa-stop mr-2"></i> Stop Scan
          </button>
        )}
      </div>
    </div>
  );
}
