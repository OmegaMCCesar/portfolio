import styles from './Tecnologies.module.css'
const logos = ['/css.ico','/html.png','/js.png','/nodejs.png','/nodeex.png','/postgres.png','/react.png','/redux.png','/sequalize.png','/next.png']

const Tecnologies = () => {
  return <div className={styles.p_container}>
    <div className={styles.container_logos}>
      <div>
    <h1 className={styles.title}>Tecnologies</h1>
      </div>
      <div className={styles.background}>
    {logos.map(logo => <img src={logo} alt={logo} className={styles.logos}/>)}
      </div>
      
    </div>
  </div>
}

export default Tecnologies;