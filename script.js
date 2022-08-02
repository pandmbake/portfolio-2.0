var b = document.getElementById('banner-middle')
var d = document.getElementById('banner-middle-add');
var x = document.getElementById('projects-column-left');
var y = document.getElementById('text-ghost');
var z = document.getElementById('ghost-buttons');
var a = document.getElementById('text-michelle');
var e = document.getElementById('michelle-buttons');
var f = document.getElementById('text-coins');
var g = document.getElementById('coin-buttons');
var h = document.getElementById('projects-column-middle');
var j = document.getElementById('projects-column-right');
var ghostie = document.getElementById('ghost');
var michelleB = document.getElementById('michelle');
var coiny = document.getElementById('coin');
var richmond = getElementById('richmond');
var artist = getElementById('michelle-bakeman-artist');

function change() {
    b.style.display = "block";
    }

function grow1() { 
    y.style.display = "block";
    x.style.height = "30em";
    z.style.display = "block";
    x.style.transition = "all 0.7s ease-in-out";
    x.style.backgroundColor = "rgb(107, 112, 112)";


    const reveal1 = setTimeout(revealGhost, 700);

    function revealGhost() {
    ghostie.style.display = "block";
}
}
    
function grow2() { 
    a.style.display = "block";
    h.style.height = "30em";
    e.style.display = "block";
    h.style.transition = "all 0.7s ease-in-out";
    h.style.backgroundColor = "rgb(107, 112, 112)";
    

    const reveal2 = setTimeout(revealMichelle, 700);

    function revealMichelle() {
    michelleB.style.display = "block";
}
}



function grow3() { 
    f.style.display = "block";
    j.style.height = "30em";
    g.style.display = "block";
    j.style.transition = "all 0.7s ease-in-out";
    j.style.backgroundColor = "rgb(107, 112, 112)";
    

    const reveal3 = setTimeout(revealCoin, 700);

    function revealCoin() {
    coiny.style.display = "block";
}
}
