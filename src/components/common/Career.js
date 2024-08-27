import '../../styles/common.css';

export default function Career(props){
    return (
        <div className={'w-60 mobile-w-80 m-20 grid grid-col-auto-4 mobile-grid-row-auto-4 gap-20 ' + props.className}>
            <div>
                <img src={props.companyLogoUrl} alt='company logo' width={100} height={100}/>
            </div>
            <div>
                <div className='bold font-12em pb-2'>{props.role}</div>
                <div className='pb-2'>{props.company}</div>
                <div className='pb-2 italic color-mediumgray'>{props.duration}</div>
                <div className='pb-5 italic color-mediumgray'>{props.location === undefined ? '' : 'at'} {props.location}</div>
                <div>{props.children}</div>
            </div>
        </div>
    );
}