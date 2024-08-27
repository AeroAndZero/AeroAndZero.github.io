import '../../styles/common.css';
import '../../styles/Scroller.css';
import { useState } from 'react';

export default function Scroller(props){
    let [select, setSelect] = useState(0);
    let isHidden = false;

    // show if the page is in the middle
    // if(window.scrollY / document.body.scrollHeight > 0.75 || window.scrollY / document.body.scrollHeight < 0.2){
    //     isHidden = true;
    // }else{
    //     isHidden = false;
    // }
    // console.log("Is hidden: " + isHidden)
    
    let elements = props.elements.map((element, index) => (
        <a href={element.href} onClick={() => setSelect(index)} className={'b-radius-10 p-10 ' + (select === index ? 'bg-anchor' : '')} key={index}>
            {element.name}
        </a>
    ))

    return(
        <div className={'fixed w-full h-full flex flex-center ' + (isHidden ? 'hide' : '')  }>
            <div className='absolute bottom-10 b-radius-10 bg-black-glass flex flex-center flex-row p-10 w-fit h-fit m-20'>
                {elements}
            </div>
        </div>
    );
}