var haslo = "BEZ PRACY NIE MA KOŁACZY";
var odgaduje = "";
var np = 0;
for (i=0; i<haslo.length ;i++){
    if (haslo.charAt(i) == " "){
        odgaduje = odgaduje + " ";
    }
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

function refresh(){
    document.getElementById("plansza").innerHTML =  odgaduje;
}

function niepoprawna(){
    if(np<9){
    np++;}
    document.getElementById("szubienica").innerHTML = "<div id=\"szubienica\"><img src=\"img/s" + np + ".jpg\"/></div>";
}

function sprawdz(litera){
    var wynik = "";
    var czy = 0;
    for(i=0; i<haslo.length; i++){
        if(litery[litera]==haslo.charAt(i)){
            wynik = wynik + litery[litera];
            czy = 1;
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
        niepoprawna();
    }
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