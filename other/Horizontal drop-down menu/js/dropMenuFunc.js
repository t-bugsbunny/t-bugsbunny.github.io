function dropMenu(idOfSubMenu, idOfMenuBtn) {
    var menu = document.getElementById(idOfSubMenu);
    var menuItem = document.getElementById(idOfMenuBtn);
    var menuStyle = getComputedStyle(menu);
    menuItem.onclick = function () {
        if(menuStyle.display === 'none'){
            menu.classList.add('active');
        }else{
            menu.classList.remove('active');
        }
    }
}


