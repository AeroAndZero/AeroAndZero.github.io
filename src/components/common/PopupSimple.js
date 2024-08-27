import { useEffect, useState } from 'react';
import '../../styles/common.css';

export default function PopupSimple(props){
    let [status, setStatus] = useState({
        hidden: "hide",
        shownOnce: false,
        count: 0
    })

    useEffect(() => {
        if(props.afterScroll === undefined || status.shownOnce){
            return;
        }

        let interval = setInterval(() => {
            if(window.scrollY / document.body.scrollHeight > props.afterScroll && !status.shownOnce && status.count > 40){
                setStatus({hidden: "", shownOnce: true});
            }
            status.count += 2
            console.log(status)
            
        },2000)

        return () => clearInterval(interval)
    }, [status]);   

    return(
        <div className={'fixed flex flex-center flex-column w-full h-full ' + status.hidden }>
            <div className='relative w-40 mobile-w-80 h-40 border-box p-20 bg-black-glass'>
                <div className='absolute right-10 as-button bg-thumbnail p-10'
                onClick={() => setStatus(prev => ({...prev, hidden: "hide"}))}>x</div>
                
                <div className='font-2em bold mb-20'>
                    {props.title}
                </div>

                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}