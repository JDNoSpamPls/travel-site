import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor(els, pct) {
		this.itemsToReveal = els;
		this.offsetPercentage = pct;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function () {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				// be careful with semi-colon habit here!
				// this is an object notation, thus no semi's!
				offset: that.offsetPercentage
			});
		});
	}

}

export default RevealOnScroll;



















// 