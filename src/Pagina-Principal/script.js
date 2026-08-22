const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

function activateSection(button) {
  navButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  sections.forEach(sec => sec.classList.remove('active'));

  let sectionId = button.id;

  switch(sectionId) {
    case 'toDoações': sectionId = 'doacoes'; break;
    case 'toFeedback': sectionId = 'feedback'; break;
    case 'toBusca': sectionId = 'quero-buscar'; break;
    case 'toHistorico': sectionId = 'historico'; break;
    case 'toChat': sectionId = 'chat'; break;
    case 'toCadastrar': sectionId = 'cadastrar-item'; break
  }

  document.getElementById(sectionId).classList.add('active');
}

activateSection(document.getElementById('toDoações'));

navButtons.forEach(button => {
  button.addEventListener('click', () => activateSection(button));
});
