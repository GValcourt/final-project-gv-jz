import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

export const userLikesLocation = async (userID, placeID) => {
  const response = await axios.post(
    `${USERS_API}/${userID}/likes/${placeID}`
  );
  return response.data;
};

export const userUnlikesLocation = async (userID, placeID) => {
  const response = await axios.delete(
    `${USERS_API}/${userID}/likes/${placeID}`
  );
  return response.data;
};

export const findLikesByUserID = async (userID) => {
  const response = await axios.get(`${USERS_API}/${userID}/likes/userID`);
  //console.log(response.data)
  return response.data;
};

export const findLikesByPlaceID = async (placeID) => {
  const response = await axios.get(`${USERS_API}/${placeID}/likes/placeID`);
  return response.data;
};