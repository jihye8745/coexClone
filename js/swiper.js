// const banner = document.querySelector(".banner");

const banner = document.querySelector(".banner_top");
const h_pagination = document.querySelector(".hero_p.swiper-pagination");

const heroTitle = document.querySelector(".heroTitle a");
const heroDate = document.querySelector(".info .date");
const heroLocate = document.querySelector(".info .locate");
const heroCategory = document.querySelector(".slide_category span");

const slideData = [
  {
    title: "제2회 고메잇 강남",
    date: "2025.11.04-2025.11.16",
    locate: "코엑스 광장",
    category: "POP-UP/EVENT"
  },
  {
    title: "소싱인마켓 2025",
    date: "2025.11.26-2025.11.28",
    locate: "Coex Hall C",
    category: "EXHIBITION"
  },
  {
    title: "2025 AI 서밋 서울",
    date: "2025.11.10-2025.11.11",
    locate: "Coex Hall B",
    category: "CONVENTION"
  },
];

const swiper = new Swiper(banner, {
  pagination: {
    el: h_pagination,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function() {

      const s_index = this.activeIndex;
      const data = slideData[s_index];
      
      heroTitle.textContent = data.title;
      heroDate.textContent = data.date;
      heroLocate.textContent = data.locate;
      heroCategory.textContent = data.category;
    }
  }
});



// event section swiper
const event_box = document.querySelector(".event_contents .slide_wrap");
const e_pagination = document.querySelector(".event_p.swiper-pagination");

let eswiper = null;

function SwiperSwitch () {
  
  if (window.innerWidth <= 747) {
    if (!eswiper) {
      eswiper = new Swiper(event_box, {
        pagination: { el: e_pagination },
        slidesPerView: "auto",
      });
    }
  } else {
    if (eswiper) {
      eswiper.destroy(true, true);
      eswiper = null;
    }
  }
}

SwiperSwitch();

window.addEventListener('resize', SwiperSwitch);

