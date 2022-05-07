$(document).ready(function () {

    $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    setInterval(slide, 5000)

    function slide() {
        if ($(".banner-ativo").next().length) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }
    }


    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")


        //if($("#menu").hasClass("menu-ativo")){
        //    $("#menu").removeClass("menu-ativo")
        //} else {
        //    $("#menu").addClass("menu-ativo")
        //
        //}


    })
});

let menu = document.getElementById("menu");

//function mostrarMenu() {
//    if (menu.style.display != "flex") {
//        menu.style.display = "flex"
//    } else {
//        menu.style.display = "none"
//   }
//}


let email = document.getElementById("campo-email");


function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}


let listaNoticias = [
    {
        titulo: "Amazon prime esta doando Kindle",
        descricao: "a amazon nesta semana estará doando para moradores de rua a amazon nesta semana estará doando para moradores de rua  "
    },
    {
        titulo: "O dolar esta negativo",
        descricao: "1 real esta valendo 400 dolares"
    },
    {
        titulo: "NFT vende mais que pamonha",
        descricao: "O pessoal acha mais doce"
    },

    {
        titulo: "netflix vai a falência",
        descricao: "todo mundo via o catalogo mas não assistia o filme"
    },

    {
        titulo: "Elon Musk faz cambio entre tesla e moto g2",
        descricao: "Segundo Elon, a troca valeu a pena pois ele faz ligações também"
    },

    {
        titulo: "SONY anuncia o preço do play 5 que caiu para 1000 reais",
        descricao: "Isso aqui se for verdade eu to no paraiso"
    }

]




function renderizaNoticias() {
    let espaco = document.getElementById("espaco-noticias")
    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index]

        template += `<div class="cardnews">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
        </div>`
    }



    espaco.innerHTML = template
}





// Pagina de login

function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado');
});