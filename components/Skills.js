import { useState } from 'react';

const SkillsList = (props) => {
    const skills = {
        "web" : ["React", "Next.js", "Python", "Flask", "MySQL", "SEO", "Bootstrap","jQuery", "Wordpress","Wix","MongoDB","Node","Linux","Apache","Amazon Web Services","Git","Client-side Optimization", "Tailwind.css", "Ant Design", "Responsive Design","UX/UI", "Illustrator/Photoshop"]
        ,"ecommerce" : ["Miva Merchant","Wordpress","Woocommerce", "UX/UI", "Client-side Optimization","E-Mail Marketing","PCI DSS","Illustrator/Photoshop"]   
        ,"programming" : ["Python","Docker","MySQL","MongoDB","Linux","Git","C","Java","Multiprocessing","Selenium",]
    }
    const listItems = skills[props.filter].map((item) => 
        <li className="skill" key={item}>{item}</li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

const Skills = props => {
    const [skill, filterSkills] = useState("web");
    return (
        <div id="skills">
        <h2 className="heading" tabIndex="0">Skills</h2>
        <div className="row" id="skills-list">
            <div className="skills-filter"><span className={ skill == "web" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("web")}>Web Development</span></div>
            <div className="skills-filter"><span className={ skill == "programming" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("programming")}>Programming</span></div>
            <div className="skills-filter"><span className={ skill == "ecommerce" ? "skills-text active" : "skills-text" } onClick={() => filterSkills("ecommerce")}>E-Commerce</span></div>
        </div>
        <SkillsList key={ skill } filter={ skill } />
    </div>
    )
}

export default Skills;