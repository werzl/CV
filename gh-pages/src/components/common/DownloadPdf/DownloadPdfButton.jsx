import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import "./DownloadPdfButton.scss";

const DownloadPdfButton = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);

        const filename = "adam_hewitt_cv.pdf";
        const pdf = new jsPDF("p", "mm");

        const element = document.getElementById("root");

        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const pageHeight = 295;

        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

        let heightLeft = imgHeight - pageHeight;
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(filename);

        setLoading(false);
    };

    return (
        <div>
            <button id="download_pdf" onClick={() => handleDownload()}>
                <p>
                    {!loading &&
                        <>Download PDF</>
                    }

                    {loading &&
                        <i className="spinner-grow text-light"></i>
                    }
                </p>
            </button>
        </div>
    );
};

export default DownloadPdfButton;