import('html2canvas').then(html2canvas => {
    html2canvas.default(document.body).then(canvas => 
      document.body.appendChild(canvas)
    )
  }).catch(e => {console("load failed")})
var canvas, ctx, ALTURA, LARGURA, fames = 0;

function clique(event){
    alert("clicou")
};

//function clique(){};

function inicial(){
    ALTURA = window.innerHeight,
    LARGURA = window.innerWidth

}

if (LARGURA >= 500){
    LARGURA = 600;
    ALTURA = 600;
};

canvas = document.createElement("canvas");
canvas.width = LARGURA;
canvas.height = ALTURA;
canvas.style.border ="1px solid #000000";

ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
document.addEventListener("mousedown", clique);

function roda(){}

function atualiza(){}
function desenhada(){}

inicial();