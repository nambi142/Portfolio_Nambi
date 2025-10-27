import React from "react";
import "../Css/Video.css";

const Video = () => {
  const youtubeLink = "https://youtu.be/s-xhkvrKSuI?si=1FUZbKVYL62-NQgs";
  const embedLink =
    "https://www.youtube.com/embed/s-xhkvrKSuI?si=1FUZbKVYL62-NQgs";

  return (
    <section className="video-section" id="video">
      <h2 className="video-title">Self Introduction</h2>
      <p className="video-description">
        Here’s my self-introduction video — get to know me and my professional
        background.
      </p>

      <div className="video-wrapper">
        <iframe
          src={embedLink}
          title="Self Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Button placed INSIDE the video frame */}
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-overlay-btn"
        >
          Watch on YouTube
        </a>
      </div>
    </section>
  );
};

export default Video;
