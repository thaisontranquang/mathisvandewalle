const buttonMenu = document.querySelector('.navbar_mobile_button')
const listMenu = document.querySelector('.navbar_mobile')
const link1 = document.querySelector('.hidelink')
const closeBtn = document.querySelector('.close-menu-btn')

buttonMenu.addEventListener('click', function () {
    if (listMenu.classList.contains('closedmenu')) {
        listMenu.classList.remove('closedmenu')
        listMenu.classList.add('openmenu');
        closeBtn.style.display = "block";
        setTimeout(function () {

            link1.classList.add('hidelinkfalse');

        }, 300);


    } else {
        listMenu.classList.add('closedmenu')
        listMenu.classList.remove('openmenu');
        link1.classList.remove('hidelinkfalse');

    }
})

closeBtn.addEventListener('click', function () {
    if (listMenu.classList.contains('closedmenu')) {
        listMenu.classList.remove('closedmenu')
        listMenu.classList.add('openmenu');
        closeBtn.style.display = "block";
        setTimeout(function () {

            link1.classList.add('hidelinkfalse');

        }, 300);


    } else {
        listMenu.classList.add('closedmenu')
        listMenu.classList.remove('openmenu');
        link1.classList.remove('hidelinkfalse');
        closeBtn.style.display = "none";
    }
})
