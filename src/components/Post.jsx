import { Comments } from "./Comments";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/tadeubneto.png"
          />
          <div className={styles.authorInfo}>
            <strong>Tadeu</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="11 de março às 08:00h" dateTime="2024-03-11 08:02">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        
        <p>Acabei de subir mais um projeto no meu portifa. É um
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀</p>
        
        <p><a href="">👉 jane.design/doctorcare</a></p>
        
        <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
        </p>
      </div>

   
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        placeholder="Deixe um comentário"
        />
        <footer>
        <button type="submit">Comentar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comments />
       
        <Comments />

      </div>
    </article>
 
  );
}

