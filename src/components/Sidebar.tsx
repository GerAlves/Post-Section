import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1664013683829-b9fb1d79e5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" 
      />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src='https://github.com/gerAlves.png'/>

        <strong>Gerson Alves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilSimpleLine size={20}/>
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  );
}