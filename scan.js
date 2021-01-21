var wordlist = ["pussy", "vagina", "dick", "orgasm", "cum", "sex", "cock", "bareback", "sexy", "cums", "blowjob", "footjob", "handjob", "creampie", "busty"]

function read(text) {
  for (var i = 0, l = text.length; i < l; i++) {
    for (var e = 0; e < wordlist.length; e++) {
      console.log(text[i].innerHTML)
      if (text[i].innerHTML.toLowerCase().includes(wordlist[e])) {
        text[i].innerHTML="This content has been blocked.";
      }
    }
  }
}

var p = document.getElementsByTagName('p');
read(p);
var h1 = document.getElementsByTagName('h1');
read(h1);
var h2 = document.getElementsByTagName('h2');
read(h2);
var h3 = document.getElementsByTagName('h3');
read(h3);
var h4 = document.getElementsByTagName('h4');
read(h4);
var h5 = document.getElementsByTagName('h5');
read(h5);
var a = document.getElementsByTagName('a');
read(a);