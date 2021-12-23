import * as types from "./actionTypes"

const initialState = {
    loading: false,
    basket: [],
    user: null,
    error: null,
};


const basketReducer = (state = initialState, action) => {
    switch (action.type) {