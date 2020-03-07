import Lead from '../components/Lead';
import About from '../components/About'
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = props => {
    return(
        <React.Fragment>
            <Lead />
            <About />
            <Projects />
            <Skills />
        </React.Fragment>
    )   
}

export default Home