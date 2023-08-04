import styles from './Post.module.css'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author {
    name: string,
    role: string,
    avatarUrl: string,
}

interface PostProps {
  author : Author
  content: {
    type: string,
    content: string,
  }[],
  publishedAt: Date;
}

export function Post(props : PostProps) {
  const formatedDate = format(props.publishedAt, "dd 'de' MMMM 'ás' HH:mm'h'", {
    locale: ptBR,
  })
  
  const formatedRelativeDate = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [currentComments, setCurrentComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  function handleNewcommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo não poder ser vazio!')
  }

  function handleNewComment(event: FormEvent){
    event.preventDefault()

    setCurrentComments([...currentComments, newComment])
    setNewComment('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function deleteComment(comment: string){
    const notDeletedComments = currentComments.filter(comments => {
      return comments !== comment;
    })
    setCurrentComments(notDeletedComments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={formatedDate} dateTime={props.publishedAt.toISOString()}>
          {formatedRelativeDate}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else{
            return <p key={line.content}><a href={line.content}>{line.content}</a></p>
          }
        })
        }
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea 
          name='comment'
          placeholder='Deixe seu comentário'
          onChange={handleNewCommentChange}
          value={newComment}
          onInvalid={handleNewcommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={newComment.length === 0}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentSection}>
        {currentComments.map(text => 
          <Comment key={text} content={text} onDeleteComment={deleteComment}/>  
        )}
      </div> 
    </article>
  )
}