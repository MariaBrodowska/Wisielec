var t = new Array(21);
t[0] = "BEZ PRACY NIE MA KOŁACZY";
t[1] = "broda mędrcem nie czyni";
t[2] = "Im dalej w las, tym więcej drzew";
t[3] = "Nosił wilk razy kilka, ponieśli i wilka";
t[4] = "Biednemu zawsze wiatr w oczy";
t[5] = "wilk syty i owca cała";
t[6] = "Co ma wisieć, nie utonie";
t[7] = "człowiek strzela, Pan Bóg kule nosi";
t[8] = "Darowanemu koniowi w zęby się nie zagląda";
t[9] = "człowiek człowiekowi wilkiem";
t[10] = "zapomniał wół, jak cielęciem był";
t[11] = "Co nagle, to po diable";
t[12] = "czas leczy rany";
t[13] = "uderz w stół, a nożyce się odezwą";
t[14] = "Serce nie sługa";
t[15] = "Na bezrybiu i rak ryba";
t[16] = "jedna jaskółka wiosny nie czyni";
t[17] = "Lepszy wróbel w garści niż gołąb na dachu";
t[18] = "Fortuna kołem się toczy";
t[19] = "Co z oczu, to z serca";
t[20] = "przyjaciół trzymaj blisko, a wrogów jeszcze bliżej";

var numer = Math.floor(Math.random()*21);
var haslo = t[numer];
haslo = haslo.toUpperCase();
var odgaduje = "";
var np = 0;
for (i=0; i<haslo.length ;i++){
    if (haslo.charAt(i) == " "){
        odgaduje = odgaduje + " ";
    }
    else if(haslo.charAt(i)==",") odgaduje = odgaduje + ",";
    else odgaduje = odgaduje + "-";
}
var litery = new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ż";
litery[34]="Ź";
var zaznaczone = new Array(35);
for (i=0;i<35;i++){
    zaznaczone[i]=false;
}

function refresh(){
    document.getElementById("plansza").innerHTML =  odgaduje;
}

function niepoprawna(){
    if(np<9){
    np++;
    document.getElementById("szubienica").innerHTML = "<div id=\"szubienica\"><img src=\"img/s" + np + ".jpg\"/></div>";
    }
    else{
        document.getElementById("alfabet").innerHTML = "Przegrana :c<br/><br/>Prawidłowe hasło:<br/>"+haslo+"<br/><br/>Kliknij aby zagrać ponownie<br/><br/><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
    }
}

function czyWygrana(){
    if (haslo==odgaduje){
        document.getElementById("alfabet").innerHTML = "Podano prawidłowe hasło!<br/><br/>Kliknij aby zagrać ponownie<br/><br/></br><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
    }
}

function sprawdz(litera){
    var wynik = "";
    var czy = false;
    for(i=0; i<haslo.length; i++){
        if(litery[litera]==haslo.charAt(i)){
            wynik = wynik + litery[litera];
            czy = true;
        }
        else if(odgaduje.charAt(i)!="-") wynik = wynik + odgaduje.charAt(i);
        else {
            wynik = wynik + "-";
        }
    }
    odgaduje = wynik;
    refresh();
    if(czy) document.getElementById(litera).innerHTML =  "<div class=\"pLitera\" >" + litery[litera] + "</div>";
    else {
        document.getElementById(litera).innerHTML =  "<div  class=\"npLitera\" >" + litery[litera] + "</div>";
        document.getElementById(litera).setAttribute("onclick",";");
        niepoprawna();
    }
    czyWygrana();
}

function start(){
    var div = "";
    for (i=0; i<35; i++){
        div = div + "<div id=\"" + i + "\" class=\"litera\" onclick=\"sprawdz("+i+");\">" + litery[i] + "</div>";
        if ((i+1)%7 == 0){
            div = div + "<div style=\"clear: both;\"></div/>";
        }
    }
    document.getElementById("alfabet").innerHTML = div;
    refresh();
    np = 0;
    sprawdz("O");
}

window.onload = start;