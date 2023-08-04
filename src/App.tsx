import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post }  from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gerAlves.png',
      name: 'Gerson Alves',
      role: 'Web Dev @LBR.IT',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de subir um projeto da hora' },
      { type: 'link', content: 'https://github.com/gerAlves' },
    ],
    publishedAt: new Date('2023-05-21 08:15:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thaizacapelao.png',
      name: 'Thaliza 🍌',
      role: 'Web Dev @ LBR.IT',
    },
    content: [
      { type: 'paragraph', content: 'Oi oi gentêeee' },
      { type: 'paragraph', content: 'Me dêem dicas de qual conteúdo postar aqui' },
      { type: 'link', content: '#BananaBestFruit' },
    ],
    publishedAt: new Date('2023-05-25 08:15:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post =>
              <Post 
                key={post.id} 
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt} 
              />
            )
          }
        </main>
      </div>
    </div>
  )
}