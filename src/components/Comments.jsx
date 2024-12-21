import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";

export function Comments() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/tadeubneto.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tadeu</strong>
              <time title="11 de março às 08:00h" dateTime="2024-03-11 08:02">
                Publicado há 1h
              </time>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
