/******* configuraçoes do slider *******/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},10000)

function nextImage()
{
    count++;
    if(count>2)
    {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


/******* configuraçoes das caixas de principais duvidas *******/


document.querySelectorAll('.duvida').forEach((duvida) => {
    duvida.addEventListener('click', function () {
        const resposta = this.querySelector('p'); // Seleciona o `<p>` dentro de `.duvida`
        const setaBaixo = this.querySelector('svg:not(.seta_cima)'); // Seta para baixo
        const setaCima = this.querySelector('.seta_cima'); // Seta para cima

        // Verifica se a resposta está visível
        const isVisible = resposta.style.display === 'block';

        // Fecha todas as respostas e reseta os ícones
        document.querySelectorAll('.duvida p').forEach((p) => (p.style.display = 'none'));
        document.querySelectorAll('.duvida svg').forEach((icon) => {
            icon.style.display = 'none'; // Esconde todas as setas
        });

        // Alterna a exibição da resposta atual
        resposta.style.display = isVisible ? 'none' : 'block';

        // Altera as setas
        if (!isVisible) {
            setaBaixo.style.display = 'none'; // Seta para baixo some
            setaCima.style.display = 'block'; // Seta para cima aparece
        } else {
            setaBaixo.style.display = 'block'; // Seta para baixo aparece
            setaCima.style.display = 'none'; // Seta para cima some
        }
    });
});


/******* scroll de navegação *******/

function scrollToElement(elementId) {
    // Caso o ID seja 'titulo_tutorial', rola até o topo da página
    if (elementId === 'titulo_tutorial') {
      window.scrollTo({
        top: 0, // Topo da página
        behavior: 'smooth' // Rolagem suave
      });
    } else {
      // Caso contrário, rola até o elemento alvo
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Rolagem suave
          block: "start"      // Alinha o elemento no topo da tela
        });
  
        // Após a rolagem, aplica um deslocamento extra de 5rem
        setTimeout(() => {
          window.scrollBy({
            top: -115, // Desloca para cima 5rem (50px)
            behavior: 'smooth' // Rolagem suave para o deslocamento
          });
        }); 
      }
    }
  }

/******* muda a cor da navegação quando clica *******/

