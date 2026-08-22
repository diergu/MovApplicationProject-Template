// BUSCAR ELEMENTOS
const btnAbrir = document.getElementById('btncadastro'); // botão que abre o modal
const telaCadastro = document.getElementById('tcadastrologin'); // modal
const formCadastro = document.querySelector('.cntcds'); // form cadastro
const formLogin = document.querySelector('.cntlgn');   // form login
const linkLogin = document.getElementById('link-login'); // link "Faça login"
const linkCadastro = document.getElementById('link-cadastro'); // link "Faça cadastro"
const fecharCadastro = document.querySelector('.fecharcadastro'); // X cadastro
const fecharLogin = document.querySelector('.fecharlogin');       // X login

//ABRIR
btnAbrir.addEventListener('click', () => {
    telaCadastro.style.display = 'flex';
    telaCadastro.classList.remove('login-ativo');
});

//FECHAR  PELOS BOTÕES X
[fecharCadastro, fecharLogin].forEach(btn => {
    btn.addEventListener('click', () => {
        telaCadastro.style.display = 'none';
    });
});


//  TROCAR ENTRE LOGIN E CADASTRO
// Alterna para login
linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    telaCadastro.classList.add('login-ativo');
});

// Alterna para cadastro
linkCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    telaCadastro.classList.remove('login-ativo');
});


//CADASTRO DE USUÁRIOs
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const documento = document.getElementById('cnpj').value.trim();
  const email = document.getElementById('email-cadastro').value.trim();
  const senha = document.getElementById('senha-cadastro').value.trim();
  const confirmar = document.getElementById('confirmesenha').value.trim();

  //verificar se tudo foi preenchido
  if (!documento && !email && !senha && !confirmar) {
    alert('Nem todos os campos foram preenchidos!');
    return;
  }

  if (!documento) {
    alert('Campo "CNPJ ou CPF" é obrigatório!');
    return;
  }
  if (!email) {
    alert('Campo "E-mail" é obrigatório!');
    return;
  }
  if (!senha) {
    alert('Campo "Senha" é obrigatório!');
    return;
  }
  if (!confirmar) {
    alert('Campo "Confirme a Senha" é obrigatório!');
    return;
  }

  //CPF e CNPJ
  const somenteNumeros = documento.replace(/\D/g, '');
  let tipoDocumento = '';

  if (somenteNumeros.length === 11) {
    tipoDocumento = 'CPF';
    if (!validarCPF(somenteNumeros)) {
      alert('CPF inválido!');
      return;
    }
  } else if (somenteNumeros.length === 14) {
    tipoDocumento = 'CNPJ';
    if (!validarCNPJ(somenteNumeros)) {
      alert('CNPJ inválido!');
      return;
    }
  } else {
    alert('Digite um CPF (11 dígitos) ou CNPJ (14 dígitos) válido!');
    return;
  }

 //senha batendo
  if (senha !== confirmar) {
    alert('As senhas não conferem!');
    return;
  }

  //se já possui cadastro
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const existe = usuarios.find(u => u.email === email);
  if (existe) {
    alert('Este e-mail já está cadastrado!');
    return;
  }

  //salva o usuário
  const novoUsuario = { tipoDocumento, documento: somenteNumeros, email, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert(`${tipoDocumento} cadastrado com sucesso!`);

  formCadastro.reset();
  telaCadastro.classList.add('login-ativo');
});

//VALIDAR CPF
function validarCPF(cpf) {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}


//VALIDAR CNPJ
function validarCNPJ(cnpj) {
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return resultado == digitos.charAt(1);
}

//LOGIN DO USUÁRIO

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailLogin = document.getElementById('email-login').value.trim();
  const senhaLogin = document.getElementById('senha-login').value.trim();

  if (!emailLogin || !senhaLogin) {
    alert('Preencha todos os campos!');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioEncontrado = usuarios.find(
    u => u.email === emailLogin && u.senha === senhaLogin
  );

  if (!usuarioEncontrado) {
    alert('E-mail ou senha incorretos!');
    return;
  }

  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

  alert(`Bem-vindo, ${usuarioEncontrado.email}!`);

  // Redireciona para o pagina principal.html
  window.location.href = "Pagina-Principal/principal.html";
});
