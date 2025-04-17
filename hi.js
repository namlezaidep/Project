function scrollLeft() {
    document.querySelector('.job-slider-wrapper').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
  
  function scrollRight() {
    document.querySelector('.job-slider-wrapper').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  const jobList = document.querySelector('.job-list');
  const jobCards = document.querySelectorAll('.job-card');
  let index = 0;

  function autoSlide() {
    index = (index + 1) % jobCards.length;
    jobList.style.transform = `translateX(-${index * (jobCards[0].offsetWidth + 20)}px)`;
  }

  setInterval(autoSlide, 3000); 
  let bannerIndex = 0;
const bannerWidth = document.querySelector('.banner-item').offsetWidth + 20; // ảnh + gap
const visibleBanners = 3;

function slideRight() {
  const bannerList = document.querySelector('.banner-list');
  const maxScroll = bannerList.scrollWidth - bannerList.clientWidth;

  if ((bannerIndex + 1) * bannerWidth * visibleBanners < bannerList.scrollWidth) {
    bannerIndex++;
  }

  bannerList.style.transform = `translateX(-${bannerIndex * bannerWidth}px)`;
}

function slideLeft() {
  const bannerList = document.querySelector('.banner-list');
  if (bannerIndex > 0) {
    bannerIndex--;
  }

  bannerList.style.transform = `translateX(-${bannerIndex * bannerWidth}px)`;
}
let currentSlide = 0;

function slideLeft() {
  const bannerList = document.getElementById("bannerList");
  const totalSlides = bannerList.children.length;

  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  bannerList.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function slideRight() {
  const bannerList = document.getElementById("bannerList");
  const totalSlides = bannerList.children.length;

  currentSlide = (currentSlide + 1) % totalSlides;
  bannerList.style.transform = `translateX(-${currentSlide * 100}%)`;
}

