"use client";

import { useEffect, useRef, useState } from "react";
import { ApiEndPoints } from "../config/apiconfig";
import AndroidServices from "../services/androidservice";
import NextVideo from "next-video";
import { YouTubePlayer } from "react-youtube";

const GauImages = () => {
  const [palikaImages, setPalikaImages] = useState<any>();
  const getImages = async () => {
    // debugger;
    var response = await AndroidServices.Videos();
    if (response.code == 200) {
      setPalikaImages(response?.data[0]?.link);
    }
  };
  console.log(palikaImages);

  useEffect(() => {
    getImages();
  }, []);


  return (
    <div className="d-flex col-xl-12 col-lg-12">
      <div style={{ height: "80vh" }} className="py-2 px-4 ">
      <video width="720" height="480"  autoPlay={true}
              id="v0"
              preload="preload">
        <source src={palikaImages} type={"video/mp4"} />
      </video>

      {/* <div ref={videoRef}>
      {load ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/hjJj-9H1-pk?si=uT0FMNkCs-8KE98l`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div> */}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hjJj-9H1-pk?si=uT0FMNkCs-8KE98l"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
      </div>
      <div className="col-6">
        <iframe
          src={ApiEndPoints.baseUrl + ""}
          title="PDF Viewer"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
export default GauImages;
