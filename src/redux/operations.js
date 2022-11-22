import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://637bddee6f4024eac219dde5.mockapi.io";

export const fetchContacts = createAsyncThunk(
    // action type:
    "contacts/fetchAll", // -> "contacts/fetchAll/postfixes" (pfx: pending,fulfilled,rejected)
    // function to make HTTP req and return a promise data(payload):
    async (_, thunkAPI) => { //payloadCreator fn
    try {
        const res = await axios.get("/contacts"); //data(payload)
        return res.data; 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const res = await axios.post("/contacts", {name, number});
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)