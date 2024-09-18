import '../../styles/common.css';
import Playable from '../common/Playable';

export default function ProjectList(props){
    let playables = props.data.map((project, i) => (
        <Playable 
        key={i}
        projectName={project.name}
        imgUrl={project.media.imgUrl}
        youtubeID={project.media.youtubeID}
        imgAlt={project.media.imgAlt}
        company={project.company}
        projectUrl={'/project/' + project.id}>
            {project.description}
        </Playable>
    ));

    return (
        <>
            {playables}
        </>
    );
}