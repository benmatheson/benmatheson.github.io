function fullMobileViewport(){function i(){n.css("height",e+"px")}var n=$(this),e=$(window).height();$(window).resize(function(){Math.abs(e-$(window).height())>100&&(e=$(window).height(),i())}),i()}$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>$(this).height()-$("nav").height()?($("nav").addClass("nav-fixed"),$("nav > div.logo").css("visibility","visible").fadeIn(),$("nav > div.nav-toggle").css("visibility","visible").fadeIn()):($("nav").removeClass("nav-fixed"),$("nav > div.logo").css("visibility","hidden").fadeOut(),$("nav > div.nav-toggle").css("visibility","hidden").fadeOut())}),$(".nav-icon").click(function(){$(".nav-full").toggleClass("active"),$("main").toggleClass("active"),$(this).find("img").toggle()}),$(".nav-full").find("a").click(function(){$(".nav-full").toggleClass("active"),$("main").toggleClass("active"),$(".nav-icon").find("img").toggle()}),$("pre code").each(function(i,n){hljs.highlightBlock(n)})}),$("header").each(fullMobileViewport);



console.log("hi from the not src INDEX!")

// document.querySelector('nav').classList.add("nav-fixed")

// document.querySelector('#form-contact')