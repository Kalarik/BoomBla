// todo РАЗДЕЛ "За всю игру найдено" работает некорректно. Нужно исправить!
//! Тут мы задаем переменные для хранения входных данных
let havePetarda = Number(document.getElementById("kolPet1").innerHTML);
let haveDinamit = Number(document.getElementById("kolDin1").innerHTML);
let haveTsarBomb = Number(document.getElementById("kolTB1").innerHTML);
let haveKusochki = Number(document.getElementById("kus1").innerHTML);
let haveVerevochki = Number(document.getElementById("ver1").innerHTML);
let havePorox = Number(document.getElementById("por1").innerHTML);
let progress = Number(document.getElementById("prog").innerHTML);

function timeLoser() {
  alert("Вы не успели( Вы проиграли!");
  location.reload();
}
setTimeout(timeLoser, 545000);
//! Этот объект включает в себя типы бомб и их характеристики
const bombs = [
  {
    name: "Петарда",
    receptKusochki: 1,
    receptVerevochki: 1,
    receptPorox: 1,
  },
  {
    name: "Динамит",
    receptKusochki: 6,
    receptVerevochki: 4,
    receptPorox: 16,
  },
  {
    name: "Царь-бомба",
    receptDinamit: 10,
  },
];
//! Здесь мы будем искать компоненты
function poisk() {
  let x = Math.random();
  if (x > 0.4) {
    havePorox++;
  } else if (x < 0.15) {
    haveVerevochki++;
  } else {
    haveKusochki++;
  }
  document.getElementById("kus1").innerHTML = haveKusochki;
  document.getElementById("ver1").innerHTML = haveVerevochki;
  document.getElementById("por1").innerHTML = havePorox;
  document.getElementById("kus4").innerHTML = haveKusochki;
  document.getElementById("ver4").innerHTML = haveVerevochki;
  document.getElementById("por4").innerHTML = havePorox;
}
function poiskPet() {
  if (havePetarda >= 1) {
    havePetarda--;
    haveKusochki += bombs[0].receptKusochki;
    haveVerevochki += bombs[0].receptVerevochki;
    havePorox += bombs[0].receptPorox;
    document.getElementById("kolPet1").innerHTML = havePetarda;
    document.getElementById("kolPet2").innerHTML = havePetarda;
    document.getElementById("placeForPet").innerHTML = 30 - havePetarda;
    poisk();
    poisk();
  }
}
//! Тут активация Царь-бомбы
function activateTB() {
  if (haveTsarBomb >= 1) {
    progress += 10;
    haveTsarBomb -= 1;
    document.getElementById("prog").innerHTML = progress;
    document.getElementById("kolTB1").innerHTML = haveTsarBomb;
    document.getElementById("placeForTB").innerHTML = 15 - haveTsarBomb;
    if (progress == 150) {
      alert("Вы победили! (уничтожив весь мир)))");
      location.reload();
    }
  }
}
//! Тут победа в игре
function plantTree() {
  if (progress == 100) {
    alert("Вы победили!");
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("vibor-v-garage").style.display = "none";
  }
}
//! Тут крафтятся бомбы
function craftPet() {
  if (havePetarda < 30) {
    if (
      haveKusochki >= bombs[0].receptKusochki &&
      haveVerevochki >= bombs[0].receptVerevochki &&
      havePorox >= bombs[0].receptPorox
    ) {
      haveKusochki -= bombs[0].receptKusochki;
      haveVerevochki -= bombs[0].receptVerevochki;
      havePorox -= bombs[0].receptPorox;
      havePetarda++;
    }
    document.getElementById("kus2").innerHTML = haveKusochki;
    document.getElementById("ver2").innerHTML = haveVerevochki;
    document.getElementById("por2").innerHTML = havePorox;
    document.getElementById("kolPet1").innerHTML = havePetarda;
    document.getElementById("kolPet2").innerHTML = havePetarda;
    document.getElementById("placeForPet").innerHTML = 30 - havePetarda;
  }
}
function craftDin() {
  if (haveDinamit < 15) {
    if (
      haveKusochki >= bombs[1].receptKusochki &&
      haveVerevochki >= bombs[1].receptVerevochki &&
      havePorox >= bombs[1].receptPorox
    ) {
      haveKusochki -= bombs[1].receptKusochki;
      haveVerevochki -= bombs[1].receptVerevochki;
      havePorox -= bombs[1].receptPorox;
      haveDinamit++;
      document.getElementById("kus2").innerHTML = haveKusochki;
      document.getElementById("ver2").innerHTML = haveVerevochki;
      document.getElementById("por2").innerHTML = havePorox;
      document.getElementById("kolDin1").innerHTML = haveDinamit;
      document.getElementById("placeForDin").innerHTML = 15 - haveDinamit;
    }
  }
}
function craftTB() {
  if (haveDinamit >= bombs[2].receptDinamit) {
    haveDinamit -= 10;
    haveTsarBomb++;
    document.getElementById("kolDin1").innerHTML = haveDinamit;
    document.getElementById("kolTB1").innerHTML = haveTsarBomb;
    document.getElementById("placeForTB").innerHTML = 15 - haveTsarBomb;
    document.getElementById("activateTsar").style.display = "block";
    if (progress == 90) {
      document.getElementById("goTree").style.display = "block";
    }
  }
}
//! Тут навигация
function second_screen() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("true-story").style.display = "block";
}
function garage_from_story() {
  document.getElementById("true-story").style.display = "none";
  document.getElementById("vibor-v-garage").style.display = "block";
}
function poisk_from_garage() {
  document.getElementById("vibor-v-garage").style.display = "none";
  document.getElementById("poisk-componentov").style.display = "block";
}
function craft_bomb_from_garage() {
  document.getElementById("vibor-v-garage").style.display = "none";
  document.getElementById("Craft-petarda-table").style.display = "block";
}
//! Тут перезаписываются компоненты + навигация
function garage_from_poisk() {
  document.getElementById("poisk-componentov").style.display = "none";
  document.getElementById("vibor-v-garage").style.display = "block";
  document.getElementById("kus2").innerHTML = haveKusochki;
  document.getElementById("ver2").innerHTML = haveVerevochki;
  document.getElementById("por2").innerHTML = havePorox;
  document.getElementById("kus3").innerHTML = haveKusochki;
  document.getElementById("ver3").innerHTML = haveVerevochki;
  document.getElementById("por3").innerHTML = havePorox;

  console.log("Данные обновлены: ", haveKusochki, haveVerevochki, havePorox);
}
//! Тут перезаписываются компоненты + навигация
function garage_bomb_from_craft() {
  document.getElementById("Craft-petarda-table").style.display = "none";
  document.getElementById("vibor-v-garage").style.display = "block";
  document.getElementById("kus1").innerHTML = haveKusochki;
  document.getElementById("ver1").innerHTML = haveVerevochki;
  document.getElementById("por1").innerHTML = havePorox;
  document.getElementById("kus3").innerHTML = haveKusochki;
  document.getElementById("ver3").innerHTML = haveVerevochki;
  document.getElementById("por3").innerHTML = havePorox;

  console.log("Данные обновлены: ", haveKusochki, haveVerevochki, havePorox);
}

setInterval(function BoomBla() {
  if (progress >= 10) {
    let x = Math.random() * 1000;
    if (x < 3 && x >= 1) {
      timeLoser();
    }
  }
}, 1000);
