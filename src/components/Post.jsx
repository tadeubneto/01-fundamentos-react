import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';//lib de formatção de hora
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";

export function Post({author, publishedAt, content}) {


  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState([
   'olá'
    
    ])

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true, //seria o prefixo do nosso portugues
  })
  
  function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')//apos executar a função, limpa a text area

  }

  function handleNewCommentText(){    
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentsToDelete){

  const commentsWithoutDeleteOne = comments.filter(comment => {
    return comment !== commentsToDelete
  })

    setComments(commentsWithoutDeleteOne)
    
  }

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
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })
        }
      </div>   
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name="comment"
        value={newCommentText}// valor dela sempre vai ser o estado inicial     
        placeholder="Deixe um comentário"
        onChange={handleNewCommentText}//monitora as mudanças da função
        />
        <footer>
         <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
            />
          ) 
        })}
              
      </div>
    </article>
  );
}

