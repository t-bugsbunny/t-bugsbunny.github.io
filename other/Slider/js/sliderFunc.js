const SliderNav = {
    next: document.getElementById('nextBtn'),
    prev: document.getElementById('prevBtn'),
    goNext: function(){
        this.next.addEventListener('click' ,function () {
            let activeElement = document.querySelector('.active');
            if(activeElement.nextElementSibling) {
                activeElement.style.left = "-100%";
                activeElement.classList.remove('active');
                activeElement.nextElementSibling.classList.add('active');
            }
        })
    },
    goPrev: function(){
        this.prev.addEventListener( 'click',  function () {
            let activeElement = document.querySelector('.active');
            if(activeElement.previousElementSibling) {
                activeElement.previousElementSibling.style.left = "0%";
                activeElement.classList.remove('active');
                activeElement.previousElementSibling.classList.add('active');
            }
        })
    }
}

let slider = Object.create(SliderNav);
slider.goNext();
slider.goPrev();



