import '../../styles/common.css';
import '../../styles/Hero.css';

import imgTee from '../../assets/images/tee 3.png';

export default function Tee(){
    return (
    <div className='flex flex-center flex-column mt-40 mb-40'>
        <a id='tee' href='#tee'> </a>
        <div className='text-subtitle font-koulen'>YES, I WEAR A TEE</div>
        <div className='italic'>&quot;broad shoulders, deep roots&quot;</div>
        <div className='w-50 mobile-w-full'>
            <img src={imgTee} alt='Skill set' className='h-auto non-dragable'/>
        </div>
    </div>
    );
}