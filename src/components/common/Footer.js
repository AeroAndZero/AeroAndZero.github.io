import '../../styles/common.css';

export default function Footer(){
    return (
        <>
        <hr className='w-40 block border-1 m-auto mt-40'/>
        <footer className='flex flex-center flex-row gap-40 p-40'>
            <div className='inline w-fit'>
                <a href='mailto:ayushtaems@gmail.com' target='_blank' rel='noreferrer'>Email me</a>
            </div>
            <div className='inline w-fit'>
                <a href='https://www.youtube.com/@AeroAndZero' target='_blank' rel='noreferrer'>Youtube</a>
            </div>
            <div className='inline w-fit'>
                <a href='https://www.instagram.com/aero.n.zero/' target='_blank' rel='noreferrer'>Instagram</a>
            </div>
            <div className='inline w-fit'>
                <a href='https://aeroandzero.itch.io/' target='_blank' rel='noreferrer'>Itch.io</a>
            </div>
            <div className='inline w-fit'>
                <a href='https://github.com/AeroAndZero' target='_blank' rel='noreferrer'>Github</a>
            </div>
            <div className='inline w-fit'>
                <a href='https://www.linkedin.com/in/ayush-thakur-exe/' target='_blank' rel='noreferrer'>LinkedIn</a>
            </div>
            <div className='inline w-fit'>
                2024 &copy; Ayush Thakur
            </div>
        </footer>
        </>
    );
}