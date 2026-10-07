async function entrar() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

console.log("JS rodando no index.html!");

const formulario = document.querySelector("#form-criar-conta");

if (formulario) {
  formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault(); // não deixa a página recarregar

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome  = document.getElementById("nome").value;
    const cep   = document.getElementById("cep").value;

    try {
      const resposta = await fetch("http://localhost:3000/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha, nome, cep })
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        alert("Conta criada com sucesso!");
        window.location.href = "index.html";
      } else {
        alert(resultado.mensagem);
      }
    } catch (erro) {
      console.error(erro);
      alert("Erro ao conectar com o servidor.");
    }
  });
}
    // Verifica se os campos estão vazios
    if (email === "" || senha === "") {
        alert("Preencha o e-mail e a senha!");
        return;
    }

    try {

        const resposta = await fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        const dados = await resposta.json();

        // Se a conta existir
        if (dados.existe) {

            alert("Conta conectada!");

            window.location.href = "index.html";

        } else {

            alert("Conta não existe! Crie uma conta.");

            window.location.href = "criar_conta.html";
        }

    } catch (erro) {

        console.error("ERRO:", erro);

        alert("Erro ao conectar com o servidor.");
    }
}

