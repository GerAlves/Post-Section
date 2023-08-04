import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string,
  onDeleteComment: (coment: string) => void,
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCount() {
    setLikeCount((state) =>{
      return state + 1
    });
  }

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/gabrielboos.png' />

      <div className={styles.commentArea}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Biel Buzz</strong>
              <time title='24 de Maio às 14:45' dateTime='2023-05-24 14:36:00'>Cerca de 1h atrás</time>
            </div>

            <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>  
        </footer>
      </div>
    </div>
  )
}