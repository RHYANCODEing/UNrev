function abrirAula(id, titulo) {
            document.getElementById('iframeAula').src = `https://player-vz-b2693cb5-fdb.tv.pandavideo.com.br/embed/?v=${id}`;
            document.getElementById('tituloAula').innerText = titulo;
        }
function darkMode(){
    var body = document.body;
    body.classList.toggle("dark-mode");
}