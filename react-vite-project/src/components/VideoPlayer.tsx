function VideoPlayer() {
  return (
    <div className="mb-3">
      <video controls width="860">
        <source src="http://localhost:4000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
