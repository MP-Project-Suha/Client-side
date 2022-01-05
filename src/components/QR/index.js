import React, { useEffect, useState } from "react";
// import {}
import QRCode from "react-qr-code";
// import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'

const QR = ({url, token}) => {
  useEffect(() => {
    printPDF()
  }, [])
  function printPDF () {
    const domElement = document.getElementById('id')
    html2canvas(domElement, { onclone: (document) => {
      document.getElementById('print-button').style.visibility = 'hidden'
    }})
    .then((canvas) => {
  
        const img = canvas.toDataURL('image/png')
        const pdf = new jsPdf()
        console.log(pdf);
        pdf.addImage(img, 'JPEG', 0, 0,300, 300)
        pdf.save('your-filename.pdf')
     
  })
}
    // const doc = new jsPDF({
    //     orientation: "landscape",
    //     unit: "in",
    //     format: [4, 2]
    //   });
    //   doc.text("Hello world!", 1, 1);
    // doc.save("a4.pdf");
    return (


         <>
            {/* <QRCode value={url}/> */}
            <h1 id="id">id</h1>
            <button id="print-button" onClick={printPDF}>print </button>
     
 </>
    )
}

export default QR
