import styles from './ButtonTypes.module.css';

import defaultCursor from '../assets/default-cursor.svg';
import disabledCursor from '../assets/disabled-cursor.png';
import loadingCursor from '../assets/loading-cursor.svg';
import moveCursor from '../assets/move-cursor.svg';


import { CircleNotch, List } from 'phosphor-react';

export function ButtonTypes(){
    return(
        <div className={styles.ButtonTypes}>
            <h2>Tipos de botão</h2>
            <p className={styles.description}>
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
                            <th className={styles.tableTitleCursor}>CURSOR</th>
                        </tr>

                        <tr>
                            <td className={styles.tableTitleRow}>DEFAULT</td>
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
                            <td className={styles.tableTitleRow}>HOVER</td>
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
                            <td className={styles.tableTitleRow}>FOCUS</td>
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
                            <td className={styles.tableTitleRow}>DISABLED</td>
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
                            <td className={styles.tableTitleRow}>LOADING</td>
                            <td className={styles.cellsButton}>
                                <button className={styles.loadingPrimary}>
                                <CircleNotch size={14} color="#ffffff" /> 
                                LOADING PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.loadingSecondary}>
                                    <CircleNotch size={14} color="#ffffff" />
                                    LOADING SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.loadingTertiary}>
                                    <CircleNotch size={14} color="#ffffff" />
                                    LOADING TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={loadingCursor}/>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.tableTitleRow}>MOVABLE</td>
                            <td className={styles.cellsButton}>
                                <button className={styles.movablePrimary}>
                                <List size={14} color="#ffffff" />
                                MOVABLE PRIMARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.movableSecondary}>
                                    <List size={14} color="#ffffff" />
                                    MOVABLE SECONDARY
                                </button>
                            </td>
                            <td className={styles.cellsButton}>
                                <button className={styles.movableTertiary}>
                                    <List size={14} color="#ffffff" />
                                    MOVABLE TERTIARY
                                </button>
                            </td>
                            <td className={styles.cursors}>
                                <img src={moveCursor}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};