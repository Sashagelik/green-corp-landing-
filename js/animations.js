const INCREASE_NUMBER_ANIMATION_SPEED = 50;//

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i<=endNumber) {
    if (i===endNumber){
      element.innerHTML = i + '+';
    }else {
      element.innerHTML = i;
    }
    i=i+100
    setTimeout(()=>increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED)
  }
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector('.features__clients-count')
  increaseNumberAnimationStep (0, element, 5000) 
}




document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    let formContainer = document.createElement('div')
    formContainer.classList.add ('form__group')
    formContainer.classList.add ('form__other-input')

    let input = document.createElement ('input')
    input.setAttribute ('placeholder', 'Введите ваш вариант')
    input.setAttribute ('type', 'text')

    formContainer.appendChild(input);
    document.querySelector ('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
  }
  let otherInput = document.querySelector('.form__other-input')
  if (event.target.value !== 'other' && Boolean (otherInput)) {
     
     document.querySelector('.form form').removeChild (otherInput)
  }
});

function updateScroll () {
    if (window.scrollY > 0){
      const header = document.querySelector("header")
      header.classList.add("header__scrolled")
    } else {
      const header = document.querySelector("header")
      header.classList.remove("header__scrolled")
    }
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;  
    if (windowBottomPosition >= countElementPosition && !animationInited ) {
      animationInited = true
      initIncreaseNumberAnimation()   
    }
};
    let animationInited = false;

    window.addEventListener('scroll', updateScroll);

    function addSmoothScroll(ancore) {
      ancore.addEventListener('click', function (event) {
          event.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          })
      })   
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      addSmoothScroll(anchor);
    });


    function onLinkClick(event) {
      event.preventDefault();
      document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    }

    addSmoothScroll(document.querySelector('.more-button')) 
