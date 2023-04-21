import styles from './Navbar.module.css'

const Navbar = () => {
  return <div className={styles.navbar}>
    <div className={styles.container_photo_name}>
     <img src='fotoperfil2.ico' className={styles.imagen_perfil} />
     <div className={styles.title}>Full Stack Developer</div>
    </div>
    <div className={styles.devl}>
      César Muñoz
    </div>
  </div>
}

export default Navbar