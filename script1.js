

//gsap.registerPluggin(scrollTrigger);

gsap.to("#scrollimage", {
    scrollTrigger: {
        start: "top center",
        scrub: true,
    }, 
    scale: 1.6,
})


  const togggleBtn = document.querySelector('#menu')
  const togggleBtnIcon = document.querySelector('#menu i')
  const menudrop = document.querySelector('.menu-drop')
  
  togggleBtn.onclick = function(){
      menudrop.classList.toggle('open')
      const isOpen = menudrop.classList.contains('open')
  
  togggleBtnIcon.classList = isOpen
       ? 'fa-solid fa-xmark'
       : 'fa-solid fa-bars'
  }
  


  



