import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.homeTriggerElement = $("#home");
		this.createSectionWaypoints();
		this.addSmoothScrolling();
		this.createHomeWaypoint();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	// reset "home" link
	createHomeWaypoint() {
		var that = this;
		var w = $(window);
		new Waypoint({
			element: this.homeTriggerElement[0],
			handler: function(direction) {
				w.on("scroll", function() {
					if((w.scrollTop()) < 360) {
						that.headerLinks.removeClass("is-current-link");
					}
				});
			},
			// offset: "50%"
		}); 
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		}); 
	}

	createSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction === "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%" 
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction === "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-80%" 
			});
		});
	}
}

export default StickyHeader;