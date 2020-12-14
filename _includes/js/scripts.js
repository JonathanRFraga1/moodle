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

$('#ic-menu').click(function () {
    var div = $('#div-menus');
    if (div.hasClass('show')) {
        div.removeClass('show');
    } else {
        div.addClass('show');
    }
});

function verificaLogin() {
    let session = sessionStorage.getItem('user');
    if (session === 'null' || session === 'undefined' || session == null) {
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
        if (pass === passBd) {
            sessionStorage.setItem('user', JSON.stringify(users[index]));
            return true;
        }
    }
    return false;
}

function logout() {
    sessionStorage.setItem('user', null);
    window.location.href = window.location.hostname + '/index.html'
}

if (verificaLogin()) {
    $('#op-sair').removeClass('hidden');
}

$('#op-sair').click(() => {
    logout();
})

var calc = '';
var visor = '';

var visor_inf = $('#visor-inf');

$('#num0').click(() => {
    calc += 0;
    visor += 0;
    visor_inf.html(visor);
})

$('#num1').click(() => {
    calc += 1;
    visor += 1;
    visor_inf.html(visor);
})

$('#num2').click(() => {
    calc += 2;
    visor += 2;
    visor_inf.html(visor);
})

$('#num3').click(() => {
    calc += 3;
    visor += 3;
    visor_inf.html(visor);
})

$('#num4').click(() => {
    calc += 4;
    visor += 4;
    visor_inf.html(visor);
})

$('#num5').click(() => {
    calc += 5;
    visor += 5;
    visor_inf.html(visor);
})

$('#num6').click(() => {
    calc += 6;
    visor += 6;
    visor_inf.html(visor);
})

$('#num7').click(() => {
    calc += 7;
    visor += 7;
    visor_inf.html(visor);
})

$('#num8').click(() => {
    calc += 8;
    visor += 8;
    visor_inf.html(visor);
})

$('#num9').click(() => {
    calc += 9;
    visor += 9;
    visor_inf.html(visor);
})

$('#virgula').click(() => {
    calc += '.';
    visor += ',';
    visor_inf.html(visor);
})

$('#plus').click(() => {
    calc += '+';
    visor += ' + ';
    visor_inf.html(visor);
})

$('#minus').click(() => {
    calc += '-';
    visor += ' - ';
    visor_inf.html(visor);
})

$('#times').click(() => {
    calc += '*';
    visor += ' x ';
    visor_inf.html(visor);
})

$('#division').click(() => {
    calc += '/';
    visor += ' / ';
    visor_inf.html(visor);
})

$('#equals').click(() => {
    $('#visor-sup').html(visor + ' =');

    try {
        let calculo = eval(calc);
        visor_inf.html(calculo);
    } catch (error) {
        visor_inf.html("Erro de sintaxe!!!");
    }

    visor = '';
    calc = '';
})