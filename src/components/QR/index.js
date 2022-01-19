// import React, { useEffect, useState } from "react";

// // import { jsPDF } from "jspdf";
// import html2canvas from 'html2canvas'
// import jsPdf from 'jspdf'

// const QR = () => {
//   // useEffect(() => {
//   //   printPDF()
//   // }, [])
//   function printPDF () {
//     const domElement = document.getElementById('ticket')
//     html2canvas(domElement, { onclone: (document) => {
//       document.getElementById('print-button').style.visibility = 'hidden'
//     }})
//     .then((canvas) => {
  
//         const img = canvas.toDataURL('image/png')
//         const pdf = new jsPdf()
//         pdf.addImage(img, 'JPEG', 0, 0,300, 300)
//         pdf.save('your-filename.pdf')
     
//   })
// }
//     // const doc = new jsPDF({
//     //     orientation: "landscape",
//     //     unit: "in",
//     //     format: [4, 2]
//     //   });
//     //   doc.text("Hello world!", 1, 1);
//     // doc.save("a4.pdf");
//     return (

// <Link
// id="ticket"
//   className="ticket"
//   style={{
//     background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${ticket.event.image})`,
//   }}
//   to={`/ticket/${ticket._id}`}
// >


// <button id="print-button" onClick={printPDF}>print </button>
//   <div className="date">
//     <span className="day">
//       <Moment format="D" withTitle>
//         {ticket.event.beginAt}
//       </Moment>
//     </span>
//     <span className="month-and-time">
//       {" "}
//       <Moment format="MMM" withTitle>
//         {ticket.event.beginAt}
//       </Moment>{" "}
//       <br />
//       <span class="small">
//         {" "}
//         <Moment format="hh A" withTitle>
//           {ticket.event.startTime}
//         </Moment>{" "}
//       </span>
//     </span>
//   </div>

//   <div className="artist">
//     <span className="name">{ticket.event.title}</span>
//     <br />
//     <span className="live small"></span>
//   </div>

//   <div className="flexx">

//       <div className="locationBefore">
//         <QRCode
//           value={
//             `https://eventi-webapp.herokuapp.com/` +
//             `TicketReader` +
//             `/` +
//             ticket._id
//           }
//           size="110"
//         />
        
//         <p className="id">{ticket._id}</p>
//       </div>
//       <br />
//       <div className="location">
//       <span className="small">{ticket.event.location}</span>
//     </div>
//   </div>

//   <div className="rip"></div>

//   <div className="cta">
//     <Link className="buy" to={`/ticket/${ticket._id}`}>
//       Event Details
//     </Link>
//   </div>
// </Link>
//     )
// }

// export default QR
