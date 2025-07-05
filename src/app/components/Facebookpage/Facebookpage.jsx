"use client";

import { useEffect } from "react";

export default function FacebookPagePlugin() {
  useEffect(() => {
    // โหลด SDK เองตอน client เท่านั้น
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v23.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="fb-root">
      <div
        className="fb-page rounded-2xl shadow-lg ring-blue-400/40"
        data-href="https://www.facebook.com/nakprasith.nbac?locale=th_TH"
        data-tabs="timeline"
        data-width="350"
        data-height="650"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/nakprasith.nbac?locale=th_TH"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/nakprasith.nbac?locale=th_TH">
            วิทยาลัยเทคโนโลยีนาคประสิทธิ์บริหารธุรกิจ - NBAC
          </a>
        </blockquote>
      </div>
    </div>
  );
}
