import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import App from './App';
import Footer from './components/common/Footer';
import E404 from './components/common/404';
import Header from './components/common/Header';
import ProjectDetail from "./components/common/ProjectDetail";

import data from './data/projects.json';
import Projects from "./components/specific/Projects";

let projects = []
for(var key in data){
	projects.push(data[key])
}
projects = projects.flat()
console.log(projects)

function Pages(){
	return(
		<HashRouter basename='/'>
			<Routes>
				<Route key={321} path="/" element={
					<>
					<App/>
					<Footer/>
					</>
				} />
				<Route key={322} path="/projects" element={
					<>
					<Header />
					<Projects />
					<Footer />	
					</>
				} />
				<Route key={323} path='/project'>
					{projects.map((project, i) => 
						<Route key={i} path={project.id} element={
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
						}/>
					)}
				</Route>
				<Route key={324} path="*" element={
					<>
					<Header />
					<E404 />
					<Footer />	
					</>
				} />
			</Routes>
		</HashRouter>
	)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Pages/>);