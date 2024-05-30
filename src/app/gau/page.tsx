"use client";

import { useEffect, useRef, useState } from "react";
import { ApiEndPoints } from "../config/apiconfig";
import AndroidServices from "../services/androidservice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import convert from "@/utils/convetor";
import { getAllMedia, saveMedia, saveText } from "@/utils/indexdb";
import { urlToBase64 } from "../api/base64";


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
 
];

const GauImages = () => {
  const [palikaImages, setPalikaImages] = useState<any>();
  const getVideo = async () => {
    var response = await AndroidServices.Videos();
    if (response.code == 200) {
      setPalikaImages(response?.data[0]?.link);
    }
  };
  const [pdfFile, setPdfFile] = useState<any>();
  const getPdf = async () => {
    var response = await AndroidServices.Screens();
    setPdfFile(response?.badaPatra[0]?.image);
    ConvetToBase64(response?.badaPatra[0]?.image)
    let images = convert(ApiEndPoints.api + response?.badaPatra[0]?.image);
    console.log(images);

    // getImages(response?.badaPatra[0]?.image)
  };

  const [base64Image, setBase64Image] = useState('');
    const [mediaList, setMediaList] = useState<any>([]);

    const handleImageUpload = async (event:any) => {

      await saveMedia(13,event, 'wadapatrapdf');
      const media = await getAllMedia();
      setMediaList(media);

  };
  const [wadaPatraImage, setWadaPatraImage] = useState<any>();
  const getWadaPatraImages=async()=>{

    const media = await getAllMedia();
    let data=media.filter((item:any)=>(item.type=="wadapatra"))
    setWadaPatraImage(data)
    

  }

const ConvetToBase64=async(path:string)=>{
  const imageUrl ="http://202.51.74.85:6003/get-images/"+ path; 
  urlToBase64(imageUrl).then((base64:any) => {
    if(imageUrl)
    setBase64Image(base64);
  handleImageUpload(base64)
});

}
const [wadapatraPdf,setWadaPatraPdf]=useState<any>()
const [youtubeVideo,setYoutubeVideo]=useState<any>()
const fetchMedia = async () => {
  setWadaPatraImage([]);
  const media = await getAllMedia();
  setMediaList(media);
  setYoutubeVideo(media.filter((item:any)=>(item.type=="youtube")))
  setWadaPatraPdf(media.filter((item: any) => (item.type == "wadapatrapdf")));
  
  
}; 

    useEffect(() => {
      fetchMedia()
      getWadaPatraImages()
      // ConvetToBase64()
   
    }, []);
    
  useEffect(() => {
    getVideo();
    getPdf();
  }, []);

  return (

    <div className="d-flex col-xl-12 col-lg-12">
      <div style={{ height: "80vh" }} className="col-6 ">
        {/* <img src={mediaList[0].data} width={100} height={100}/> */}
    
        <video className="mx-2" controls autoPlay src={youtubeVideo?youtubeVideo[0]?.data :'/assets/video/himali.mp4'}   width={"100%"} height={"100%"}></video>

        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hjJj-9H1-pk?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
      </div>
      <div className="col-6 m-0 p-0" style={{ height: "80vh" }}>
      
        <div className="bg-primary d-flex justify-content-center ">
          <span className="text-center text-white">
            मकालु गाउँपालिका कार्यालयको डिजिटल नागरिक बडापत्र
          </span>
        </div>

        {/* <iframe
  src={`http://202.51.74.85:6003/get-images/${wadaPatraImage[0]?.data}#page=2`}  // Change '2' to the page number you want
  title="PDF Viewer"
  width="100%"
  height="100%"
/> */}
        {/* <iframe src={ wadaPatraImage[0]?.data} title="PDF Viewer" width="100%" height="100%" /> */}

        {wadaPatraImage && wadaPatraImage?.length > 0 && (
          <Carousel
            arrows={false}
            autoPlaySpeed={8000}
            autoPlay
            infinite
            responsive={responsive}
          >
            {wadaPatraImage &&
              wadaPatraImage?.map((item: any, index: number) => (
                <div key={index} style={{width:"100%", height:"100%"}}>

                  <img src={item.data} className="img-fluid" />
                </div>
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
export default GauImages;
