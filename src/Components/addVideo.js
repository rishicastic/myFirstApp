import "./signup.css";
import {Button, TextField} from '@mui/material';
import { Formik } from "formik";
import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";
const AddVideo =() => {

    const videoform ={
        title: "",
        description: "",
        thumbnail: "",
        file: "",
    };

    const url =app_config.api_url;
    const [thumbnail, setthumbnail] = useState("");
    const [video, setVideo] = useState("");



    const videoSubmit =( values, {setSubmitting, resetForm})=>{
        values.thumbnail=thumbnail;
        values.file=video;
        console.log(values);
        const reqOpt ={
            method : 'POST',
            body :JSON.stringify(values),
            headers :{
                "Content-Type" : "application/json",
            }
        }

        fetch( url+"/videos/add",reqOpt)
        .then( res=> res.json())
        .then ( data =>{
            console.log(data);
            Swal.fire({
                icon: "success",
                title:"success",
                message:"video add successfully",
            })
            resetForm ();
            setthumbnail("");
            setVideo("");
        } );

    };

    const uploadThumbnail= (e)=> {
        let formdata = new FormData();
        let file = e.target.files[0];
        setthumbnail(file.name);
        formdata.append('file',file);

        fetch(url+"/utils/uploadfile",{method:"POST", body: formdata})
        .then((res)=>res.json())
        .then((data)=> console.log(data))
    }
    const uploadVideo= (e)=> {
        let formdata = new FormData();
        let file = e.target.files[0];
        setVideo(file.name);
        formdata.append('file',file);

        fetch(url+"/utils/uploadfile",{method:"POST", body: formdata})
        .then((res)=>res.json())
        .then((data)=> console.log(data))
    }


    return(

        <div class="container"> 
        
        <div class="card">

            <div class="row">

                <div class="col-md">
                    <div class="img-back"></div>
                     <img src="" alt=""/> 
                </div>

                <div class="col-md">
                    <div class="card-body my-card-body">
                        <p class="h3">Upload Video</p>
                        <p class="text-muted">Add Video</p>

                        <hr/>
                        <Formik initialValues={ videoform } onSubmit={videoSubmit}>
                        {({values, handleSubmit, handleChange}) =>(
                            <form onSubmit={handleSubmit}>

                            {/* <div class="form-floating">
                               <input id="email" type="email" class="form-control" placeholder="Email"/>

                               <label for="email">Email</label>
                           </div>  */}
                           
                           <TextField className="w-100 mt-5" variant="filled" id="title" type="text" label="Video Ttile" onChange={handleChange} value={values.title}/>



                           <TextField className="w-100 mt-3" variant="filled" id="description" type="text" label="Description" onChange={handleChange} value={values.description}/>
                            <lable className="mt-5">Upload Thumbnail</lable>
                           <input type="file" className="form-control " onChange={uploadThumbnail}/>
                           <lable className="mt-5">Upload Video</lable>
                           <input type="file" className="form-control " onChange={uploadVideo}/>


                           <Button type= "submit" color="primary" variant="contained" className="mt-5 w-35">Add Video</Button>

                           <a href="" class="text-muted mt-5" >Already have an account?</a>

                       </form>

                        )}

                        </Formik>



                    </div>


                </div>

            </div>


        </div>

    </div>
    )
}
export default AddVideo;