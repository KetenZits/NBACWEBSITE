"use client";
import React, { useEffect } from "react";

const Tiktokpage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@nbac2561"
        data-unique-id="nbac2561"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@nbac2561?refer=creator_embed"
          >
            @nbac2561
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default Tiktokpage;
