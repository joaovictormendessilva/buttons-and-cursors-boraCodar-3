import styles from './ButtonTypes.module.css';

import defaultCursor from '../assets/default-cursor.svg'
import disabledCursor from '../assets/disabled-cursor.png'

export function ButtonTypes(){
    return(
        <div className={styles.ButtonTypes}>
            <h2>Tipos de botão</h2>
            <p>
                Dentro de um layout, botões servem para destacar 
                ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
            </p>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tableHeads}>
                            <th></th>
                            <th className={styles.tableTitle}>BOTÃO PRIMÁRIO</th>
                            <th className={styles.tableTitle}>BOTÃO SECUNDÁRIO</th>
                            <th className={styles.tableTitle}>BOTÃO TERCIÁRIO</th>
                            <th className={styles.tableTitle}>CURSOR</th>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>DEFAULT</td>
                            <td className={styles.cellsButton}>
                                <button className={styles.defaultPrimary}>
                                    DEFAULT PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.defaultSecondary}>
                                    DEFAULT SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.defaultTertiary}>
                                    DEFAULT TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={defaultCursor}/>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>HOVER</td>
                            <td className={styles.cellsButton}>
                                <button className={styles.hoverPrimary}>
                                    HOVER PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.hoverSecondary}>
                                    HOVER SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.hoverTertiary}>
                                    HOVER TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={defaultCursor}/>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>FOCUS</td>
                            <td className={styles.cellsButton}>
                                <button className={styles.focusPrimary}>
                                    FOCUS PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.focusSecondary}>
                                    FOCUS SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.focusTertiary}>
                                    FOCUS TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={defaultCursor}/>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>DISABLED</td>
                            <td className={styles.cellsButton}>
                                <button disabled className={styles.disabledPrimary}>
                                    DISABLED PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button disabled className={styles.disabledSecondary}>
                                    DISABLED SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button disabled className={styles.disabledTertiary}>
                                    DISABLED TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={disabledCursor}/>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>LOADING</td>
                            <td>LOADING PRIMARY</td>
                            <td>LOADING SECONDARY</td>
                            <td>LOADING TERTIARY</td>
                            <td>IMG CURSOR</td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitle}>MOVABLE</td>
                            <td>MOVABLE PRIMARY</td>
                            <td>MOVABLE SECONDARY</td>
                            <td>MOVABLE TERTIARY</td>
                            <td>IMG CURSOR</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};