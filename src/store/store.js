import {configureStore} from "@reduxjs/toolkit"
import FaqSlicer from "./Slicer/FaqSlicer"

const store = configureStore({
    reducer:{
        faq:FaqSlicer,
    }
})

export default store