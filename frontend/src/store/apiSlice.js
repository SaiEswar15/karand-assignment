import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name : "apiData",
    initialState : {
        apiData : [],
        file : "",
        searchData : "",
        searchModalData : "",
        loginNotification : "",
        signupNotification : "",
        loggedin : false,
        to : "",
        text : "",
        attachment : "",
        subject : "",
        newData : "",
        email : "",
        sendingEmail : ""
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
            console.log(action.payload, "setFile")
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
        setSearchModalData(state,action)
        {
            return {
                ...state,
                searchModalData : action.payload
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
        addNewData(state,action)
        {
            return {
                ...state,
                newData : action.payload
            }
        },
        setEmail(state,action)
        {
            return {
                ...state,
                email : action.payload
            }
        },
        setSendingEmail(state,action)
        {
            return {
                ...state,
                sendingEmail : action.payload
            }
        },

        
        
        
    }
})

export const apiActions = apiSlice.actions;

export default apiSlice;