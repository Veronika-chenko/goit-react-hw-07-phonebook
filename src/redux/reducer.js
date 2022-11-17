import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, showFilteredContacts} from "./actions";

const contactsInitialState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
]

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => state.push(action.payload),
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
})


const filterInitialState = "";

export const filterReducer = createReducer(filterInitialState, {
    [showFilteredContacts]: (_, action) => action.payload,
})

export const filterReducer1 = (state = filterInitialState, action) => {
    switch (action.type) {
        case showFilteredContacts.type:
            return action.payload
        default:
        return state;
    }        
}
