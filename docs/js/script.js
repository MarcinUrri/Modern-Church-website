const navigation=$(".navigation-bar"),navigationPanel=$(".main-nav");function initMap(){let n=new google.maps.Map(document.getElementById("map"),{zoom:7,center:{lat:18.987445,lng:50.0972119}}),a={url:"../img/map-marker.png",scaledSize:new google.maps.Size(30,30)};new google.maps.Marker({position:{lat:18.987445,lng:50.097211},map:n,icon:a,scale:10})}$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>100?(navigation.addClass("scroll-nav"),navigation.css("width","100%")):navigation.removeClass("scroll-nav")}),$("#hamburger").click(function(){$(this).toggleClass("open"),navigationPanel.toggle()})});
