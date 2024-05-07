let chatList = document.getElementById('chat-list');

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
    title.classList.add('chat-title')
    itemDiv.append(title);

    chatitem.append(itemDiv);
    

    return chatitem;
}

let addChat = document.getElementById('NC');

addChat.addEventListener('click',()=>{
    chatList.append(createChat("Novo Chat"));
});