import '../../styles/common.css';
import '../../styles/Playable.css';

export default function Playable(props){
    return (
        <div className='grid grid-col-1-2 gap-10 grid-center mobile-grid-row-1-auto playable b-radius-10'>
            <div className='inline mobile-w-full playable-thumbnail'>
                <img src={props.imgUrl} alt=
                {props.imgAlt} />
            </div>
            <div className='flex flex-column flex-space-between playable-desc w-full h-full'>
                <div>
                    {props.description}
                </div>
                <div className='text-subtle bottom-10 text-right'>
                    at {props.company}
                </div>
            </div>
        </div>
    );
}