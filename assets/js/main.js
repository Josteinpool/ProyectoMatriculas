document.getElementById("registroForm")?.addEventListener("submit", function(e) {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (pass !== confirm) {
    e.preventDefault();
    alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
  } else {
    alert("Registro exitoso (más adelante se conectará con la base de datos).");
  }
});