function fazerLogin(event){
    event.preventDefault();
    const usuario = document.getElementById("username").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if(usuario === "root" && senha === "admin"){
        window.location.href = "dashboard.html";
    }else{
        alert("Credencias inválidas. Tente novamente.")
    }
}

document.getElementById("loginForm").addEventListener("submit", fazerLogin);