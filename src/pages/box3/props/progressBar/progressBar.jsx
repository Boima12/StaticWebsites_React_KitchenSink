import styles from './progressBar.module.css';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';

function Co_progressBar({
    progress_height = 16,
    progress_percent = 0,
    show_text = true
}) {

    const progress_style = {
        height: `${progress_height}px`
    }

    const progress_currentRef = useRef();
    useEffect(() => {
        const validatedPercent = Math.min(progress_percent, 100);

        setTimeout(() => {
            progress_currentRef.current.style.width = `${validatedPercent}%`;
        }, 10);
    }, [progress_percent]);

    let show_text_style = {};  
    if (!show_text) {
        show_text_style = { opacity: 0, visibility: "hidden" };
    }



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_progressBarRef = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_progressBarRef.current.classList.remove(styles.variant_night);
        main_progressBarRef.current.classList.remove(styles.variant_red);
        main_progressBarRef.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_progressBarRef.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_progressBarRef.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_progressBarRef.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);


    return(
        <div className={styles.main_progressBar} ref={main_progressBarRef}>
            <div className={styles.progress} style={progress_style}>
                <div className={styles.progress_current} ref={progress_currentRef}>
                    <p style={show_text_style}>{Math.min(progress_percent, 100)}%</p>
                </div>
            </div>

        </div>
    );
}

Co_progressBar.propTypes = {
    progress_percent: PropTypes.number,
    progress_height: PropTypes.number,
    show_text: PropTypes.bool,
};

export default Co_progressBar