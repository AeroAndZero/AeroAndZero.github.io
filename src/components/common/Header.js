import '../../styles/common.css';
import iconShare from '../../assets/images/icon_share.png';

export default function Header(){
    return (
        <header className="mt-20 mb-20 pl-40 pr-40 pt-20 pb-20 font-15em font-gothic bg-black-glass flex flex-space-between flex-row align-items-center gap-20 flex-nowrap">
            <a href="/" className='block'>
                <div className="inline pl-20 pr-20 bold border-0 br-2">
                    AYUSH THAKUR
                </div>
                <div className="inline pl-20 pr-20 ">
                    GAME DEVELOPER
                </div>
            </a>
            <div onClick={() => {
                navigator.clipboard.writeText('https://aeroandzero.github.io/');
                alert('URL Copied!');
            }}>
                <img src={iconShare} width={25} alt='share icon' title='share this portfolio' className='p-10 b-radius-10 as-button-with-bg'/>
            </div>
        </header>
    );
}