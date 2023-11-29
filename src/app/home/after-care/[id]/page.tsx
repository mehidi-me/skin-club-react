"use client";
import React, { useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function AfterCareDetails() {
  const [pdfPages, setPdfPages] = useState(0);
  const [initialWidth, setInitialWidth] = useState(0);
  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      // @ts-ignore
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  const handleResize = () => {
    setPdfSize();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setPdfSize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onDocumentLoad = (v: any) => {
    console.log(v);
    setPdfPages(v.numPages);
  };
  return (
    <div className="w-full" ref={pdfWrapper}>
      <Document file="/test_pdf.pdf" onLoadSuccess={onDocumentLoad}>
        {new Array(pdfPages).fill(null).map((v: any, index: number) => (
          <Page key={index} pageNumber={index + 1} width={initialWidth}></Page>
        ))}
      </Document>
    </div>
  );
}

export default AfterCareDetails;
