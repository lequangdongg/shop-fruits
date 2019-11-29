function myFunction(){
    var x =  document.getElementById('mylist');
    if(x.style.display === "inline-block"){
        x.style.display = "none";
        x.style.zIndex = 1000000;
    }
    else{
        x.style.display = "inline-block";
        x.style.zIndex = 1000000;
    }
}
// responsive nav
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
var swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    //   },
  });
var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
  });