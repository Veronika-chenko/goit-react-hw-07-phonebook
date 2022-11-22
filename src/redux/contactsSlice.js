import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import {
    fetchContactsSuccessReducer,
    addContactSuccessReducer,
    deleteContactsSuccessReducer,
    pendingReducer,
    rejectedReducer,
    fulfilledReducer
} from "./reducers";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
        .addCase(addContact.fulfilled, addContactSuccessReducer)
        .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
        .addMatcher(getActions("pending"), pendingReducer)
        .addMatcher(getActions("rejected"), rejectedReducer)
        .addMatcher(getActions("fulfilled"), fulfilledReducer)
});

export const contactsReducer = contactsSlice.reducer;