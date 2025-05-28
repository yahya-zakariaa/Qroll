import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Scanqrcodestudent() {
  const navigate = useNavigate();
  const [cameraAvailable, setCameraAvailable] = useState(true);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const hasCamera = devices.some(
          (device) => device.kind === "videoinput"
        );
        setCameraAvailable(hasCamera);
      });
    }

    if (cameraAvailable) {
      const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });

      scanner.render(
        async (decodedText) => {
          try {
            const data = JSON.parse(decodedText);

            // تأكد إن فيه البيانات المطلوبة
            if (
              data.section_id &&
              data.course_id &&
              data.timestamp &&
              data.signature
            ) {
              const formData = new FormData();
              formData.append("data", JSON.stringify(data));

              await axios.post(
                "https://your-backend.com/student/lecture-attendance/scan",
                formData,
                {
                  headers: {
                    Accept: "application/json",
                    // Authorization: `Bearer ${token}`,  // لو فيه توكن
                  },
                }
              );

              // لو كل شيء تمام
              navigate(
                "/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee"
              );
            } else {
              alert("الكود غير صالح أو ناقص.");
            }
          } catch (error) {
            alert("كود غير صالح أو غير مفهوم 👀");
            console.error("Scan error:", error);
          }
        },
        (error) => {
          console.error("Error while scanning", error);
        }
      );

      return () => {
        scanner.clear().catch((err) => console.error("Clear failed", err));
      };
    }
  }, [cameraAvailable, navigate]);

  return (
    <div>
      <div className="flex gap-6 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/student-dashboard/coursesstudent")}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] ">COURCES </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A]"> CS </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> scan QR code </h1>
      </div>
      <div>
        <div className="flex flex-col items-center p-4">
          <h1 className="mb-4 text-xl font-bold">
            Make sure you allow your camera
          </h1>
          {cameraAvailable ? (
            <div id="reader" className="w-full max-w-md"></div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                onClick={() => alert("Upload image functionality here")}
                className="bg-[#161B39] w-56 h-15 text-white flex justify-center items-center gap-2"
              >
                <span className="text-white">Upload QR Image</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
