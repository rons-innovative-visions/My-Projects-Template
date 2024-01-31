import {projects} from './projects'

function App() {
  return (
    <>
      <section id="title">
        <h1>My Projects</h1>
        <a href="#projects"><span></span></a>
      </section>
      <section id="projects">
        {projects.map((project) => {
          return <Project {...project} key={project.id}/>
        })}
      </section>
    </>
  );
}

const Project = ({title, img, vid, url, id}) => {
  const showVideo = () => {
    document.getElementById(title).querySelector('video').classList.add('show');
  }
  const hideVideo = () => {
    document.getElementById(title).querySelector('video').classList.remove('show');
  }
  
  return (
    <article id={title} className='project' key={id}>
      <h2>{title}</h2>
      <a href={url} target='_blank'>
        <img src={img} alt="..." onMouseEnter={showVideo}/>
        <video autoPlay muted loop onMouseLeave={hideVideo}>
          <source src={vid} type='video/mp4'/>
        </video>
      </a>
    </article>)
}

export default App;