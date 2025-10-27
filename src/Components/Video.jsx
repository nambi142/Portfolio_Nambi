import React from "react";
import "../Css/Video.css";

const Video = () => {
  const youtubeLink = "https://youtu.be/s-xhkvrKSuI?si=1FUZbKVYL62-NQgs";
  const embedLink =
    "https://www.youtube.com/embed/s-xhkvrKSuI?si=1FUZbKVYL62-NQgs";

  return (
    <section className="video-section" id="video">
      <h2 className="video-title">My Coding Journey</h2>
      <p className="video-description">
        This video is all about my coding journey — how I started learning,
        practiced projects, and gradually moved into real-time web development.
        It’s perfect for beginners who want to become software developers.
      </p>

      <div className="video-wrapper">
        <iframe
          src={embedLink}
          title="My Coding Journey Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
