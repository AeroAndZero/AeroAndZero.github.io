import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Footer from './components/common/Footer';
import E404 from './components/common/404';
import Header from './components/common/Header';
import ProjectDetail from "./components/common/ProjectDetail";

import data from './data/projects.json';

let projects = []
for(var key in data){
	projects.push(data[key])
}
projects = projects.flat()
console.log(projects)

const router = createBrowserRouter([
	{
		path : "/",
		element : (
			<>
				<App />
				<Footer />
			</>
		)
	},
	{
		path : "/project",
		children: projects.map(project => {
			return {
				path: project.id,
				element: (
					<>
						<Header />
						<ProjectDetail 
                        thumbnail={project.media.thumbnail}
						playableUrl={project.media.playableUrl}
						projectName={project.name}
						role={project.role}
						company={project.company}
						duration={project.duration}
						tag={project.tag}

						technology={project.technology}
						learnings={project.learnings}
						description={project.details}
						images={project.media.images}
						videos={project.media.videos}/>
						<Footer />
					</>
				)
			}
		})
	},
	{
		path: "*",
		element: <E404 />
	}
])

export default router;