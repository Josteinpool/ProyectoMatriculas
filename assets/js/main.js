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

/* ======== CAMBIO DE PESTAÑAS EN EL HOME ======== */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Quitar clase activa de todas las pestañas
      tabs.forEach(t => t.classList.remove("active"));
      // Ocultar todas las secciones
      sections.forEach(s => (s.style.display = "none"));

      // Activar la pestaña seleccionada
      tab.classList.add("active");
      sections[index].style.display = "block";
    });
  });
});


// === Mostrar / ocultar campo de discapacidad ===
document.addEventListener("DOMContentLoaded", () => {
  const diagnostico = document.getElementById("discapacidad-diagnostico");
  const divDiscapacidad = document.getElementById("discapacidad-div");

  if (diagnostico && divDiscapacidad) {
    diagnostico.addEventListener("change", () => {
      const mostrar = diagnostico.value === "si";
      divDiscapacidad.style.display = mostrar ? "block" : "none";
      
      // Limpiar los campos si se oculta
      if (!mostrar) {
        document.getElementById("discapacidad").value = "";
        document.getElementById("certificado").value = "";
      }
    });
  }
});