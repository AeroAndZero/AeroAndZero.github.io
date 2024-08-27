import '../../styles/common.css';
import '../../styles/Hero.css';

import imgScrollDown from '../../assets/images/icon_scroll_down.png';

export default function Hero(){
    return (
        <div className='fullscreen flex flex-center flex-column'>
            <a id='hero' href='#hero'> </a>
            <div className='relative hero-content flex flex-center flex-column'>
                <div className='flex flex-center flex-column'>
                    <div className='text-title mobile-font-3em m-0 p-0'>AYUSH THAKUR</div>
                    <div className='text-subtitle mobile-font-15em m-0 p-0'>Game Developer</div>
                </div>
                <div className='absolute bottom-40'>
                    <a href='#tee'>
                    <img src={imgScrollDown} alt='scroll down' width={32} height={32}/>
                    </a>
                </div>
            </div>
        </div>
    )
}