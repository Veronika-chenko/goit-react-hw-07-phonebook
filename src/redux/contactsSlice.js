import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toast } from "react-toastify";

import contacts from "../contacts.json"

const persistConfig = {
    key: 'contacts',
    storage,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {contacts},
    reducers: {
        addContact: {
            reducer(state, action) {
                const { contacts } = state;
                for (const contact of contacts) {
                    if (contact.name === action.payload.name) {
                        toast.error(`${action.payload.name} is already in contacts.`)
                        return;
                    }
                }
                contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const { contacts } = state;
            const deleteIndex = contacts.findIndex(contact => contact.id === action.payload);
            contacts.splice(deleteIndex, 1);
        },
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);


// #1
// forgot:
// action.payload -> action.payload.name
// always remember what you work with