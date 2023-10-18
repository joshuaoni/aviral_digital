import styles from './ProjectCard.module.css';

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.text}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
        <div className={styles.image} style={{ backgroundImage: "url(/" + item.image + ")" }} ></div>
      </div>
    </>
  )
}

export default ProjectCard