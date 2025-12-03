function login() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    // 🔐 USUÁRIO E SENHA DEFINIDOS POR VOCÊ
    const USER = "admin";
    const PASS = "admin";

    if (user === USER && pass === PASS) {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("dashboard-box").classList.remove("hidden");
    } else {
        erro.innerText = "Usuário ou senha incorretos";
    }
}
