import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCircleChevronUp, faPlus, faCaretRight, faDesktop, faBars, faXmark, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile, faGem } from '@fortawesome/free-regular-svg-icons';

// grouping for easier organize
const iconGroup1 = [faHouse, faFacebook, faFaceSmile, faCircleChevronUp, faPlus, faCaretRight, faGem, faDesktop, faBars, faXmark, faCss3, faAngleLeft, faAngleRight];

// Add all icons to the library
library.add(...iconGroup1);
