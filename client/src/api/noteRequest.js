import axios from 'axios';



const API = axios.create({baseURL: "http://localhost:5000/"});


export const sendNote=(formdata)=> API.post("/note", formdata);

//export const getNote=(userId)=> API.get(`/note/${userId}`);

export const getNote=(data)=> API.get("/note", data);