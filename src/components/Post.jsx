import { Comments } from "./Comments";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';//lib de formatção de hora
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, publishedAt, content}) {

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          }else if (line.type === 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
        })
        }
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
       
      </div>
    </article>
  );
}

