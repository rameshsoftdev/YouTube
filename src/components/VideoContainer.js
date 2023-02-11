import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import {Link} from 'react-router-dom';
import VideoCard from "./VideoCard";

const VideoContainer = ()=>{
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[])
    async function getVideos(){
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
    return <>
       <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
    </>
}
export default VideoContainer;