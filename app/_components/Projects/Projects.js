import styles from './Projects.module.css';
import { ProjectCard } from '../index';
import { projects } from '@/app/_constants';

const Projects = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}><span>Projects</span> Done So Far:</h2>

        <div className={styles.box}>
          <div className={styles.projects}>
            {projects.map(item => (
              <div key={item.title} className={styles.card}>
                <ProjectCard
                  item={item}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Projects