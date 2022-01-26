import React, { useState } from "react";
import QrReader from "react-qr-reader";

//style
import "./style.css";

const QRReader = () => {
  const [result, setResult] = useState("No result");
  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };
  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <div className="myEvent"></div>
      <main className="event card contentEvent">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <p>{result}</p>
      </main>
    </div>
  );
};

export default QRReader;
