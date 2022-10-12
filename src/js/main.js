/* import { menuButton } from "./modules/menu";
import {popup} from './modules/modal'
import {advantages} from './modules/advantages'
import {exchange} from './modules/exchange' */

import Swiper,{ Autoplay } from 'swiper';

const swiper=new Swiper('.swiper',{
	// configure Swiper to use modules

	modules: [Autoplay],
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	spaceBetween: 15,
  })

//# sourceMappingURL=main.js.map
