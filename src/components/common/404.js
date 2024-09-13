import '../../styles/common.css';

export default function E404(){
    return (
        <div className='fullscreen flex flex-center flex-column'>
            <div className='text-title'>Error 404 :(</div>
            <div className='text-subtitle'>
                must be a broken a link.. or maybe I have not made this page yet
            </div>
            <div className='mt-40 font-15em'>
                <a href='/' className='color-link'>◀ Go home</a>
            </div>
        </div>
    );
}