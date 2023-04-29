import styles from './TestButtons.module.css';

export function TestButtons(){
    return (
        <div className={styles.TestButtons}>
            <h2>Teste os botões</h2>
            <p>Interaja com os botões e observe a mudança de aparência e de cursores</p>

            <button>
                INTERAJA COMIGO
            </button>

            <button>
                INTERAJA COMIGO
            </button>

            <button>
                INTERAJA COMIGO
            </button>
        </div>
    );
};