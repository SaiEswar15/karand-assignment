import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name : "apiData",
    initialState : {
        apiData : [],
        file : "",
        searchData : "",
        searchModal : "",
        loginNotification : "",
        signupNotification : "",
        loggedin : false,
        to : "",
        text : "",
        attachment : "",
        subject : ""
    },
    reducers : {

        addData(state,action)
        {
            return {
                ...state,
                apiData : action.payload
            }
        },
        setFile(state,action)
        {
            return {
                ...state,
                file : action.payload
            }
        },
        setSearchData(state,action)
        {
            return {
                ...state,
                searchData : action.payload
            }
        },
        setSearchModal(state,action)
        {
            return {
                ...state,
                searchModal : action.payload
            }
        },
        updateLogin(state,action)
        {
            return {
                ...state,
                loginNotification : action.payload
            }
        },
        update(state,action)
        {
            return {
                ...state,
                signupNotification : action.payload
            }
        },
        status(state,action)
        {
            return {
                ...state,
                loggedin : action.payload
            }
        },
        setTo(state,action)
        {
            return {
                ...state,
                to : action.payload
            }
        },
        setText(state,action)
        {
            return {
                ...state,
                text : action.payload
            }
        },
        setSubject(state,action)
        {
            return {
                ...state,
                subject : action.payload
            }
        },
        setAttachment(state,action)
        {
            return {
                ...state,
                attachment : action.payload
            }
        },

        
        
        
    }
})

export const apiActions = apiSlice.actions;

export default apiSlice;