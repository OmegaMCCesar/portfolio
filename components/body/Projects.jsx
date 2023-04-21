import styles from './Projects.module.css'
const projects = [{img:'./imgExc.png',url:'https://eccellenza.online'},{img:'./omegap.png',url:'https://omegamc.vercel.app'}]

const Projects = () => {
  return <div className={styles.container}>
  <h1 className={styles.title}>
Projects
  </h1>
  <div>
    {projects.map(p =><a href={p.url}> <img src={p.img} alt={p.img} className={styles.img}/></a>)}
  </div>
  </div>
}

export default Projects;