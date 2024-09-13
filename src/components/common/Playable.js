import '../../styles/common.css';
import '../../styles/Playable.css';

export default function Playable(props){

    let thumbnail = null;
    if(props.youtubeID !== undefined){
        thumbnail = (<iframe className='playable-iframe' src={'https://www.youtube.com/embed/' + props.youtubeID + '?si=4qG4d9bgPmb85v40'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
    }else{
        thumbnail = (<img src={props.imgUrl} alt={props.imgAlt} />)
    }

    return (
        <a href={props.projectUrl} className='block anti-a'>
        <div className='grid grid-col-1-2 gap-10 grid-center mobile-grid-row-1-auto playable b-radius-10'>
            <div className='inline mobile-w-full playable-thumbnail'>
                {thumbnail}
            </div>
            <div className='flex flex-column flex-space-between playable-desc w-full h-full'>
                <div>
                    <div className='font-15em bold'>
                        {props.projectName}
                    </div>
                    <div className='mt-10'>
                        {props.children}
                    </div>
                </div>
                <div className='text-subtle bottom-10 text-right'>
                    {props.company !== undefined ? "at " + props.company : null}
                </div>
            </div>
        </div>
        </a>
    );
}