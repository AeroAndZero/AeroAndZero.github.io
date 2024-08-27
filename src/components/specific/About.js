import '../../styles/common.css';
import '../../styles/About.css';

export default function About(props){
    return(
        <div className='flex flex-center flex-column mt-80 bg-about w-60 m-auto p-40'>
            <a id='about' href='#about'> </a>
            <div className='font-2em font-koulen'>
                About me
            </div>
            <div className='text-justify'>
                <b>Hey there!</b>
                <br/>
                👋 Hi, I am Ayush; a 22 year old computer graphics enthusiast that has the desire to learn everything regarding graphics and computers in general. Currently, as a student in Canada, I don't want to miss out an oppurtinity of growth and knowledge around me. Having worked in the gaming industry, I love it when an audience it influenced by my digital creations!
                <br/>
                <br/>
                😄 If you are also in the gaming industry, I would love to <a href="https://www.linkedin.com/in/ayush-thakur-exe/" target='_blank' rel='noreferrer' className='as-button bg-thumbnail'>connect with you on LinkedIn!</a>
                <br/>
                <br/>
                <b>Thank you for your time and consideration!</b>
            </div>
        </div>
    );
}