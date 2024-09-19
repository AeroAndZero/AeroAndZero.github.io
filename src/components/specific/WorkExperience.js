import '../../styles/common.css';
import Career from '../common/Career';
import UpArrow from '../../assets/images/up_arrow.png';

export default function WorkExperience(props){
    return(
        <div className='flex flex-center flex-column mt-80 mb-40'>
            <a id='workExperience' href='#workExperience'> </a>
            <div className='font-2em font-koulen'>Work Experience</div>
            <Career companyLogoUrl='https://media.licdn.com/dms/image/v2/D4D0BAQHMLDt0UotoIg/company-logo_200_200/company-logo_200_200/0/1680925613776/madvr_solutions_logo?e=1732752000&v=beta&t=hKrBFrLgOl-2ZkBLBs57Wsw27JpYUYppVVGySHWkMq0'
            role='VR Developer (Team Lead)' 
            company='MadVR Solutions'
            location='Gujarat, India'
            duration='Mar 2023 - Feb 2024 • 1 year'>
                Designed an immersive virtual reality simulation to facilitate the training of junior surgeons in knee replacement surgery, including interactive tutorials and performance metrics. This innovative approach provided a safe and controlled environment for surgical skill development.
            </Career>

            <img src={UpArrow} alt='Up arrow'/>
            
            <Career companyLogoUrl='https://media.licdn.com/dms/image/v2/D4E0BAQGt2LAipTdMdA/company-logo_200_200/company-logo_200_200/0/1722608015244/expositarvr_logo?e=1732752000&v=beta&t=ljQxsPN8XrQyGJ8ZVpVxGRLYTLAQAvsY_vRxsSq43Xs'
            role='Game Developer (VR/AR)' 
            company='Exposit Immersive'
            location='Gujarat, India'
            duration='Jan 2023 - Feb 2024 • 1 year 3 months'>
                Developed industry-standard virtual reality training simulations to enhance employee training and performance assessment for multiple companies. Additionally, contributed to the optimization of existing applications and workflows, resulting in improved efficiency with:
                <ul className='list'>
                    <li>Optimization using tools like Unity Profiler</li>
                    <li>Reduced poly count and redundant model details for VR</li>
                    <li>Built re-usable shaders for amazing visual effects</li>
                </ul>
            </Career>

            <img src={UpArrow} alt='Up arrow'/>
            
            <Career companyLogoUrl='https://media.licdn.com/dms/image/v2/D4D0BAQHRwGOsnVmidw/company-logo_200_200/company-logo_200_200/0/1665998638828?e=1732752000&v=beta&t=I0Qq7ekzCvToHKLtmVL2njml2RZ_MrTT9dLGWRgv02I'
            role='Shopify Developer (freelance)'
            company='Blanck Denim'
            location='Gujarat, India'
            duration='Oct 2021 - Nov 2022 • 1 year 2 months'>
                As a web developer at Blanck Denim, I contributed to the development of an e-commerce platform. Through this experience, I acquired proficiency in web programming languages such as HTML, CSS, JavaScript, and Liquid. Additionally, I gained valuable knowledge of inventory management, payment processing, and order fulfillment.
            </Career>

            <img src={UpArrow} alt='Up arrow'/>

            <Career companyLogoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHYulsw6vPecGpJWlcmf6dnM82UATits77Q&s'
            role='Math Tutor'
            company='Parth Tank Institute'
            location='Gujarat, India'
            duration='Jul 2019 - Nov 2019 • 5 months'>
                I served as a part-time mathematics tutor at Parth Tank Institute, where I provided guidance to eleventh and twelfth-grade students. Through this role, I honed my mathematical abilities and supported students in their academic pursuits.
            </Career>
        </div>
    )
}