var users = [
    {
        login: 'jonathan',
        pass: 'jrf181101',
        nome: 'Jonathan R. de Fraga'
    },
    {
        login: 'cintia',
        pass: 'cintia',
        nome: 'Cíntia S. Kamainski'
    },
    {
        login: 'admin',
        pass: 'admin',
        nome: 'Administrador'
    }
];

sessionStorage.setItem('user', null);

$('#ic-menu').click(function () {
    console.log($('#ic-menu'));
    var div = $('#div-menus');
    if (div.hasClass('show')) {
        div.removeClass('show');
    } else {
        div.addClass('show');
    }
});

function verificaLogin() {
    let session = sessionStorage.getItem('user');

    if (session === null) {
        return false;
    }

    return true;
}

function login() {
    let login = $('#input-login').val().trim();
    let index = 0;
    let find = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === login) {
            index = i;
            find = true;
        }
    }

    if (find) {
        let pass = $('#input-senha').val().trim();
        let passBd = users[index].pass;
        console.log(pass === passBd);
        console.log(passBd);
        console.log(pass);
        if (pass === passBd) {
            sessionStorage.setItem('user', JSON.stringify(users[index]));
            console.log('a');
            console.log('a');
            return true;
        }
    }
    return false;
}

function logout() {
    sessionStorage.setItem('user', null);
    window.location.href = '../../index.html'
}

if (verificaLogin) { 
    $('#op-sair').removeClass('hidden');
}