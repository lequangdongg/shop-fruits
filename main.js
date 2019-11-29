function myFunction() {
    let x =  document.getElementById('mylist');
      if(x.style.display === "block"){
        x.style.display = "none";
        x.style.zIndex = "10000";
      }else{
        x.style.display = "block";
      }
}
function myFunction2() {
  let element1 = document.getElementById('language1');
    if(element1.style.display === "block"){
          element1.style.display = "none";
    }
    else{
      element1.style.display = "block";
    }
}

// responsive nav
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

let swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    } 
  });

let swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 10,
    freeMode:true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerColumn:2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn:2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        slidesPerColumn:2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    } 
  });
  let swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 20,
    freeMode:true,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerColumn:2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn:2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        slidesPerColumn:2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    } 
  });
  let swiper4 = new Swiper('.swiper-container4', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    } 
});
