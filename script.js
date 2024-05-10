let chatList = document.getElementById('chat-list');
let conversa = document.getElementById('historico');
let useroption = document.getElementById('usuario');
let username = "Default";
let userImage = "images/usuario.png";
useroption.style.setProperty("--background-image","url(images/usuario.png)");


function createChat(name){
    let chatitem = document.createElement('li');
    let itemDiv = document.createElement('div')
    let title = document.createElement('h5');
    let trash = document.createElement('button');


    trash.classList.add('trash');
    trash.addEventListener('click',()=>{
        chatList.removeChild(chatitem);
        console.log("cu");
    });

    itemDiv.classList.add('chat-item');
    itemDiv.addEventListener('mouseover',()=>{
        itemDiv.classList.add('selected');
        itemDiv.append(trash);
    });
    itemDiv.addEventListener('mouseleave',()=>{
        itemDiv.classList.remove('selected');
        itemDiv.removeChild(trash);
    });
    title.innerText = name;
    title.classList.add('chat-title');
    itemDiv.append(title);

    chatitem.append(itemDiv);
    

    return chatitem;
}

function createMessage(username,img,content){
    let mensagem = document.createElement('div');
    let imagem = document.createElement('img');
    let diva = document.createElement('div');
    let nome = document.createElement('h4');
    let conteudo = document.createElement('div');

    mensagem.classList.add("mensagem");
    nome.classList.add("nome-usuario");
    conteudo.classList.add("conteudo-mensagem");
    imagem.classList.add("imagem-usuario");

    imagem.src = img;

    nome.innerText = username;

    conteudo.innerHTML = content;

    diva.appendChild(nome)
    diva.appendChild(conteudo)

    mensagem.appendChild(imagem);
    mensagem.appendChild(diva)

    return mensagem;
}

let addChat = document.getElementById('NC');
let enviarBotao = document.getElementById('enviar');
let setNameBtn = document.getElementById('btnName');
let setImageBtn = document.getElementById('btnImg');

useroption.addEventListener('click',()=>{
    let userChanges = document.getElementById('config-user');
    if(useroption.classList.contains('selected')){
        useroption.classList.remove('selected');
        userChanges.style.display = 'none';
    } else{
        userChanges.style.display = "block";
        useroption.classList.add('selected');
    }
});

setNameBtn.addEventListener('click',()=>{
    let input = document.getElementById('nomeUsuario');
    username = input.value;
    useroption.innerText = input.value;
    input.value = "";
});

setImageBtn.addEventListener('click',()=>{
    let input = document.getElementById('imagemUsuario');
    userImage = input.value;
    useroption.style.setProperty("--background-image",`url(${input.value})`);
    input.value = "";
});


enviarBotao.addEventListener('click',()=>{
    let textinhoEL = document.getElementById('mensagem-input');
    let textinho = textinhoEL.value;
    if(textinho.trim() !== ""){
        conversa.append(createMessage(username,userImage,textinho));
        textinhoEL.value = "";
    }
});

addChat.addEventListener('click',()=>{
    chatList.append(createChat("Novo Chat"));
});