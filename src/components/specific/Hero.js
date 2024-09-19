import '../../styles/common.css';
import '../../styles/Hero.css';
import heroVideo from '../../assets/images/portfolio_bg.mp4'
import imgScrollDown from '../../assets/images/icon_scroll_down.png';
import { HashLink } from 'react-router-hash-link';

export default function Hero(){
    
    return (
        <div className='fullscreen flex flex-center flex-column' onClick={() => document.getElementById("heroVideo").play()}>
            <a id='hero' href='#hero'> </a>
            <div className='relative hero-content flex flex-center flex-column overflow-hidden'>
                <div className='flex flex-center flex-column'>
                    <div className='text-title mobile-font-3em m-0 p-0'>AYUSH THAKUR</div>
                    <div className='text-subtitle mobile-font-15em m-0 p-0'>Game Developer</div>
                </div>
                <div className='absolute bottom-40'>
                    <HashLink to={'#tee'}>
                    <img src={imgScrollDown} alt='scroll down' width={32} height={32}/>
                    </HashLink>
                </div>

                <video playsInline autoPlay muted loop id="heroVideo" className='fullscreen-video'>
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}