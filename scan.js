var wordlist = [
  "pussy",
  "vagina",
  "dick",
  "orgasm",
  "cum",
  "sex",
  "cock",
  "bareback",
  "sexy",
  "cums",
  "blowjob",
  "footjob",
  "handjob",
  "creampie",
  "busty",
  "porn"
];

// This will contain the AI handler once it is public.

function read(text) {
  for (var i = 0, l = text.length; i < l; i++) {
    for (var e = 0; e < wordlist.length; e++) {
      if (text[i].innerHTML.toLowerCase().includes(wordlist[e])) {
        text[i].innerHTML = "This content has been blocked.";
      }
    }
  }
}

function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

var p = document.getElementsByTagName("p");
read(p);
var h1 = document.getElementsByTagName("h1");
read(h1);
var h2 = document.getElementsByTagName("h2");
read(h2);
var h3 = document.getElementsByTagName("h3");
read(h3);
var h4 = document.getElementsByTagName("h4");
read(h4);
var h5 = document.getElementsByTagName("h5");
read(h5);
var a = document.getElementsByTagName("a");
read(a);

if (getMeta("RATING").toLowerCase().includes("rta")) {
  document.body.innerHTML = "This content has been blocked.";
}
