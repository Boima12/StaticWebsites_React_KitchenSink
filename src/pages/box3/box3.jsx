import styles from './box3.module.css';
import { useState, useEffect, useRef } from 'react';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';

import Co_progressBar from './props/progressBar/progressBar';


function Co_box3() {

    // progress percent
    const [current_percent, setCurrent_percent] = useState(5);



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_box3Ref = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_box3Ref.current.classList.remove(styles.variant_night);
        main_box3Ref.current.classList.remove(styles.variant_red);
        main_box3Ref.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_box3Ref.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_box3Ref.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_box3Ref.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);


    return(
        <div className={styles.main_box3} ref={main_box3Ref}>
            <div className={styles.tables}>
                <h3>Tables</h3>
                <p>Yeah, i do learn from W3Schools a lot.</p>

                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td>Last Name</td>
                            <td>Points</td>
                        </tr>

                        <tr>
                            <th>Jill</th>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>

                        <tr>
                            <th>Eve</th>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>

                        <tr>
                            <th>Adam</th>
                            <td>Johnson</td>
                            <td>67</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.formList}>
                <h3>Forms and Lists</h3>

                <div className={styles.forms}>
                    <div className={styles.inputs}>
                        <div className={styles.inputs_top}>
                            <h3>Input Form</h3>

                            <div className={styles.input_bar}>
                                <input type="text"></input>
                                <p>Name</p>
                            </div>

                            <div className={styles.input_bar}>
                                <input type="email"></input>
                                <p>Email</p>
                            </div>

                            <div className={styles.input_bar}>
                                <input type="text"></input>
                                <p>Subject</p>
                            </div>
                        </div>

                        <div className={styles.inputs_bottom}>
                            <div className={styles.inputs_left}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox"></input>
                                    <label>Milk</label>
                                </div>

                                <div className={styles.checkbox}>
                                    <input type="checkbox"></input>
                                    <label>Sugar</label>
                                </div>

                                <div className={styles.checkbox}>
                                    <input type="checkbox" disabled></input>
                                    <label>Lemon (Disabled)</label>
                                </div>
                            </div>

                            <div className={styles.inputs_right}>
                                <div className={styles.radio}>
                                    <input type="radio" name="rad1"></input>
                                    <label>Male</label>
                                </div>

                                <div className={styles.radio}>
                                    <input type="radio" name="rad1"></input>
                                    <label>Female</label>
                                </div>

                                <div className={styles.radio}>
                                    <input type="radio" name="rad1" disabled></input>
                                    <label>Don't know (Disabled)</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.lists}>
                        <div className={styles.lists_top}>
                            <h3>Lists</h3>

                            <ul>
                                <li>Jill</li>
                                <li>Eve</li>
                                <li>Adam</li>
                            </ul>
                        </div>

                        <div className={styles.lists_bottom}>
                            <ul>
                                <li>Jill</li>
                                <li>Eve</li>
                                <li>Adam</li>
                                <li>Steve</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.progressBar}>
                <h3>Progress Bars</h3>

                <div className={styles.progress_outer}>
                    <Co_progressBar progress_height={38.5}
                        progress_percent={current_percent}
                    />

                    <button type="button"
                        onClick={() => setCurrent_percent(100)}
                    >Click Me</button>
                </div>
            </div>
        </div>
    );
}

export default Co_box3