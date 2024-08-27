import { useState } from 'react';
import '../../styles/common.css';

export default function TabSelection(props){
    let elements = props.children;
    let [tab, setTab] = useState(elements[0]);

    let tabLabel = elements.map((e, i) => {
        let highlightClass = ""
        if(tab === e){
            highlightClass = "border-1 border-white"
        }
        return (
            <div className={'inline w-fit p-10 m-10 b-radius-10 bg-black-elevated as-button ' + highlightClass} key={i} onClick={() => {
                setTab(e);
                
            }}>
                {e.props.tabName}
            </div>
        )
    });


    return (
        <div className={props.className}>
            <div>
                {tabLabel}
            </div>
            <div>
                {tab}
            </div>
        </div>
    );
}
