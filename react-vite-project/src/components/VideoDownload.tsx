import React, { useState } from "react";

function VideoDownload() {
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:4000/video/download");
      const reader = response.body?.getReader();

      if (!reader) {
        return;
      }

      const contentLength = +(response.headers?.get("Content-Length") || 0);
      let receivedLength = 0;
      let chunks = [];

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          console.log("Download complete.");

          const blob = new Blob(chunks, { type: "video/mp4" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = "video.mp4";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);

          setDownloadProgress(100);
          break;
        }
        chunks.push(value);
        receivedLength += value.length;
        const progress = (receivedLength / contentLength) * 100;
        setDownloadProgress(progress);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={handleDownload}
        className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
      >
        Download Video
      </button>
      {downloadProgress > 0 && downloadProgress < 100 && (
        <p className="flex gap-3 items-center">
          Download progress: <progress value={downloadProgress} max={100} />
        </p>
      )}
      {downloadProgress === 100 && <p>Download complete!</p>}
    </div>
  );
}

export default VideoDownload;
