import {createSlice} from "@reduxjs/toolkit"

const faqSlicer = createSlice({
    name:"faq",
    initialState:[
        {
            id:1,
            title : "this is title 1",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum eum ex expedita explicabo id itaque placeat, quisquam ratione, saepe sed vitae, voluptate? Dicta dolores, eligendi itaque numquam obcaecati ut.",
            status : false
        },
        {
            id:2,
            title : "this is title 2",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum eum ex expedita explicabo id itaque placeat, quisquam ratione, saepe sed vitae, voluptate? Dicta dolores, eligendi itaque numquam obcaecati ut.",
            status : false
        },
        {
            id:3,
            title : "this is title 3",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum eum ex expedita explicabo id itaque placeat, quisquam ratione, saepe sed vitae, voluptate? Dicta dolores, eligendi itaque numquam obcaecati ut.",
            status : false
        },
        {
            id:4,
            title : "this is title 4",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum eum ex expedita explicabo id itaque placeat, quisquam ratione, saepe sed vitae, voluptate? Dicta dolores, eligendi itaque numquam obcaecati ut.",
            status : false
        },
    ],
    reducers:{
        toggle:(state,action) => {
            return state.map((i) => i.id === action.payload ? {id:i.id,title:i.title,text:i.text,status:true} :{id:i.id,title:i.title,text:i.text,status:false})
        }
    }
})

export const {toggle} = faqSlicer.actions 
export default faqSlicer.reducer;