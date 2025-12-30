const data = [
  {
    q: "Her şeyin başladığı tarih? (GG/AA/YYYY)",
    a: ["14012024"],
    poem: `O gün zaman adını unuttu
Kalbim ilk kez bu kadar sustu
Bir bakışınla başladı her şey
Hayat bana seni fısıldadı, uslu uslu`
  },
  {
    q: "İlk tanıştığımız yer neresiydi?",
    a: ["okul"],
    poem: `Bir yerdi işte, adı sıradan
Ama sen vardın tam ortasından
O günden sonra anladım
Bazı anlar mekân tutar insandan`
  },
  {
    q: "Bana aldığın ilk hediye neydi?",
    a: ["tişört", "tisort"],
    poem: `Bir tişörttü belki dışardan bakınca
Ama içim titredi dokununca
Bazı hediyeler giyilmez
Kalpte durur, çıkmaz bir daha`
  },
  {
    q: "Bana en çok ettiğin iltifat neydi?",
    a: ["yavrum"],
    poem: `Bir kelime dedin, dünya durdu
İçimde kocaman bir yer kurdu
Herkes sever, herkes söyler
Ama “yavrum” bana yuva oldu`
  },
  {
    q: "Bu dünyada en çok sevdiğim şey nedir?",
    a: ["sen", "seni", "sensin"],
    poem: `C anım dedim içimden, sesimden önce
E ellerin değdi kalbime, sessizce
M meğer sevgi böyleymiş, yormadan
R rüyalarım bile seni sorar olmadan
E en çok sevdiğim şey bu dünyada sensin
M madem kader yazdı, ben hep senim, sen bensin
ÖMRÜM ÖMRÜN KADAR OLSUN , 
			NİCE YENİ YILLARA YAVRUM,
						MADEM KADER YAZDI BEN DE SENİ YAZDIM KALBİME`
  }
];

let i = 0;
const music = document.getElementById("bg-music");
const tracks = ["intro.mp3","1.mp3","2.mp3","3.mp3","4.mp3","final.mp3"];

function play(n){
  music.src = tracks[n];
  music.volume = 0.4;
  music.play();
}

window.onload = () => {
  play(0);
  setTimeout(() => document.getElementById("boot").style.display="none", 2800);
  render();
};

function render(){
  document.getElementById("question").innerText = data[i].q;
  document.getElementById("progress").innerText = `${i+1} / 5`;
}

function check(){
  const val = document.getElementById("answer").value.trim().toLowerCase();
  if(data[i].a.includes(val)){
    play(i+1);
    document.getElementById("stage").classList.add("hidden");
    document.getElementById("poem").classList.remove("hidden");
    document.getElementById("poem-text").innerText = data[i].poem;
  } else {
    document.getElementById("msg").innerText = "Bir daha düşün…";
  }
}

function next(){
  i++;
  if(i < data.length){
    document.getElementById("answer").value = "";
    document.getElementById("msg").innerText = "";
    document.getElementById("poem").classList.add("hidden");
    document.getElementById("stage").classList.remove("hidden");
    render();
  } else {
    play(5);
    document.body.innerHTML = `
      <div style="text-align:center; padding:40px">
        <h1 style="color:gold">GÖREV TAMAMLANDI</h1>
        <p>Bu link burada bitti.<br>Ama ben seninle bitmeyi düşünmüyorum.</p>
      </div>`;
  }
}
