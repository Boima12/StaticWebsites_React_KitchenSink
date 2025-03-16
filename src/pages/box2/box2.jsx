import styles from './box2.module.css';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';

import carimg from '~/src/assets/images/car.jpg';


function Co_box2() {

    // close demo_body
    const demo_bodyRef = useRef();
    const triggerDemo_body = () => {
        if (!demo_bodyRef.current) {
            return;
        }

        demo_bodyRef.current.classList.add(styles.close);
        setTimeout(() => {
            demo_bodyRef.current.style.display = "none";
        }, 750);
    }



   // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_box2Ref = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_box2Ref.current.classList.remove(styles.variant_night);
        main_box2Ref.current.classList.remove(styles.variant_red);
        main_box2Ref.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_box2Ref.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_box2Ref.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_box2Ref.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);



    return(
        <div className={styles.main_box2} ref={main_box2Ref}>
            <div className={styles.containers}>
                <h3>Containers</h3>
                <p>Use containers to create headers, sections and footers.</p>

                <div className={styles.demo}>
                    <div className={styles.demo_header}>
                        <h3>Header</h3>
                    </div>

                    <div className={styles.demo_body} ref={demo_bodyRef}>
                        <h3>London</h3>
                        <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
                        <p>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</p>

                        <button type="button" onClick={triggerDemo_body}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}/>
                        </button>
                    </div>

                    <div className={styles.demo_footer}>
                        <h3>Footer</h3>
                        <p>Footer information goes here</p>
                    </div>
                </div>
            </div>

            <div className={styles.colorThemes}>
                <h3>Color Themes</h3>
                <p>The color themes have been designed to work harmoniously with each other.</p>

                <div className={styles.themes}>
                    <div className={styles.themeA}>
                        <div className={styles.themeHeader}>
                            <h3>Theme Indigo</h3>
                        </div>

                        <div className={`${styles.themeBody} ${styles.movieTitle}`}>
                            <h3>Movies 2014</h3>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>Frozen</h3>
                            <p>The response to the animations was ridiculous</p>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>The Fault in Our Stars</h3>
                            <p>Touching, gripping and genuinely well made</p>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>The Avengers</h3>
                            <p>A huge success for Marvel and Disney</p>
                        </div>

                        <div className={styles.themeFooter}>
                            <p>Next</p>
                        </div>
                    </div>

                    <div className={styles.themeB}>
                        <div className={styles.themeHeader}>
                            <h3>Theme Indigo</h3>
                        </div>

                        <div className={`${styles.themeBody} ${styles.movieTitle}`}>
                            <h3>Movies 2014</h3>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>Frozen</h3>
                            <p>The response to the animations was ridiculous</p>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>The Fault in Our Stars</h3>
                            <p>Touching, gripping and genuinely well made</p>
                        </div>

                        <div className={styles.themeBody}>
                            <h3>The Avengers</h3>
                            <p>A huge success for Marvel and Disney</p>
                        </div>

                        <div className={styles.themeFooter}>
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.paperLike}>
                <h3>Paper-like Cards with Shadows</h3>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={carimg} alt="card_top image"></img>

                        <div className={styles.card_bottom}>
                            <p>w3-card</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={carimg} alt="card_top image"></img>

                        <div className={styles.card_bottom}>
                            <p>w3-card-4</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={carimg} alt="card_top image"></img>

                        <div className={styles.card_bottom}>
                            <p>w3-card-4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Co_box2