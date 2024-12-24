import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";


export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
      src="https://github.com/tadeubneto.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tadeu</strong>
              <time title="11 de março às 08:00h" dateTime="2024-03-11 08:02">
                Publicado há 1h
              </time>
          <p>{content}</p>
            </div>
        <button title="Deletar comentário">
            <Trash size={24}/>
        </button>
          </header>
        </div>
        <footer>
        <button>
            <ThumbsUp size={20}/>
            Aplaudir
            <span>20</span>
        </button>
        </footer>
      </div>
    </div>
  );
}
