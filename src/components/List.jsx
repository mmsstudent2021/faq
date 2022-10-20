import React, {useState} from 'react';

function List({update,data:{title,text,status,id}}) {



    // const [show,setShow]  = useState(status);

    //emit
    function toShow(){
        // setShow(pre => !pre)
        update(id)
    }

    return (
        <div className={`faq-item ${status && 'open'}`}>
            <div className="faq-item-title" onClick={toShow}>
                {title}
            </div>
            <div className="faq-item-body">
                {text}
            </div>
        </div>
    );
}

export default List;