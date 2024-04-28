function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').addEventListener('click', tocaSomPom);
document.querySelector('.tecla_clap').addEventListener('click', tocaSomClap);
document.querySelector('.tecla_tim').addEventListener('click', tocaSomTim);
document.querySelector('.tecla_puff').addEventListener('click', tocaSomPuff);
document.querySelector('.tecla_splash').addEventListener('click', tocaSomSplash);
document.querySelector('.tecla_toim').addEventListener('click', tocaSomToim);
document.querySelector('.tecla_psh').addEventListener('click', tocaSomPsh);
document.querySelector('.tecla_tic').addEventListener('click', tocaSomTic);
document.querySelector('.tecla_tom').addEventListener('click', tocaSomTom);