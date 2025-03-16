import styles from './box1.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';


function Co_box1() {

    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_box1Ref = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_box1Ref.current.classList.remove(styles.variant_night);
        main_box1Ref.current.classList.remove(styles.variant_red);
        main_box1Ref.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_box1Ref.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_box1Ref.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_box1Ref.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);

    return(
        <div className={styles.main_box1} ref={main_box1Ref}>
            <div className={styles.banners}>
                <div className={styles.banner}>
                    <h3>Responsive</h3>
                    <FontAwesomeIcon icon="fa-solid fa-desktop" className={styles.ic1}/>
                    <p>Built-in responsiveness</p>
                    <p>Mobile first fluid grid</p>
                    <p>Fits any screen sizes</p>
                    <p>PC Tablet and Mobile</p>
                </div>

                <div className={styles.banner}>
                    <h3>Standard CSS</h3>
                    <FontAwesomeIcon icon="fa-brands fa-css3" className={styles.ic2}/>
                    <p>Standard CSS only</p>
                    <p>Easy to learn</p>
                    <p>No need for jQuery</p>
                    <p>No JavaScript library</p>
                </div>

                <div className={styles.banner}>
                    <h3>Design</h3>
                    <FontAwesomeIcon icon="fa-regular fa-gem" className={styles.ic3}/>
                    <p>Paper like design</p>
                    <p>Bold colors and shadows</p>
                    <p>Equal across platforms</p>
                    <p>Equal across devices</p>
                </div>
            </div>
            
            <div className={styles.colorClasses}>
                <h3>Color Classes</h3>

                <div className={styles.cases}>
                    <div className={styles.colorCase}><p>Red</p></div>
                    <div className={styles.colorCase}><p>Blue</p></div>
                    <div className={styles.colorCase}><p>Blue Grey</p></div>
                    <div className={styles.colorCase}><p>Teal</p></div>
                    <div className={styles.colorCase}><p>Yellow</p></div>
                    <div className={styles.colorCase}><p>Orange</p></div>
                </div>
            </div>

            <div className={styles.builtIn}>
                <h3>Built-In Responsiveness</h3>
                <p>Resize the page to see the effect!</p>

                <div className={styles.buildIn_body}>
                    <div className={styles.half}>
                        <div className={styles.case}>
                            <p>w3-half</p>
                            <p>The w3-half class uses half (50%) of the screen window.</p>
                            <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-half</p>
                        </div>
                    </div>

                    <div className={styles.third}>
                        <div className={styles.case}>
                            <p>w3-third</p>
                            <p>The w3-third class uses one third (33.33%) of the screen widow.</p>
                            <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-third</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-third</p>
                        </div>
                    </div>

                    <div className={styles.quarter}>
                        <div className={styles.case}>
                            <p>w3-quarter</p>
                            <p>The w3-quarter class uses one quarter (25%) of the screen window.</p>
                            <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-quarter</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-quarter</p>
                        </div>

                        <div className={styles.caseBlank}>
                            <p>w3-quarter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Co_box1