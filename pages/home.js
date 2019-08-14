import Lead from '../components/Lead';
import About from '../components/About'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = props => {
    return(
        <React.Fragment>
            <Lead />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </React.Fragment>
    )   
}

export default Home