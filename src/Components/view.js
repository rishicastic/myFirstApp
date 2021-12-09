import { Container } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import app_config from "../config";

const ViewVideo =() =>{

    const { id } =useParams();

    const [videoDetail, setVideoDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const url = app_config.api_url

    const fetchVideosData =() =>{
        fetch(url+'/videos/getbyid/'+id)
        .then (res => res.json() )
        .then ((data) =>{
            console.log(data);
            setVideoDetail(data);
            setLoading(false);
        })
    }
    useEffect(() => {
       fetchVideosData();
    }, []);

    const displayVideo =() =>{
        if (!loading){
            return(
                <video className = "img_fluid" src = {url+'/'+videoDetail.file} controls ></video>
            )
        }
    }

    return(
        <div>
            <Container>
                
               {displayVideo()}
            </Container>
        </div>
    );
};

export default ViewVideo;