import styles from './header.module.css';
import { useEffect, useRef } from 'react';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';


function Co_header() {

    // modal
    const { triggerModal } = useBoxAlpha();



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_headerRef = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_headerRef.current.classList.remove(styles.variant_night);
        main_headerRef.current.classList.remove(styles.variant_red);
        main_headerRef.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_headerRef.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_headerRef.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_headerRef.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);


    return(
        <div className={styles.main_header} ref={main_headerRef}>
            <p>BEAUTIFUL RESPONSIVE WEB SITES</p>
            <h3>10 Static Websites. The Final.</h3>
            <button type="button" onClick={triggerModal}>My message</button>
        </div>
    );
}

export default Co_header