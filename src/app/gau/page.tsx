"use client";

import { useEffect, useRef, useState } from "react";
import { ApiEndPoints } from "../config/apiconfig";
import AndroidServices from "../services/androidservice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import convert from "@/utils/convetor";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },

};
let images = [
  {
    path: "/assets/images/1.jpeg",
  },
  {
    path: "/assets/images/2.jpeg",
  },
  {
    path: "/assets/images/3.jpeg",
  },
  {
    path: "/assets/images/4.jpeg",
  },
  {
    path: "/assets/images/5.jpeg",
  },
  {
    path: "/assets/images/6.jpeg",
  },
  {
    path: "/assets/images/7.jpeg",
  },
  {
    path: "/assets/images/8.jpeg",
  },
  {
    path: "/assets/images/9.jpeg",
  },
  {
    path: "/assets/images/10.jpeg",
  },
  {
    path: "/assets/images/11.jpeg",
  },
  {
    path: "/assets/images/12.jpeg",
  },
  {
    path: "/assets/images/13.jpeg",
  },
];

const GauImages = () => {
  const [palikaImages, setPalikaImages] = useState<any>();
  const getVideo = async () => {
    // debugger;
    var response = await AndroidServices.Videos();
    if (response.code == 200) {
      setPalikaImages(response?.data[0]?.link);
    }
  };
  const [pdfFile, setPdfFile] = useState<any>();
  const getPdf = async () => {
    var response = await AndroidServices.Screens();
    setPdfFile(response?.badaPatra[0]?.image);
    let images = convert(ApiEndPoints.api + response?.badaPatra[0]?.image);
    console.log(images);

    // getImages(response?.badaPatra[0]?.image)
  };
  const getImages = async (path: string) => {
    var response = await AndroidServices.GeneralImages(path);
    // setPdfFile(response)
  };
  console.log(pdfFile?.length);

  useEffect(() => {
    getVideo();
    getPdf();
  }, []);

  return (
    <div className="d-flex col-xl-12 col-lg-12">
      <div style={{ height: "100vh" }} className="col-6 ">
        {/* <video width="720" height="480"  autoPlay={true}
              id="v0"
              preload="preload">
        <source src={palikaImages} type={"video/mp4"} />
      </video> */}

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hjJj-9H1-pk?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-6 m-0 p-0" style={{ height: "100vh" }}>
        {/* <iframe
        contentEditable={false}
          src={"http://202.51.74.85:6003/get-images/"+pdfFile+"#page=2"}
          title="PDF Viewer"
          width="100%"
          height="100%"
        /> */}
        <div className="bg-primary d-flex justify-content-center ">
          <span className="text-center text-white">
            मकालु गाउँपालिका कार्यालयको डिजिटल नागरिक बडापत्र
          </span>
        </div>

        {images && images?.length > 0 && (
          <Carousel
            arrows={false}
            autoPlaySpeed={8000}
            autoPlay
            responsive={responsive}
          >
            {images &&
              images?.map((item: any, index: number) => (
                <div key={index}>
                  <img src={item.path} className="img-fluid" />
                </div>
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
export default GauImages;
