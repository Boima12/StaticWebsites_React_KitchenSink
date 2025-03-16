import styles from './footer.module.css';
import { useEffect, useRef } from 'react';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';


function Co_footer() {

    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_footerRef = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_footerRef.current.classList.remove(styles.variant_night);
        main_footerRef.current.classList.remove(styles.variant_red);
        main_footerRef.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_footerRef.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_footerRef.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_footerRef.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);

    

    return(
        <div className={styles.main_footer} ref={main_footerRef}>

            <p>
                <span>R</span>
                <span>e</span>
                <span>m</span>
                <span>a</span>
                <span>d</span>
                <span>e</span> 
                <span> </span>
                <span>b</span>
                <span>y</span>
                <span> </span> 
                <span>B</span>
                <span>o</span>
                <span>i</span>
                <span>m</span>
                <span>a</span>
                <span>,</span>
                <span> </span> 
                <span>o</span>
                <span>r</span>
                <span>i</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>
                <span>a</span>
                <span>l</span>
                <span> </span> 
                <span>i</span>
                <span>d</span>
                <span>e</span>
                <span>a</span>
                <span> </span> 
                <span>f</span>
                <span>r</span>
                <span>o</span>
                <span>m</span>
                <span> </span> 
                <span>W</span>
                <span>3</span>
                <span>S</span>
                <span>c</span>
                <span>h</span>
                <span>o</span>
                <span>o</span>
                <span>l</span>
                <span>s</span>
                <span>.</span>
                <span> </span>
                <span>T</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
                <span>k</span>
                <span> </span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>!</span>
                <span>.</span>
            </p>

        </div>
    );
}

export default Co_footer