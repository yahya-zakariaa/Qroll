import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { useNavigate, useParams } from "react-router-dom";
import useStudentStore from "../../../../store/useStudentStore";
import toast from "react-hot-toast";

export default function ScanQrCodeStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { scanLectureQr } = useStudentStore();
  const scannerRef = useRef(null);
  const hasScannedRef = useRef(false);
  const isMountedRef = useRef(true);
  const [cameraAvailable, setCameraAvailable] = useState(true);
  const [cameraError, setCameraError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scannerActive, setScannerActive] = useState(true);
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const checkCamera = async () => {
      try {
        if (!navigator.mediaDevices?.enumerateDevices) {
          throw new Error("This browser doesn't support camera devices");
        }

        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some((d) => d.kind === "videoinput");

        if (!hasCamera) {
          throw new Error("No camera available");
        }

        setCameraAvailable(true);
      } catch (err) {
        setCameraAvailable(false);
        setCameraError(err.message);
      }
    };

    checkCamera();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!cameraAvailable || !scannerActive) return;
    if (scannerRef.current) return;

    const initScanner = () => {
      try {
        const scanner = new Html5QrcodeScanner(
          "reader",
          {
            fps: 10,
            qrbox: 250,
            rememberLastUsedCamera: true,
          },
          true
        );

        scanner.render(
          async (decodedText) => {
            if (hasScannedRef.current) return;
            hasScannedRef.current = true;

            try {
              await handleScan(decodedText);
            } finally {
              hasScannedRef.current = false;
            }
          },
          (error) => {
            console.error("Scanner error:", error);
            setCameraError("Scanner error: " + error.message);
            setCameraAvailable(false);
          }
        );

        scannerRef.current = scanner;
      } catch (err) {
        console.error("Scanner initialization failed:", err);
        setCameraError("Failed to initialize scanner");
      }
    };

    initScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) => {
          console.error("Failed to stop scanner:", err);
        });
        scannerRef.current = null;
      }
    };
  }, [cameraAvailable, scannerActive]);

  const handleScan = async (decodedText) => {
    setIsLoading(true);

    try {
      let data;
      try {
        data = JSON.parse(decodedText);
      } catch {
        data = { qr: decodedText };
      }

      if (
        !data.timestamp &&
        !data.courseId &&
        !data.lecture_id &&
        !data.signature
      ) {
        throw new Error("Invalid QR code format");
      }

      setScanResult(data);

      try {
        const message = await scanLectureQr(data);
        toast.success(message);
        navigate(`/student-dashboard/courses/${id}/scan-done`, {
          state: { success: true, data },
        });
      } catch (err) {
        toast.error(err);
        console.error("Backend error:", err);
      }
    } catch (err) {
      console.error("Scan error:", err);
      navigate(
        "/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee",
        {
          state: {
            success: false,
            message: err.message || "Failed to process QR code",
          },
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    e.target.value = "";

    if (!file.type.startsWith("image/")) {
      alert("⚠️ Please upload an image file only");
      return;
    }

    setIsLoading(true);
    setScannerActive(false);

    try {
      if (scannerRef.current) {
        await scannerRef.current.clear();
        scannerRef.current = null;
      }

      const html5QrCode = new Html5Qrcode("reader");
      const result = await html5QrCode.scanFile(file, true);
      await handleScan(result);
    } catch (err) {
      console.error("Image scan failed:", err);
      alert("❌ Failed to read QR code from image");
    } finally {
      setScannerActive(true);
      setIsLoading(false);
    }
  };

  const retryCamera = () => {
    setCameraError("");
    setCameraAvailable(true);
    setScannerActive(true);
  };

  return (
    <div>
      <div className="flex gap-6 md:m-10 max-md:m-3 items-center flex-wrap">
        <button
          onClick={() => navigate("/student-dashboard/coursesstudent")}
          className="flex gap-2 items-center text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>Back</h1>
        </button>

        <div className="flex items-center gap-1">
          <i className="fa-solid fa-chevron-right text-[#71717a]" />
          <h1 className="text-[#71717A]">Courses</h1>
          <i className="fa-solid fa-chevron-right text-[#71717a]" />
          <h1 className="text-[#71717A]">CS</h1>
          <i className="fa-solid fa-chevron-right text-[#71717a]" />
          <h1 className="text-[#71717A]">Scan QR Code</h1>
        </div>
      </div>

      <div className="flex flex-col items-center p-4">
        <h1 className="mb-4 text-xl font-bold text-center">
          {cameraAvailable
            ? "Point your camera at the QR code"
            : "Please allow camera access"}
        </h1>

        {isLoading && (
          <div className="mb-4 flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#161B39]"></div>
            <p className="mt-2 text-[#161B39]">Processing...</p>
          </div>
        )}

        <div
          id="reader"
          className={`w-full max-w-md ${isLoading ? "hidden" : ""}`}
        ></div>

        {cameraError && (
          <div className="my-4 p-3 bg-red-100 text-red-700 rounded-lg max-w-md text-center">
            {cameraError}
          </div>
        )}

        <div className="flex flex-col gap-4 mt-6 w-full max-w-md">
          {!cameraAvailable && (
            <button
              onClick={retryCamera}
              className="bg-[#161B39] h-12 text-white rounded flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              <i className="fa-solid fa-rotate-right"></i>
              Retry Camera
            </button>
          )}

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-qr"
              disabled={isLoading}
            />
            <label
              htmlFor="upload-qr"
              className={`bg-[#161B39] h-12 text-white flex justify-center items-center gap-2 rounded cursor-pointer ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <i className="fa-solid fa-upload"></i>
              Upload QR Image
            </label>
            <p className="text-center mt-2 text-sm text-gray-500">
              Or upload an image containing a QR code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
