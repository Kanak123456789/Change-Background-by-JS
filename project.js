const color=["red","yellow","green","blue","cyan","pink","orange","purple","black","white"];
function change(){
          const knk = parseInt(Math.random()*color.length)
          document.body.style.background = color[knk];
}