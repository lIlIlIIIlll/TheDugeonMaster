let chatList = document.getElementById('chat-list');
let conversa = document.getElementById('historico');


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

enviarBotao.addEventListener('click',()=>{
    let textinhoEL = document.getElementById('mensagem-input');
    let textinho = textinhoEL.value;
    if(textinho.trim() !== ""){
        conversa.append(createMessage("Luth","https://i.pinimg.com/236x/c5/ef/e9/c5efe9990be2f5b219b309f5505eaf43.jpg",textinho));
        textinhoEL.value = "";
    }
});

addChat.addEventListener('click',()=>{
    chatList.append(createChat("Novo Chat"));
});