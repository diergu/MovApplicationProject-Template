// Seleciona os botões com classe 'btn-popup'
const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    let section;

    if (target === 'quemsomos') {
      section = document.querySelector('.quemsomos');
    } else if (target === 'sobre') {
      section = document.querySelector('.sobreprojeto');
    } else if (target === 'home') {
      section = document.querySelector('.home');
    }


    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  });
});


// novo //
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

function activateSection(button) {
  navButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  sections.forEach(sec => sec.classList.remove('active'));

  let sectionId = button.id;

  switch(sectionId) {
    case 'toHome': sectionId = 'home'; break;
    case 'toQuemSomos': sectionId = 'quem-somos'; break;
    case 'toSobre': sectionId = 'sobre'; break;
  }

  document.getElementById(sectionId).classList.add('active');
}

activateSection(document.getElementById('toHome'));

navButtons.forEach(button => {
  button.addEventListener('click', () => activateSection(button));
});
