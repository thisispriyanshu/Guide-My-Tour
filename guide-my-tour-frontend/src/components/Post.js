import React from 'react';
import {useForm} from "react-hook-form"

function Post(){
    const { register,handleSubmit } = useForm()
    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter your name"/>
            <input type="text" placeholder="Enter place name"/>
            <input type="text" placeholder="Enter location"/>
            <input type="text" placeholder="Enter about the place"/>
            <input {...register('file',{required:true})} type="file" name="picture"/>
            <button>Submit</button>
        </form>
    );
}

export default Post;