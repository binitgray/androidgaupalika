"use client";
import { deleteMedia, getAllMedia, saveMedia } from "@/utils/indexdb";
import { useEffect, useState } from "react";

const UploadFile = () => {
  const [mediaList, setMediaList] = useState<any>([]);


  const [youTubeVideo, setyouTubeVideo] = useState<any>();
  const fetchMedia = async () => {
    setyouTubeVideo([]);
    setWadaPatraImage([]);
    const media = await getAllMedia();
    setMediaList(media);
    setWadaPatraImage(media.filter((item: any) => (item.type == "wadapatra")));
    setyouTubeVideo(media.filter((item: any) => (item.type == "youtube")));
  };
  console.log(youTubeVideo, "youtube list");
  console.log(mediaList,"media");
  

  const [wadaPatraImage, setWadaPatraImage] = useState<any>();
  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e: any) => {
      setWadaPatraImage([]);
      await saveMedia(file.name, e.target.result, "wadapatra");
      const media = await getAllMedia();
      setWadaPatraImage(media.filter((item: any) => (item.type == "wadapatra")));
      //   setMediaList(media);
    };

    
    reader.readAsDataURL(file);
    handleReload()
};
  const handleDelete = async (id: number) => {
    await deleteMedia(id);
    setWadaPatraImage([]);
    fetchMedia();
  };
  const handleReload=async()=>{
    fetchMedia()


  }

  const handleVideoUpload = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e: any) => {
      await saveMedia(file.name, e.target.result, "youtube");
      const media = await getAllMedia();
      setyouTubeVideo(media.filter((item: any) => (item.type == "youtube")));
      //   setMediaList(media);
    };

    reader.readAsDataURL(file);
    handleReload()
  };

  //   const getImages = async () => {
  //     // debugger;
  //     var response = await AndroidServices.Videos();
  //     if (response.code == 200) {
  //       handleVideoUpload(response?.data[0]?.link)
  //       // setPalikaImages();
  //     }
  //   };


  useEffect(() => {
    fetchMedia();
  }, []);
  return (
    <div className="m-4">
      <div className="border border-2 rounded-lg p-2">
        <div className="d-flex flex-column col-4">
          <strong className="my-2">Bada patra images</strong>
          <input
            className="form-control "
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="d-flex flex-row flex flex-wrap">
          {wadaPatraImage &&
            wadaPatraImage.length > 0 &&
            wadaPatraImage.map((item: any, index: number) => (
              <div key={index} className="position-relative">
                <img src={item.data} height={250} width={300} />
                <button
                  type="button"
                  className="btn btn-sm btn-danger position-absolute bottom-0 right-0"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="border border-2 rounded-lg p-2">
        <div className="d-flex flex-column col-4">
          <strong className="my-2">Youtube video</strong>
          <input
            className="form-control "
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </div>
        <div className="d-flex flex-row flex flex-wrap">
          {youTubeVideo &&
            youTubeVideo.length > 0 &&
            youTubeVideo.map((item: any, index: number) => (
              <div key={index} className="position-relative">
                <video className="mx-2" autoPlay src={item.data} controls  width="300"></video>
                <button
                  type="button"
                  className="btn btn-sm btn-danger position-absolute bottom-0 right-0"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
{
  /* <input type="file" accept="video/*" onChange={handleVideoUpload} /> */
}
export default UploadFile;
