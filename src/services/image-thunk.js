import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./image-service"

export const getImageThunk = createAsyncThunk(
  'images/getImage', async (imageid) =>{
    //console.log(imageid)
    let imageurl = await service.getImage(imageid)
    //console.log(imageurl)
    return imageurl
  }
)

export const postImageThunk = createAsyncThunk(
    'images/postImage', async (image) =>{
        await service.postImage(image)
        //console.log(article)
    }
)
