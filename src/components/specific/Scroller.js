import '../../styles/common.css';
import '../../styles/Scroller.css';
import { useState, useEffect } from 'react';

export default function Scroller(props){
    let [select, setSelect] = useState(0);
    let [hidden, setHidden] = useState(true);

    // show if the page is in the middle
    useEffect(() => {
        const onScroll = (event) => {
            if(window.scrollY / document.body.scrollHeight > 0.8 || window.scrollY / document.body.scrollHeight < 0.1){
                setHidden(true);
            }else{
                setHidden(false);
            }
            // console.log(window.scrollY / document.body.scrollHeight);
        }
          
        window.addEventListener('scroll', onScroll);
        
        return () => {
          window.removeEventListener('scroll', onScroll);
        }
    }, [hidden]);
    
    let elements = props.elements.map((element, index) => (
        <a href={element.href} onClick={() => setSelect(index)} className={'text-center b-radius-10 p-10 ' + (select === index ? 'bg-anchor' : '')} key={index}>
            {element.name}
        </a>
    ))

    return(
        <div className={'fixed w-full h-fit bottom-20 top-auto flex flex-center animate-everything ' + (hidden ? 'bottom--20p' : '')}>
            <div className='bottom-10 b-radius-10 bg-black-glass flex flex-center flex-row p-10 w-fit h-fit ml-20 mr-20'>
                {elements}
            </div>
        </div>
    );
}