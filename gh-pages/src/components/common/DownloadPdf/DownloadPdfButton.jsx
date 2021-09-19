import React from "react";

import { html2canvas } from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadPdfButton = () => {
    const handleDownload = async () => {
        // const element = document.getElementById("#root");

        // const canvas = await html2canvas(element);
        // const image = canvas.toDataUrl("image.png");

        // const pdf = new jsPDF();
        // pdf.addImage(image);
        // pdf.save();
    };

    return (
        <div>
            <button onClick={() => handleDownload()}>Download PDF</button>
        </div>
    );
};

export default DownloadPdfButton;