"use client";

import { useEffect, useRef, useState } from "react";
import { ApiEndPoints } from "../config/apiconfig";
import AndroidServices from "../services/androidservice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import convert from "@/utils/convetor";
import { urlToBase64 } from "../api/base64";
import { getAllMedia, saveMedia, saveText } from "@/utils/indexdb";


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

  const [imageUrl, setImageUrl] = useState('');
  const [base64Image, setBase64Image] = useState('');
    const [mediaList, setMediaList] = useState<any>([]);

    const handleImageUpload = async (event:any) => {
      // debugger

      // await saveMedia(1,event, 'image');
      await saveText(2,"hello","text")
      const media = await getAllMedia();
      setMediaList(media);

  };

  const getWetherDetail =  async()=>{
    var response = await axios("")
  }
const ConvetToBase64=async()=>{
//   const imageUrl = 'http://202.51.74.85:6003/get-images//1701490664865.jpg'; 
//   urlToBase64(imageUrl).then((base64:any) => {
//     if(imageUrl)
//     setBase64Image(base64);
// });
handleImageUpload("")

}

console.log(mediaList);

  
    useEffect(() => {
      ConvetToBase64()
   
    }, []);
    console.log(mediaList[0]?.data);
    
   

  
  useEffect(() => {
    getVideo();
    getPdf();
  }, []);

  return (
    <div className="d-flex col-xl-12 col-lg-12">
      <div style={{ height: "100vh" }} className="col-6 ">
        {/* <img src={mediaList[0].data} width={100} height={100}/> */}
    

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
