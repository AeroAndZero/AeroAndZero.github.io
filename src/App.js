import Hero from './components/specific/Hero';
import Tee from './components/specific/Tee';
import Projects from './components/specific/Projects';
import WorkExperience from './components/specific/WorkExperience';
import Education from './components/specific/Education';
import PopupSimple from './components/common/PopupSimple';
import About from './components/specific/About';
import Scroller from './components/specific/Scroller';

function App() {
    return (
        <div className="App">
            <Hero />
            <Tee />
            <Projects />
            <WorkExperience />
            <Education />
            <About />

            <Scroller elements={[
                {
                    href: '#hero',
                    name: 'Top'
                },
                {
                    href: '#tee',
                    name: 'Skillset'
                },
                {
                    href: '#projects',
                    name: 'Projects'
                },
                {
                    href: '#workExperience',
                    name: 'Work Experience'
                },
                {
                    href: '#education',
                    name: 'Education'
                },
                {
                    href: '#about',
                    name: 'About'
                }
            ]}/>
            <PopupSimple title='You made it till here!' afterScroll={0.8}>
                Thank you for your time to review my portfolio! If you are intrigued by my work or have questions, feel free to email me your queries below
                <br />
                <a href='mailto:ayushtaems@gmail.com' target='_blank' rel='noreferrer' className='inline as-button bg-thumbnail p-10 mt-40'>
                    Send an email
                </a>
            </PopupSimple>
        </div>
    );
}

export default App;