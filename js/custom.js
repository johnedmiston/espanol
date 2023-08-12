(function ($) {
  'use strict';

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function () {
    jQuery('.counter-number').countTo();
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate(
        {
          scrollTop: totalScroll,
        },
        300,
      );
    }
  });
})(window.jQuery);

// donate

// Função para mostrar o impacto da doação
function showImpact(option) {
  // Remove as classes dos elementos previamente selecionados
  document
    .querySelectorAll('.bi.icon-animate, .donation-option-selected')
    .forEach((el) =>
      el.classList.remove('icon-animate', 'donation-option-selected'),
    );

  // Adiciona as classes ao elemento selecionado
  document.getElementById('icon-' + option).classList.add('icon-animate');
  document
    .querySelector(`div[onclick="showImpact('${option}')"]`)
    .classList.add('donation-option-selected');

  // Seleciona o input de rádio correspondente à opção e o marca como selecionado
  document.getElementById(option).checked = true;

  // Define e atualiza o texto de impacto no DOM
  const impactTexts = {
    option1:
      'Con una donación de $10, estás contribuyendo para proporcionar materiales de estudio esenciales a pastores, plantadores de iglesias, evangelistas y misioneros en más de 50 países.',
    option2:
      'Con una donación de $25, estás apoyando la formación de líderes carismáticos y pentecostales, permitiendo la compra de materiales escolares y recursos para cinco estudiantes.',
    option3:
      "Una donación de $35 puede financiar la educación de dos niños en comunidades remotas, permitiéndoles acceder a un 'colegio Bíblico de bajo costo' con materiales basados en la Santa Biblia.",
  };
  document.getElementById('donation-impact').innerHTML =
    impactTexts[option] || '';
}

// Executa a função showImpact com a opção inicial quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => showImpact('option1'));

function celebrate() {
  const container = document.getElementById('confetti-container');
  container.style.display = 'block';
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];

  // Função auxiliar para criar elementos (confetes e balões)
  function createElements(
    count,
    className,
    animationName,
    animationDurationBase,
  ) {
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = className;
      element.style.left = Math.random() * 100 + 'vw';
      element.style.color = colors[Math.floor(Math.random() * colors.length)];
      element.style.animation = `${animationName} ${
        animationDurationBase + Math.random() * animationDurationBase
      }s linear ${Math.random() * 5}s forwards`;
      container.appendChild(element);
    }
  }

  // Cria confetes (1000 confetes)
  createElements(1000, 'confetti', 'confetti-animation', 2);

  // Cria balões (50 balões)
  createElements(50, 'balloon', 'balloon-animation', 5);

  // Limpa os confetes e balões após a animação
  setTimeout(() => {
    container.innerHTML = '';
    container.style.display = 'none';
  }, 3000);
}

// document.addEventListener('DOMContentLoaded', () => {
//   const exitPopup = document.getElementById('exitPopup');
//   const closeExitPopup = document.getElementById('closeExitPopup');

//   // Função para fechar o pop-up
//   closeExitPopup.addEventListener('click', () => {
//     exitPopup.style.display = 'none';
//   });

//   // Função para exibir o pop-up após 15 segundos
//   setTimeout(() => {
//     exitPopup.style.display = 'block';
//   }, 30000); // 15000 milissegundos equivalem a 15 segundos
// });
