import styles from './topSideNavibar.module.css';
import { useRef, useState, useEffect } from 'react';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useBoxAlpha from '../../utilities/zustand/boxAlpha';

import Co_header from '../../pages/header/header';
import Co_box1 from '../../pages/box1/box1';
import Co_box2 from '../../pages/box2/box2';
import Co_box3 from '../../pages/box3/box3';
import Co_box4 from '../../pages/box4/box4';
import Co_box5 from '../../pages/box5/box5';
import Co_footer from '../../pages/footer/footer';


function Co_topSideNavibar() {

    // context_top_collapse toggle
    const context_top_collapseRef = useRef();
    const { toggle: triggerContext_top_collapse } = useToggleCollapse(styles, context_top_collapseRef, 500);



    // context_top hover effects
    const [currentBackground, setCurrentBackground] = useState("#000");
    const context_topRef = useRef();
    const goBackground = (colorVal) => {
        context_topRef.current.style.background = colorVal;
    };



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    const setVariantType = useBoxAlpha((state) => state.setVariantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_topSideNavibarRef = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_topSideNavibarRef.current.classList.remove(styles.variant_night);
        main_topSideNavibarRef.current.classList.remove(styles.variant_red);
        main_topSideNavibarRef.current.classList.remove(styles.variant_teal);


        if (variantType == 1) {
            setCurrentBackground("#000");

        } else if (variantType == 2) {
            setCurrentBackground("#333");
            main_topSideNavibarRef.current.classList.add(styles.variant_night);

        } else if (variantType == 3) {
            setCurrentBackground("#F44336");
            main_topSideNavibarRef.current.classList.add(styles.variant_red);

        } else if (variantType == 4) {
            setCurrentBackground("#009688");
            main_topSideNavibarRef.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);



    // toTop
    const context_top_spacerRef = useRef();
    const scrollToContext_top_spacer = () => {
        if (context_top_spacerRef.current) {
            context_top_spacerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };    



    // modal toggle
    const modalRef = useRef();
    const { isOpen: isModalOpen, toggle: triggerModal } = useToggleCollapse(styles, modalRef, 500);
    
    const setIsModalOpen = useBoxAlpha((state) => state.setIsModalOpen);
    const setTriggerModal = useBoxAlpha((state) => state.setTriggerModal);

    useEffect(() => {
        if (modalRef.current) {
            setIsModalOpen(isModalOpen);
            setTriggerModal(triggerModal);
        }
    }, [isModalOpen, triggerModal, setIsModalOpen, setTriggerModal])



    return (
        <div className={styles.main_topSideNavibar} ref={main_topSideNavibarRef}>
            <div className={styles.context_top} ref={context_topRef} style={{background: `${currentBackground}`}}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_top_collapse}/>

                <div className={styles.themes}>
                    <button type="button" className={styles.teal}
                        onClick={() => setVariantType(4)}
                        onMouseEnter={() => goBackground("#009688")}
                        onMouseLeave={() => goBackground(currentBackground)}
                    >Teal</button>

                    <button type="button" className={styles.red}
                        onClick={() => setVariantType(3)}
                        onMouseEnter={() => goBackground("#F44336")}
                        onMouseLeave={() => goBackground(currentBackground)}
                    >Red</button>

                    <button type="button" className={styles.night}
                        onClick={() => setVariantType(2)}                   
                        onMouseEnter={() => goBackground("#333")}
                        onMouseLeave={() => goBackground(currentBackground)}
                    >Night</button>

                    <button type="button" className={styles.default}
                        onClick={() => setVariantType(1)}
                        onMouseEnter={() => goBackground("#000")}
                        onMouseLeave={() => goBackground(currentBackground)}                
                    >Default</button>
                </div>
            </div>
            <div className={styles.context_top_spacer} ref={context_top_spacerRef}></div>


            <div className={styles.context_top_collapse} ref={context_top_collapseRef}>
                <div className={styles.overlay} onClick={triggerContext_top_collapse}></div>

                <div className={styles.context_side}>
                    <button type="button" onClick={triggerContext_top_collapse}>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}/>
                    </button>

                    <div className={styles.buttons}>
                        <button type="button" onClick={() => setVariantType(1)}>Default</button>
                        <button type="button" onClick={() => setVariantType(2)}>Night</button>
                        <button type="button" onClick={() => setVariantType(3)}>Red</button>
                        <button type="button" onClick={() => setVariantType(4)}>Teal</button>
                    </div>
                </div>
            </div>


            <div className={styles.toTop}>
                <p onClick={scrollToContext_top_spacer}>Go to top</p>

                <button type="button" onClick={scrollToContext_top_spacer}>
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-up" className={styles.ic}/>
                </button>
            </div>


            <div className={styles.modal} ref={modalRef}>
                <div className={styles.overlay} onClick={triggerModal}></div>

                <div className={styles.panel}>
                    <div className={styles.panel_top}>
                        <h3>Hello, im Boima.</h3>

                        <div className={styles.top_smile}>
                            <p>A message to W3Schools</p>

                            <FontAwesomeIcon icon="fa-regular fa-face-smile" className={styles.ic}/>
                        </div>

                        <button type="button" onClick={triggerModal}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}/>
                        </button>
                    </div>

                    <div className={styles.panel_body}>
                        <p>i use 10 W3Schools responsive web design template as training materials, and i got many knowledge in React thank to that. Thank you W3Schools for providing free web learning material, i learned HTML, CSS, JavaScript, Bootstrap, SCSS from you, also C++, Java, Python, SQL..., your sources are amazing.</p>
                    </div>

                    <div className={styles.panel_bottom}>
                        <p>10 Static Websites Arc. Boima.</p>
                    </div>
                </div>
            </div>


            <div className={styles.context_main}>

                <Co_header />
                <Co_box1 />
                <Co_box2 />
                <Co_box3 />
                <Co_box4 />
                <Co_box5 />
                <Co_footer />

            </div>
        </div>
    );
}


export default Co_topSideNavibar;
