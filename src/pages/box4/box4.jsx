import styles from './box4.module.css';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggleCollapse } from '../../utilities/hooks/useToggleCollapse/useToggleCollapse';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';

import snowimg from '~/src/assets/images/snow.jpg';
import lightsimg from '~/src/assets/images/lights.jpg';
import mountainsimg from '~/src/assets/images/mountains.jpg';
import forestimg from '~/src/assets/images/forest.jpg';



function Co_box4() {

    // slides
    const slideImages = [snowimg, lightsimg, mountainsimg, forestimg];
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef();

    useEffect(() => {
        if (slidesRef.current) {
            slidesRef.current.style.backgroundImage = `url(${slideImages[slideIndex]})`;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex]);

    const nextSlide = () => {
        if (slideIndex == slideImages.length - 1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }

    const prevSlide = () => {
        if (slideIndex == 0) {
            setSlideIndex(slideImages.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }



    // accordions buttons
    const section1Ref = useRef();
    const { isOpen: isSection1, toggle: triggerSection1 } = useToggleCollapse(styles, section1Ref, 700);

    const section2Ref = useRef();
    const { isOpen: isSection2, toggle: triggerSection2 } = useToggleCollapse(styles, section2Ref, 700);

    const section3Ref = useRef();
    const { isOpen: isSection3, toggle: triggerSection3 } = useToggleCollapse(styles, section3Ref, 700);



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_box4Ref = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_box4Ref.current.classList.remove(styles.variant_night);
        main_box4Ref.current.classList.remove(styles.variant_red);
        main_box4Ref.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_box4Ref.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_box4Ref.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_box4Ref.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);


    return(
        <div className={styles.main_box4} ref={main_box4Ref}>
            <div className={styles.slideshow}>
                <h3>Slideshows</h3>

                <div className={styles.slides} ref={slidesRef}>
                    <button type="button" onClick={nextSlide}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" className={styles.ic}/>
                    </button>

                    <button type="button" onClick={prevSlide}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" className={styles.ic}/>
                    </button>
                </div>
            </div>

            <div className={styles.navigation}>
                <h3>Navigation</h3>

                <div className={styles.nav_bar}>
                    <a href='#' className={styles.nav_bar_link}>Home</a>
                    <a href='#' className={styles.nav_bar_link}>Link 1</a>

                    <div className={styles.dropdown}>
                        <a href='#' className={styles.nav_bar_link}>Dropdown</a>

                        <ul>
                            <li><a href='#'>Link 1</a></li>
                            <li><a href='#'>Link 2</a></li>
                            <li><a href='#'>Link 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.accordions}>
                <h3>Accordions</h3>

                <div className={styles.buttons}>
                    <button type="button" onClick={triggerSection1}>
                        {isSection1 ? "Close Section 1" : "Open Section 1"}
                    </button>
                    <div className={styles.section1} ref={section1Ref}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
                    </div>

                    <button type="button" onClick={triggerSection2}>
                        {isSection2 ? "Close Section 2" : "Open Section 2"}
                    </button>
                    <div className={styles.section2} ref={section2Ref}>
                        <a>Link 1</a>
                        <a>Link 2</a>
                        <a>Link 3</a>
                    </div>

                    <button type="button" onClick={triggerSection3}>
                        {isSection3 ? "Close Section 3" : "Open Section 3"}
                    </button>
                    <div className={styles.section3} ref={section3Ref}>
                        <p>Accordion with Images:</p>
                        <img src={snowimg} alt="snow image"></img>
                        <p>French Alps</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Co_box4