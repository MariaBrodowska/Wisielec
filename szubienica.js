var haslo;
var odgaduje = "";
var np = 0;
function start(kategoria){
    var numer = Math.floor(Math.random()*21);
    switch(kategoria){
        case 'przyslowia':
            haslo = p[numer];
            break;
        case 'sport':
            haslo = s[numer];
            break;
        case 'filmy':
            haslo = f[numer];
            break;
        case 'książki':
            haslo = k[numer];
            break;
        case 'gry':
            haslo = g[numer];
            break;
        default:
            haslo = z[numer];
            break;
    }
    //alert(haslo);
    haslo = haslo.toUpperCase();
    for (i=0; i<haslo.length ;i++){
        if (haslo.charAt(i) == " "){
            odgaduje = odgaduje + " ";
        }
        else if(haslo.charAt(i)==",") odgaduje = odgaduje + ",";
        else if(haslo.charAt(i)==":") odgaduje = odgaduje + ":";
        else odgaduje = odgaduje + "-";
    }
    yes.play();
    var div = "";
    for (i=0; i<35; i++){
        div = div + "<div id=\"" + i + "\" class=\"litera\" onclick=\"sprawdz("+i+");\">" + litery[i] + "</div>";
        if ((i+1)%7 == 0){
            div = div + "<div style=\"clear: both;\"></div>";
        }
    }
    document.getElementById("szubienica").innerHTML = "<div id=\"szubienica\"><img src=\"img/s0.jpg\"/></div>";
    document.getElementById("alfabet").innerHTML = div;
    refresh();
    np = 0;
}
var win = new Audio("win.mp3");
var loss = new Audio("gameover.mp3");
var yes = new Audio("yes.mp3");
var no = new Audio("no.mp3");
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
        loss.play();
        document.getElementById("alfabet").innerHTML = "Przegrana :c<br/><br/>Prawidłowe hasło:<br/>"+haslo+"<br/><br/>Kliknij aby zagrać ponownie<br/><br/><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
    }
}

function czyWygrana(){
    if (haslo==odgaduje){
        win.play();
        document.getElementById("alfabet").innerHTML = "Podano prawidłowe hasło!<br/><br/>Kliknij aby zagrać ponownie<br/><br/></br><span class='reset' onclick='location.reload(),yes.play()'>JESZCZE RAZ?</span>";
    }
}

function sprawdz(litera){
    var wynik = "";
    var czy = false;
    for(i=0; i<haslo.length; i++){
        if(litery[litera]==haslo.charAt(i)){
            wynik = wynik + litery[litera];
            czy = true;
            yes.play();
        }
        else if(odgaduje.charAt(i)!="-") wynik = wynik + odgaduje.charAt(i);
        else {
            wynik = wynik + "-";
        }
    }
    odgaduje = wynik;
    if(czy) {
        document.getElementById(litera).innerHTML =  "<div class=\"pLitera\" >" + litery[litera] + "</div>";
    }
    else {
        no.play();
        document.getElementById(litera).innerHTML =  "<div  class=\"npLitera\" >" + litery[litera] + "</div>";
        document.getElementById(litera).setAttribute("onclick",";");
        niepoprawna();
    }
    refresh();
    czyWygrana();
}

//window.onload = wybor;