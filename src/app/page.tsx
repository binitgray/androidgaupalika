// 'use client'
// import { getAllMedia, saveMedia } from '@/utils/indexdb';
// import React, { useEffect, useState } from 'react';
// import AndroidServices from './services/androidservice';

// const MediaComponent = () => {
//   const [mediaList, setMediaList] = useState<any>([]);

//   useEffect(() => {
//     async function fetchMedia() {
//       const media = await getAllMedia();
//       setMediaList(media);
//     }
//     fetchMedia();
//   }, []);

//   const handleImageUpload = async (event:any) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = async (e:any) => {
//       await saveMedia(file.name, e.target.result, 'image');
//       const media = await getAllMedia();
//       setMediaList(media);
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleVideoUpload = async (event:any) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = async (e:any) => {
//       await saveMedia(file.name, e.target.result, 'video');
//       const media = await getAllMedia();
//       setMediaList(media);
//     };

//     reader.readAsDataURL(file);
//   };
//   const getImages = async () => {
//     // debugger;
//     var response = await AndroidServices.Videos();
//     if (response.code == 200) {
//       handleVideoUpload(response?.data[0]?.link)
//       // setPalikaImages();
//     }
//   };


//   useEffect(()=>{
//     getImages()
//   },[])

//   return (
//     <div>
//       <h1>Media Component</h1>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <input type="file" accept="video/*" onChange={handleVideoUpload} />

//       <div>
//         {mediaList.map((media:any) => (
//           <div key={media.id}>
//             {media.type === 'image' ? (
//               <img src={media.data} alt={media.id} width="300" />
//             ) : (
//               <video autoPlay src={media.data}controls width="300"></video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MediaComponent;


"use client"
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AndroidServices from "./services/androidservice";
import { ApiEndPoints } from "./config/apiconfig";
import Navbar from "./components/navbar";
import Scroller from "./components/scroller";


export default function Gaupalika() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [screenData, setScreenData] = useState<any>();
  const [officials, setOfficials] = useState<any>();
  const GetScreenData = async () => {
    var resp = await AndroidServices.Screens();
    setScreenData(resp);
    setOfficials(resp.officals)
  };
  useEffect(() => {
    GetScreenData();
  }, [])
  console.log(screenData);
  console.log(officials, "officials");


  return (
    <>
      <Navbar />
      <Scroller />
      <section className="members">
        <div className="d-flex  align-items-center position-absolute ">
          <div className="py-2 bg-gray-200 w-[15%] h-full px-6 grid d-flex gap-2 col-3">
            <div className="">
              <div className="grid grid-cols-5 align-items-center text-sm gap-4 ">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2">जनसंख्या </label>
                <label className="text-[#1ed033] text-right col-span-2">१३४९२</label>
              </div>
              <div className="grid grid-cols-5 align-items-center text-sm gap-4">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z">

                    </path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2"> बिद्यालय संख्या</label>
                <label className="text-[#1ed033] text-right col-span-2">४७</label>
              </div>
              <div className="grid grid-cols-5 align-items-center text-sm gap-4">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32zM160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6v20zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z">

                    </path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2"> स्वास्थ्य संस्था संख्या</label>
                <label className="text-[#1ed033] text-right col-span-2">१८ </label>
              </div>
              <div className="grid grid-cols-5 align-items-center text-sm gap-4">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z">

                    </path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2">सामुदायिक बन संख्या</label>
                <label className="text-[#1ed033] text-right col-span-2">४०</label>
              </div>
              <div className="grid grid-cols-5 align-items-center text-sm gap-4">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M288 114.96L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496c0 8.84 7.16 16 16 16h149.23L192 439.19l104.11-64-60.16-119.22L384 392.75l-104.11 64L319.81 512H496c8.84 0 16-7.16 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2L288 114.96zm282.69 121.32L512 184.45V48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v51.69L314.75 10.31C307.12 3.45 297.56.01 288 0s-19.1 3.41-26.7 10.27L5.31 236.28c-6.57 5.91-7.12 16.02-1.21 22.6l21.4 23.82c5.9 6.57 16.02 7.12 22.6 1.21L277.42 81.63c6.05-5.33 15.12-5.33 21.17 0L527.91 283.9c6.57 5.9 16.69 5.36 22.6-1.21l21.4-23.82c5.9-6.57 5.36-16.69-1.22-22.59z">

                    </path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2"> घरधुरी संख्या</label>
                <label className="text-[#1ed033] text-right col-span-2">३३०९ </label>
              </div>
              <div className="grid grid-cols-5 align-items-center text-sm gap-4">
                <span className="text-[#D01E29] text-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M368 48c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h16v156.7C11.8 214.8 0 226.9 0 240c0 67.2 34.6 126.2 86.8 160.5l-21.4 70.2C59.1 491.2 74.5 512 96 512h192c21.5 0 36.9-20.8 30.6-41.3l-21.4-70.2C349.4 366.2 384 307.2 384 240c0-13.1-11.8-25.2-32-35.3V48h16zM80 72c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V72zm112 200c-77.1 0-139.6-14.3-139.6-32s62.5-32 139.6-32 139.6 14.3 139.6 32-62.5 32-139.6 32z">

                    </path>
                  </svg>
                </span>
                <label className="text-[#D01E29] whitespace-nowrap col-span-2">शौचालय संख्या </label>
                <label className="text-[#1ed033] text-right col-span-2">३३७४</label>
              </div>
            </div>
            <div className="bg-[#2460B9] text-white d-flex align-items-center  w-[3vw]" style={{ height: "100%" }}>
              <span className="-rotate-90">पदाधिकारिहरु</span>
            </div>
          </div>
          <div className="d-flex gap-4 ml-2 w-[50vw] justify-between">
            {officials && officials.length > 0 && officials.map((item: any, index: number) => {
              console.log(ApiEndPoints.baseUrl + item?.photo);

              return (
                <div>
                  <div className="d-flex gap-2">
                    {item?.photo ?
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt={`${item?.name}`} src={ApiEndPoints.baseUrl + "/get-images/" + item?.photo} /> : ""
                    }
                    <div className="d-flex flex-column gap-1">
                      <div className=" text-lg whitespace-nowrap font-bold w-[8vw]" style={{ margin: "-4px", width: "100%" }}>{item?.name}</div>
                      <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>{item?.position}</div>
                      <div className="d-flex relative align-items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                          <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                          </path>
                        </svg>
                        <span className="ml-4 text-base text-primary-red">{item?.contact_number}</span>
                      </div>
                      <label className=" text-primary-blue" style={{ margin: "3px" }}>

                      </label>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="">
            <div className="">
              <div className="" >

                <Carousel responsive={responsive}>
                  <div className="swiper-slide d-flex gap-1" >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="योगराज राई" src="http://202.51.74.85:6003/get-images//1701490664865.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>योगराज राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा अध्यक्ष</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६२६५७०३७ </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="आङबाबु शेर्पा" src="http://202.51.74.85:6003/get-images//1687924503416.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>आङबाबु शेर्पा</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा अध्यक्ष</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९७४२३१३७०८ </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="बाल कुमार तामाङ" src="http://202.51.74.85:6003/get-images//1688135197073.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>बाल कुमार तामाङ</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}> वडा अध्यक्ष</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४०४६६४०६</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="छोपल शेर्पा " src="http://202.51.74.85:6003/get-images//1688135342294.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>छोपल शेर्पा </div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा अध्यक्ष</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६३९९०९२७</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="नरेन्द्र कुमार राई" src="http://202.51.74.85:6003/get-images//1701789612095.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>नरेन्द्र कुमार राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा अध्यक्ष</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४३९३७२९१</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="सविना जैरु" src="http://202.51.74.85:6003/get-images//1701488487959.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>सविना जैरु</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य / कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६६२६१९३४</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="बाल कुमारी राई" src="http://202.51.74.85:6003/get-images//1701489438898.jpeg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>बाल कुमारी राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य / कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४३९३५७५८</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="कविता वि.क." src="http://202.51.74.85:6003/get-images//1701489033516.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>कविता वि.क.</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य / कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४२९८८११४</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-prev d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="सिता सेति सुरुवाल" src="http://202.51.74.85:6003/get-images//1701490294779.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>सिता सेति सुरुवाल</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य / कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९७४२८३३७०९</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-active d-flex gap-1"  >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="राम बहादुर राई" src="http://202.51.74.85:6003/get-images//1701490261419.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>राम बहादुर राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}> कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६२५९३०७९</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-next d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="डिल्ली राई" src="http://202.51.74.85:6003/get-images//1701489080615.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>डिल्ली राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}> कार्यपालिका सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८५२०९९९६०</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="संगिता दर्जी" src="http://202.51.74.85:6003/get-images//1701489538804.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>संगिता दर्जी</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="दिल बहादुर राई" src="http://202.51.74.85:6003/get-images//1701490212995.jpeg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>दिल बहादुर राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६२२०११६८</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="डम्बर बहादुर राई" src="http://202.51.74.85:6003/get-images//1701490182653.jpeg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>डम्बर बहादुर राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४२९६३०७७</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="गिता राई" src="http://202.51.74.85:6003/get-images//1701490118792.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>गिता राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४०४६६४०६</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="सम्भु खालिङ" src="http://202.51.74.85:6003/get-images//1701490097029.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>सम्भु खालिङ</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४०९८७६२६</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="सविन मागर" src="http://202.51.74.85:6003/get-images//1701490065624.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>सविन मागर</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४९०५६१२६</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="पेमा लमु शेर्पा" src="http://202.51.74.85:6003/get-images//1701490037030.jpeg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>पेमा लमु शेर्पा</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९७४२९२७६४४</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="तेम्बा शेर्पा" src="http://202.51.74.85:6003/get-images//1701490015891.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>तेम्बा शेर्पा</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४१२२५१५१</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="सुर्दसन थापा मगर" src="http://202.51.74.85:6003/get-images//1701489991027.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>सुर्दसन थापा मगर</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४९४०९५४२</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="जित बहादुर राई" src="http://202.51.74.85:6003/get-images//1701489929394.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>जित बहादुर राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६३१६७०८४</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="कुसुम तामाङ" src="http://202.51.74.85:6003/get-images//1701489901366.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>कुसुम तामाङ</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४६८९७०२९</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="गिता पराजुली थापा" src="http://202.51.74.85:6003/get-images//1701489837567.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>गिता पराजुली थापा</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९७४९९२७४४९</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="चन्द्र धोज राई" src="http://202.51.74.85:6003/get-images//1701489815419.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>चन्द्र धोज राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४५२६२९८८</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="प्रेम सिं राई" src="http://202.51.74.85:6003/get-images//1701489625203.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>प्रेम सिं राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४९८४२४३४</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="नरेन्द्र बहादुर राई" src="http://202.51.74.85:6003/get-images//1695204925258.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>नरेन्द्र बहादुर राई</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६१०८९४०५</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="दिपक कुमार खम्बु" src="http://202.51.74.85:6003/get-images//1701489600371.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>दिपक कुमार खम्बु</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८६०५३१५९८</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide d-flex gap-1"   >
                    <div className="d-flex gap-1 mt-1">
                      <img className="w-[8vw] h-[10vw] object-cover aspect-auto" alt="तारा देवि वि क" src="http://202.51.74.85:6003/get-images//1695205053292.jpg" />
                      <div className="d-flex flex-column gap-1">
                        <div className=" text-lg whitespace-nowrap font-bold" style={{ margin: "-4px" }}>तारा देवि वि क</div>
                        <div className=" 2xl:font-bold  text-primary-green whitespace-nowrap overflow-hidden" style={{ margin: "-4px" }}>वडा सदस्य</div>
                        <div className="d-flex relative align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute w-4 text-blue-400" fill="currentColor">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">

                            </path>
                          </svg>
                          <span className="ml-4 text-base text-primary-red">९८४७२१३१०६</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="swiper-button-prev">

              </div>
              <div className="swiper-button-next">

              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
                <span className="swiper-pagination-bullet">

                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
