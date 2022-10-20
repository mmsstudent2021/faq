import React, {useState} from 'react';
import List from "./List.jsx";
import {useSelector,useDispatch} from "react-redux"
import {toggle} from "../store/Slicer/FaqSlicer"


function Faq(props) {

    const {faq} = useSelector(state => state);
    const dispatch = useDispatch();

    function update(id){
      dispatch(toggle(id))
    }


    return (
        <div className="faq">
            {faq.map((list) => <List key={list.id} update={update}  data={list} />)}
        </div>
    );
}

export default Faq;