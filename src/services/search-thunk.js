import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./search-service"

export const checkLocationThunk = createAsyncThunk(
    'places/checkLocation', async (location) =>
      await service.checkLocation(location)
)

export const getLocationCandidatesThunk = createAsyncThunk(
    'places/locationCandidates', async (location) =>
      await service.getLocationCandidates(location)
)