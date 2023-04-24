import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./location-service"


export const findArticlebyLocationThunk = createAsyncThunk(
    'articles/findArticlebyLocation', async (place_id) =>{
        let location = await service.findLocationbyPlaceID(place_id)
        return location
    }
  )