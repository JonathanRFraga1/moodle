document.getElementById('ic-menu').onclick = function () {
    console.log(document.getElementById('ic-menu'));
    var div = document.getElementById('div-menus');
    if (div.classList.contains('show')) {
        div.classList.remove('show');
    } else {
        div.classList.add('show');
    }
};