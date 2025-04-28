import icon1 from '../../../../assets/Chevron right.png'
import back from '../../../../assets/Frame 129.png'
import React, { useState, useEffect  } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
// import uploadIcon from '../../../../assets/upload-icon.png'
// import camera from '../../../../assets/camera-svgrepo-com 1.png'
export default function Scanqrcodestudent() {
        const navigate = useNavigate();
        const [cameraAvailable, setCameraAvailable] = useState(true); // حالة لتحديد إذا كانت الكاميرا متاحة أو لا

        useEffect(() => {
            // تحقق إذا كان الجهاز يحتوي على كاميرا
            if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
                navigator.mediaDevices.enumerateDevices().then(devices => {
                    const hasCamera = devices.some(device => device.kind === 'videoinput');
                    setCameraAvailable(hasCamera);
                });
            }
    
            if (cameraAvailable) {
                const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    
                scanner.render(
                    (decodedText) => {
                        if (decodedText.startsWith("section_") || decodedText.startsWith("lecture_") ) {
                            navigate("/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee");
                        } else {
                            alert("كود مش صحيح 👀");
                        }
                    },
                    (error) => {
                        console.error("Error while scanning", error);
                    }
                );
    
                return () => {
                    scanner.clear().catch(err => console.error("Clear failed", err));
                };
            }
        }, [cameraAvailable, navigate]);
    
  return (
    <div>
      <div className='flex gap-6 md:m-10 max-md:m-3 items-center'>
                       <button onClick={() => navigate("/student-dashboard/coursesstudent")} className='flex gap-2 items-center  text-[#161B39]'>
                       <i className="fa-solid fa-arrow-left-long" />
                       <h1>BACK</h1>
                                  </button>
                 <h1 className='text-[#71717A] '>COURCES </h1>
                 <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A]'> CS </h1>
                 <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                 <h1 className='text-[#71717A] '>  scan QR code  </h1>
      
                 </div>
                 <div>
                 <div>
           
            <div className="flex flex-col items-center p-4">
                <h1 className="mb-4 text-xl font-bold">Make sure you allow your camera</h1>
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
    </div>
  )
}
{/* <button className='bg-[#161B39] w-56 h-15 text-white flex justify-center items-center gap-2'>
<img src={camera} alt="" /> 
<span className='text-white' >start scanning</span>

</button> */}

