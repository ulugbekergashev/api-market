var bars = document.querySelector(".icon");
var list1 = document.querySelector(".links1")
var list2 = document.querySelector(".links2")
var list3 = document.querySelector(".links3")
var list4 = document.querySelector(".links4")


bars.addEventListener("click", function(){
    if(list1.classList.contains("linkblock")){
        list1.classList.remove("linkblock")
        list2.classList.remove("linkblock")
        list3.classList.remove("linkblock")
        list4.classList.remove("linkblock")

    }else{
        list1.classList.add("linkblock")
        list2.classList.add("linkblock")
        list3.classList.add("linkblock")
        list4.classList.add("linkblock")

    }
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30
      }

    }
});
var swiper = new Swiper(".secondswiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      310: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2
      }
    }
});
var swiper = new Swiper(".testimon-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.4
    },
    800: {
      slidesPerView: 1.8
    },
    950: {
      slidesPerView: 2.2
    },
    1200: {
      slidesPerView: 2.5
    }
  }
});

