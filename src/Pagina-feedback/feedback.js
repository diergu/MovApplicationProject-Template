const form = document.getElementById("formFeedback");
const lista = document.getElementById("listaFeedbacks");
const msg = document.getElementById("msg");

let feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");

function atualizarLista() {
  lista.innerHTML = feedbacks
    .map(f => `
      <div class="feedback-item">
        ${f.nota ? `<strong>Nota: ${f.nota} ⭐</strong><br>` : ""}
        ${f.texto}
      </div>
    `)
    .join("");
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const texto = document.getElementById("comentario").value;
  const nota = document.getElementById("nota").value;

  feedbacks.push({ texto, nota });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  form.reset();
  atualizarLista();

  msg.textContent =
    " Obrigada pelo seu feedback! A sua opinião nos ajuda a evoluir e transformar ainda mais vidas através da doação. 🌟";

  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 4000);
});

atualizarLista();
