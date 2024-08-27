import '../../styles/common.css';
import Career from '../common/Career';
import UpArrow from '../../assets/images/up_arrow.png';

export default function Education(props){
    return(
        <div className='flex flex-center flex-column mt-80'>
            <a id='education' href='#education'> </a>
            <div className='font-2em font-koulen'>
                Education
            </div>

            <Career
            companyLogoUrl='https://yt3.googleusercontent.com/ytc/AIdro_kooOU5SeGSJ36YszggzDA4q5Ygj6OuwKB_TfBVTez_NQ=s900-c-k-c0x00ffffff-no-rj'
            role='Information Technology Solutions'
            company='Humber College'
            location='Ontario, Canada'
            duration='Jan 2024 - Aug 2025 • 2 years'>
                Machine Learning, Web development, Design patterns, Requirement Analysis, Project management and more... 
            </Career>
            
            <img src={UpArrow} alt='Up arrow'/>
            
            <Career 
            companyLogoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGco2DnN8ugta_kmeNgHgx6wVUVa6dqKfbWmQstL7t6zPg6rrI8E3h0T9MsGFBIL2oSU&usqp=CAU'
            role="Bachelor's of Computer Engineering"
            company='LJ University'
            location='Gujarat, India'
            duration='Aug 2019 - Jul 2023 • 4 years'>
                Java programming, Computer Networks, Analysis and Data Algorithms, Web development, Computer graphics, Advance Maths, Design Engineering, Software Engineering and more...
            </Career>
        </div>
    );
}