import '../../styles/common.css';
import TabSelection from '../common/TabSelection';
import ProjectList from './ProjectList';
import data from '../../data/projects.json';

export default function Projects(){
    return (
    <div className='bg-black w-80 m-auto b-radius-20 mt-40 mb-40 p-10'>
        <a id='projects' href='#projects'> </a>
        <div className='font-koulen font-2em text-center'>
            Projects
        </div>
        <TabSelection className='flex flex-center flex-column'>
            <TabSelection className='flex flex-center flex-column' tabName='Unity'>
                <ProjectList tabName='VR' data={data.vr}/>
                <ProjectList tabName='Mobile' data={data.mobile}/>
                <ProjectList tabName='Desktop' data={data.desktop}/>
            </TabSelection>
            <TabSelection className='flex flex-center flex-column' tabName='Blender'>
                <ProjectList tabName='Geometry Nodes' data={data.geometrynodes}/>
                <ProjectList tabName='Shaders' data={data.shaders}/>
                <div tabName='Renders'>
                    <div className='text-center'>For all renders, please checkout my Instagram page <a href='https://www.instagram.com/axstrec' className='color-link' target='_blank' rel='noreferrer'>here</a></div>
                    <br/>
                    <a href='https://www.instagram.com/axstrec'>
                    <img src='/img/projects/renders/insta.png' alt='Insta page showcase'/>
                    </a>
                </div>
            </TabSelection>
        </TabSelection>
    </div>
    );
}