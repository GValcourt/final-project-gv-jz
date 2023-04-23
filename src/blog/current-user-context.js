import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import {profileThunk} from "../services/auth-thunks";

function CurrentUserContext({children}) {
    console.log("CurrentUserContext starting");
    const dispatch = useDispatch();
    // useEffect( () => {
    //     dispatch(profileThunk());
    //     }, []);
    useEffect( () => {
        async function dispatchThunk() {
            const {payload} = await dispatch(profileThunk())
            console.log("CurrentUserContext result of ProfileThunk dispatch: ", payload);
        }
        dispatchThunk();
    }, []);
    console.log("CurrentUserContext about to return children")
    return children;
}

export default CurrentUserContext;