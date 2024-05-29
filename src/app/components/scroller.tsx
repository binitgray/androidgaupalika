'use client'
import Marquee from "react-fast-marquee";
import AndroidServices from "../services/androidservice";
import { useEffect, useState } from "react";
import { getAllMedia, saveText } from "@/utils/indexdb";

export default function Scroller() {
    const [marqueeNews,setMarqueeNew]=useState<any>()
    const getScrollerContent = async()=>{
        var response  = await AndroidServices.Screens()
        await saveText(response?.marqueeNews[0]?._id,response?.marqueeNews[0],"marqueenews")
        const media = await getAllMedia();
        let marqnews=media.filter((item:any)=>item.type=="marqueenews")
        setMarqueeNew(marqnews[0].data)
        console.log(marqnews[0].data,'MA');
        
        
    }
    
    useEffect(()=>{getScrollerContent()},[])
    return (
        <>
            <section className="scroller">
                <div className="news-container bg-primary-red d-flex  z-10" style={{ height: "30px" }}>
                    <span className="d-flex align-items-center justify-content-center px-1 font-bold text-xl 2xl:p-3 text-white bg-danger w-[6%] " >सुचना</span>
                    <div className=" d-flex align-items-center text-white  text-lg  w-[94%] ms-auto " style={{ backgroundColor: "#3460b9" }}>
                        
                        <Marquee>
                            <div className="child">
                                <span>{marqueeNews && marqueeNews?.content}                                                                         । </span>
                            </div>
                          
                        </Marquee>
                    </div>
                </div>
            </section>
        </>
    )
}