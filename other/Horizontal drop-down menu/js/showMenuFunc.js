function showMenu(className){
    var menuElem = document.getElementsByClassName(className);
    for(var i=0; i<menuElem.length; i++){
        menuElem[i].addEventListener('mouseenter', show, false);
        menuElem[i].addEventListener('mouseleave', hide, false);
    }
    function show() {
        this.children[1].classList.add('active');
    }
    function hide() {
        this.children[1].classList.remove('active');
    }
}
