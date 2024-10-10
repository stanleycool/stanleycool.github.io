const _TEMPLATEheader = document.createElement("template");
const _TEMPLATEfonts = document.createElement("template");
const _TEMPLATEfooter = document.createElement("template");

_TEMPLATEheader.innerHTML = `<header>
        <a href="/" id="headerlink">
            <img id="headerlogo" src="/files/logo.png" />
            <img id="headertitle" src="/files/title.png" />
        </a>
        <div style="flex-grow: 1"></div>
        <div id="navbar">
            <a href="info" class="navbari" id="navbarinfo">INFO</a>
            <a href="sluzby" class="navbari" id="navbarsluzby">SLU&Zcaron;BY</a>
            <a href="galeria" class="navbari" id="navbargaleria">GAL&Eacute;RIA</a>
            <a href="kontakt" class="navbari" id="navbarkontakt">KONTAKT</a>
        </div>
    </header>`;

_TEMPLATEfonts.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
`;

_TEMPLATEfooter = `
`;