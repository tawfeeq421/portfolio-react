import './Project.css'

function Project(){

    const projects = [
        {
          name: 'Project 1',
          description: 'This is a description of Project 1.',
          link: 'http://example.com'
        },
        {
          name: 'Project 2',
          description: 'This is a description of Project 2.',
          link: 'http://example.com'
        }
      ];

    return(

<section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
 </section>

    )
}

export default Project