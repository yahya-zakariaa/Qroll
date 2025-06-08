import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import useStudentStore from "../../../../store/useStudentStore";

export default function ScanQrCodeStudent() {
  const navigate = useNavigate();
  const { scanQr } = useStudentStore();

  const scannerRef = useRef(null);
  const hasScannedRef = useRef(false);

  const [cameraAvailable, setCameraAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // التحقق من وجود كاميرا
  useEffect(() => {
    const checkCamera = async () => {
      if (navigator.mediaDevices?.enumerateDevices) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some((d) => d.kind === "videoinput");
        setCameraAvailable(hasCamera);
      } else {
        setCameraAvailable(false);
      }
    };
    checkCamera();
  }, []);

  // تشغيل ماسح الكاميرا
  useEffect(() => {
    if (cameraAvailable) {
      const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });

      scanner.render(
        async (decodedText) => {
          if (!hasScannedRef.current) {
            hasScannedRef.current = true;
            await handleScan(decodedText);
          }
        },
        (error) => {
          console.log(error);
          
        }
      );

      scannerRef.current = scanner;

      return () => {
        scanner.clear().catch((err) => console.error("Clear failed", err));
      };
    }
  }, [cameraAvailable]);

  const handleScan = async (decodedText) => {
    let data;
    try {
      data = JSON.parse(decodedText);
    } catch {
      data = { qr: decodedText };
    }

    console.log("Scanned Data:", data);
    setIsLoading(true);

    try {
      console.log(data);
      await scanQr(data);
      alert("✅ تم تسجيل الحضور بنجاح");
      navigate("/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee");
    } catch (err) {
      console.error("QR Scan Error:", err);
      alert("❌ فشل تسجيل الحضور، حاول مرة أخرى");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("⚠️ الرجاء رفع صورة فقط");
      return;
    }

    if (scannerRef.current?.clear) {
      await scannerRef.current.clear().catch(() => {});
    }

    const html5QrCode = new Html5Qrcode("reader");
    try {
      const result = await html5QrCode.scanFile(file, true);
      await handleScan(result);
    } catch (err) {
      alert("❌ فشل قراءة QR من الصورة 👀");
      console.error(err);
    } finally {
      html5QrCode.clear().catch(() => {});
    }
  };

  return (
    <div>
      <div className="flex gap-6 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/student-dashboard/coursesstudent")}
          className="flex gap-2 items-center text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A]">COURSES</h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A]">CS</h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A]">Scan QR Code</h1>
      </div>

      <div className="flex flex-col items-center p-4">
        <h1 className="mb-4 text-xl font-bold">
          Make sure you allow your camera
        </h1>

        {isLoading && <p className="text-blue-500 mb-2">⏳ جاري التحقق...</p>}

        {cameraAvailable ? (
          <div id="reader" className="w-full max-w-md"></div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-red-500">
              📵 لا يوجد كاميرا متاحة. يمكنك رفع صورة QR بدلاً من ذلك.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-qr"
            />
            <label
              htmlFor="upload-qr"
              className="bg-[#161B39] w-56 h-12 text-white flex justify-center items-center gap-2 cursor-pointer rounded"
            >
              <i className="fa-solid fa-upload"></i>
              <span>Upload QR Image</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
