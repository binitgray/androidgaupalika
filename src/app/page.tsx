'use client'
import { getAllMedia, saveMedia } from '@/utils/indexdb';
import React, { useEffect, useState } from 'react';
import AndroidServices from './services/androidservice';

const MediaComponent = () => {
  const [mediaList, setMediaList] = useState<any>([]);

  useEffect(() => {
    async function fetchMedia() {
      const media = await getAllMedia();
      setMediaList(media);
    }
    fetchMedia();
  }, []);

  const handleImageUpload = async (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e:any) => {
      await saveMedia(file.name, e.target.result, 'image');
      const media = await getAllMedia();
      setMediaList(media);
    };

    reader.readAsDataURL(file);
  };

  const handleVideoUpload = async (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e:any) => {
      await saveMedia(file.name, e.target.result, 'video');
      const media = await getAllMedia();
      setMediaList(media);
    };

    reader.readAsDataURL(file);
  };
  const getImages = async () => {
    // debugger;
    var response = await AndroidServices.Videos();
    if (response.code == 200) {
      handleVideoUpload(response?.data[0]?.link)
      // setPalikaImages();
    }
  };

  
  useEffect(()=>{
    getImages()
  },[])

  return (
    <div>
      <h1>Media Component</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      <div>
        {mediaList.map((media:any) => (
          <div key={media.id}>
            {media.type === 'image' ? (
              <img src={media.data} alt={media.id} width="300" />
            ) : (
              <video autoPlay src={media.data}controls width="300"></video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaComponent;
