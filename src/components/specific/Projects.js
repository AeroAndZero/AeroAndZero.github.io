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
                <div tabName='AR'>ar</div>
                <ProjectList tabName='Desktop' data={data.desktop}/>
            </TabSelection>
            <TabSelection className='flex flex-center flex-column' tabName='Blender'>
                <div tabName='Shader'>shader</div>
                <div tabName='Geometry nodes'>nodes</div>
            </TabSelection>
        </TabSelection>
    </div>
    );
}