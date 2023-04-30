import styles from './TestButtons.module.css';

import { List } from 'phosphor-react';

export function TestButtons(){
    return (
        <div className={styles.TestButtons}>
            <h2>Teste os botões</h2>
            <p>Interaja com os botões e observe a mudança de aparência e de cursores</p>

            <button className={styles.primaryButton}>
                INTERAJA COMIGO
            </button>

            <button className={styles.secondaryButton}>
                INTERAJA COMIGO
            </button>

            <button className={styles.tertiaryButton}>
                <List size={14} color="#ffffff" />
                INTERAJA COMIGO
            </button>
        </div>
    );
};