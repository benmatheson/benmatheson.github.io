$(document).ready(function(){
    
    
    console.log ('m!!!!!!ain')

    
    
    $("nav").addClass("nav-fixed"),$("nav > div.logo").css("visibility","visible").fadeIn(),$("nav > div.nav-toggle").css("visibility","visible").fadeIn(),$(".nav-icon").click(function(){$(".nav-full").toggleClass("active"),$("main").toggleClass("active"),$(this).find("img").toggle()}),$(".nav-full").find("a").click(function(){$(".nav-full").toggleClass("active"),$("main").toggleClass("active"),$(".nav-icon").find("img").toggle()}),$("pre code").each(function(i,l){hljs.highlightBlock(l)})});




// hljs.initHighlightingOnLoad();
// console.log("after initiaiong")

// console.log("hi !")