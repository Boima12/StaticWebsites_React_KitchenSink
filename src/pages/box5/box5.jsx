import styles from './box5.module.css';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useBoxAlpha from '~/src/utilities/zustand/boxAlpha';


function Co_box5() {

    // tabBar
    const [activeTab, setActiveTab] = useState(0);
    const tabBar_LondonRef = useRef();
    const tabBar_ParisRef = useRef();
    const tabBar_TokyoRef = useRef();

    const switchTabBar = (tabIndex) => {
        tabBar_LondonRef.current.style.display = "none";
        tabBar_ParisRef.current.style.display = "none";
        tabBar_TokyoRef.current.style.display = "none";

        switch (tabIndex) {
            case 0:
                tabBar_LondonRef.current.style.display = "flex";
                break;
            case 1:
                tabBar_ParisRef.current.style.display = "flex";
                break;
            case 2:
                tabBar_TokyoRef.current.style.display = "flex";
                break;  
            default:
                console.log("how did we get here?");
                break;              
        }

        setActiveTab(tabIndex);
    }

    useEffect(() => {
        if (tabBar_LondonRef.current) {
            tabBar_LondonRef.current.style.display = "flex"; // Show London tab by default
        }
    }, []);



    // pagination bar
    const [activePagination, setActivePagination] = useState(1);



    // changing variant
    const variantType = useBoxAlpha((state) => state.variantType);
    /* variants type
        default - 1
        night - 2
        red - 3
        teal - 4
    */

    const main_box5Ref = useRef();

    useEffect(() => {
        // clean up current variant class to prepare for the next variant class
        main_box5Ref.current.classList.remove(styles.variant_night);
        main_box5Ref.current.classList.remove(styles.variant_red);
        main_box5Ref.current.classList.remove(styles.variant_teal);


        if (variantType == 2) {
            main_box5Ref.current.classList.add(styles.variant_night);
        } else if (variantType == 3) {
            main_box5Ref.current.classList.add(styles.variant_red);
        } else if (variantType == 4) {
            main_box5Ref.current.classList.add(styles.variant_teal);
        }
    }, [variantType]);



    return(
        <div className={styles.main_box5} ref={main_box5Ref}>
            <div className={styles.tabs}>
                <h3>Tabs</h3>

                <div className={styles.tabBar}>
                    <div className={styles.tabBar_top}>
                        <button type="button" className={activeTab === 0 ? styles.actived : ""} onClick={() => switchTabBar(0)}>London</button>
                        <button type="button" className={activeTab === 1 ? styles.actived : ""} onClick={() => switchTabBar(1)}>Paris</button>
                        <button type="button" className={activeTab === 2 ? styles.actived : ""} onClick={() => switchTabBar(2)}>Tokyo</button>
                    </div>

                    <div className={styles.tabBar_body} ref={tabBar_LondonRef}>
                        <h3>London</h3>
                        <p>London is the capital city of England.</p>
                        <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                    </div>

                    <div className={styles.tabBar_body} ref={tabBar_ParisRef}>
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                        <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
                    </div>

                    <div className={styles.tabBar_body} ref={tabBar_TokyoRef}>
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                        <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
                    </div>
                </div>

            </div>

            <div className={styles.buttons}>
                <h3>Buttons</h3>

                <div className={styles.buttons_body}>
                    <div className={styles.normal}>
                        <button type="button">Button</button>
                        <button type="button">Button</button>
                        <button type="button" className={styles.special}>Button</button>
                    </div>

                    <div className={styles.circle}>
                        <button type="button">
                            <FontAwesomeIcon icon="fa-solid fa-plus" className={styles.ic}/>
                        </button>

                        <button type="button">
                            <FontAwesomeIcon icon="fa-solid fa-plus" className={styles.ic}/>
                        </button>

                        <button type="button" className={styles.special}>
                            <FontAwesomeIcon icon="fa-solid fa-plus" className={styles.ic}/>
                        </button>
                    </div>

                    <div className={styles.dropdown}>
                        <a>Dropdown</a>

                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.pagination}>
                <h3>Pagination</h3>

                <div className={styles.bar}>
                    <button type="button" className={styles.director}>«</button>
                    <button type="button" className={activePagination === 1 ? styles.actived : ""} onClick={() => setActivePagination(1)}>1</button>
                    <button type="button" className={activePagination === 2 ? styles.actived : ""} onClick={() => setActivePagination(2)}>2</button>
                    <button type="button" className={activePagination === 3 ? styles.actived : ""} onClick={() => setActivePagination(3)}>3</button>
                    <button type="button" className={activePagination === 4 ? styles.actived : ""} onClick={() => setActivePagination(4)}>4</button>
                    <button type="button" className={activePagination === 5 ? styles.actived : ""} onClick={() => setActivePagination(5)}>5</button>
                    <button type="button" className={styles.director}>»</button>
                </div>
            </div>
        </div>
    );
}

export default Co_box5

// actived (should have been 'activated') :D