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
        <TabSelection className='flex flex-center flex-column' selectionIndex={1}>
            <div tabName='⭐ Featured'>
                <ProjectList tabName='VR' data={[data.vr[0], data.vr[2], data.geometrynodes[0], data.desktop[2], data.mobile[0]]}/>
            </div>
            <TabSelection tabName='Unity' className='flex flex-center flex-column' tabLabelClassName='bg-dark-gray b-radius-10'>
                <ProjectList tabName='VR' data={data.vr}/>
                <ProjectList tabName='Mobile' data={data.mobile}/>
                <ProjectList tabName='Desktop' data={data.desktop}/>
            </TabSelection>
            <TabSelection tabName='Blender' className='flex flex-center flex-column' tabLabelClassName='bg-dark-gray b-radius-10'>
                <ProjectList tabName='Geometry Nodes' data={data.geometrynodes}/>
                <ProjectList tabName='Shaders' data={data.shaders}/>
                <div tabName='Renders'>
                    <div className='mb-20 text-center'>
                        For all renders, please checkout my Instagram page <a href='https://www.instagram.com/axstrec' className='color-link w-fit inline' target='_blank' rel='noreferrer'>here</a>
                    </div>
                    <div>
                        <a className='as-button w-fit' href='https://www.instagram.com/axstrec' target='_blank' rel='noreferrer'>
                        <img className='w-60 m-auto block' src='/img/projects/renders/insta.png' alt='Insta page showcase'/>
                        </a>
                    </div>
                </div>
            </TabSelection>
        </TabSelection>
    </div>
    );
}