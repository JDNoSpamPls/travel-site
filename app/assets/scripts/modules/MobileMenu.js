/*
jquery from the npm package, which is in /node_modules */
import $ from 'jquery';

class MobileMenu {
	constructor() {
		/* // what not to do: the jquery spaghetti
		$("div.site-header__menu-icon").click(function() {
			console.log("Did something when this icon got clicked.");
		});*/
		// do these instead..
		this.siteHeader = $("header.site-header");
		this.menuIcon = $("div.site-header__menu-icon");
		this.menuContent = $("div.site-header__menu-content");

		// callback functions
		this.events();
	}

	// user actions, mostly
	events() {
		/* note..
		the .click() function here causes the 'this' keyword
		to point to the .menuIcon() object, not the class MobileMenu
		therefore, .bind() is used to make sure it stays pointing to
		MobileMenu */
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		// console.log(this);
	}

	// functions, things to do in some 'event'
	toggleTheMenu() {
		// alert(this);
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;



















// 