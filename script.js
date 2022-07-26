//tombol kirim
const sendBtn = document.getElementsByClassName('send')[0];
let i = 0;

//menampilkan hasil ketika menekan elemen tombol
sendBtn.addEventListener('click', function(){
  const textInpt = document.getElementById('textInpt').value;
  userInpt(textInpt, i);
  i++;
});

//menampilkan hasil ketika di enter
window.addEventListener('keypress', function(key){
  const textInpt = document.getElementById('textInpt').value;
  if(key.keyCode == 13){
    userInpt(textInpt, i);
    i++;
  };
});


//penampung semua fungsi
function userInpt(textInpt, i){
  const chatRoom = document.getElementsByClassName('chatRoom')[0];
  const bottonSpace = document.getElementsByClassName('bottonSpace')[0];
  
  //----user input----//
  newElementUserChat(chatRoom, textInpt,bottonSpace);
  formReset();

  //--respon dari user lain(bot)--//
  respon(chatRoom, i);
  statusUser();
};


//-------membuat element chat--------//
function newElementUserChat(chatRoom, textInpt){
  const popChat = document.createElement('div');
  popChat.setAttribute('class', 'popChat');
  
  const p = document.createElement('p');

  const txt = document.createTextNode(textInpt);

  const popChatKos = document.createElement('div');
  popChatKos.setAttribute('class', 'popChatKos');

  p.appendChild(txt);
  popChat.appendChild(p);
  chatRoom.appendChild(popChat);
  chatRoom.appendChild(popChatKos);
};


//-----mereset prilaku default dari form input----//
function formReset(){
  const form = document.getElementsByClassName('blokText')[0];
  form.reset();
};

//respon user lain(bot)
function respon(chatRoom, i){
  setTimeout(function(){
    const wordResponValue = wordRepon(i);
    const userRespon = document.createElement('div');
    userRespon.setAttribute('class', 'userRespon');
    const p = document.createElement('p');
    const txt = document.createTextNode(wordResponValue);
    const userResponKos = document.createElement('div');
    userResponKos.setAttribute('class', 'userResponKos');
    p.appendChild(txt);
    userRespon.appendChild(p);
    chatRoom.appendChild(userRespon);
    chatRoom.appendChild(userResponKos);
  }, 2000);
};

//fungsi status user lain(bot)
function statusUser(){
  const stts = document.getElementsByClassName('status')[0];
  setTimeout(function(){
    stts.innerHTML = 'sdg mengetik';
  }, 700);
  setTimeout(function(){
    stts.innerHTML = 'online';
  }, 2700);
};


//function respon kata kata dai user lain(bot)
const wordRepon = (i) => {
  const arrWord = ['apo?', 'sbdjhsdjfbh?', 'ooohhhhh', 'adhfkghsffefwfd', 'ashdajdfsdhf!!!', 'pqowp...', 'poasi?', 'ok'];
  if(i < arrWord.length){
    return arrWord[i];
  };
  if(i >= arrWord.length){
    return 'lah teh list kato kato abih!';
  };
};