/* note..
the name MobileMenu is technically a variable 
and can be changed to anything you want, but 
it's best to stay semantic so MobileMenu it is. */
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "84%");
new RevealOnScroll($(".testimonial"), "72%");
var stickyHeader = new StickyHeader();