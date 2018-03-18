const navigation = $('.navigation-bar')
const navigationPanel = $('.main-nav')
$( document ).ready(function() {

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
      navigation.addClass('scroll-nav')
      navigation.css("width", "100%")

    }else{
      navigation.removeClass('scroll-nav')

    }
  });


  $('#hamburger').click(function(){
  		$(this).toggleClass('open');
      navigationPanel.toggle();
  	});
    navigationPanel.click(function(){
      $(this).toggle();
    })

});

function initMap() {
  let options ={
    zoom:7,
    center:{lat:18.987445, lng:50.0972119}
  }
  let map = new google.maps.Map(document.getElementById('map'), options);

  let icon = {
    url: "../img/map-marker.png", // url
    scaledSize: new google.maps.Size(30, 30),
};

  let marker = new google.maps.Marker({
    position:{lat:18.987445,lng:50.097211},
    map:map,
    icon:icon,
    scale:10
  });
}
