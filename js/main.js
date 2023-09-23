

  const tabItem = document.querySelectorAll('.tabs__btn-item');
  const tabContent = document.querySelectorAll('.tabs_content-item');

  tabItem.forEach(function(element) {
    element.addEventListener('click', open);
  })

  function open(evt) {
    const tabTarget= evt.currentTarget;
    const button=tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item){
        item.classList.remove('tabs_content-item--active');
    })

    document.querySelector(`#${button}`).classList.add
    ('tabs_content-item--active')
  }

  const menuBtn=document.querySelector('.menu_btn');
  const menu=document.querySelector('.menu__list');

  menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu__list--active');
  });

  










  const  swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false}
  });


    
