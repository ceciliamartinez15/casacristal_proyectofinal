document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');

  function validarEmail(event) {
    const emailValue = emailInput.value.trim();
    if (!emailValue.includes('@')) {
      event.preventDefault();
      alert('Por favor, ingresa un correo electrónico válido que contenga el símbolo "@"');
      emailInput.focus();
    }
  }

  form.addEventListener('submit', validarEmail);
});
document.addEventListener("DOMContentLoaded", function () {
    // Encuentra todos los labels cuyo input es requerido
    const labels = document.querySelectorAll("form label");

    labels.forEach(label => {
        const inputId = label.getAttribute("for");
        const input = document.getElementById(inputId);

        if (input && input.hasAttribute("required")) {
            const asterisk = document.createElement("span");
            asterisk.textContent = " *";
            asterisk.style.color = "red";
            asterisk.classList.add("required");
            label.appendChild(asterisk);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
  // Tabs funcionales
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover active de botones y contenido
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      // Agregar active al botón clickeado y al contenido relacionado
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Botones reservar: alerta simple
  const reservarBtns = document.querySelectorAll('.btn.btn-small');
  reservarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('¡Gracias por tu interés en reservar! Pronto nos pondremos en contacto.');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openMapOptions");
    const modal = document.getElementById("mapOptions");
    const closeBtn = document.getElementById("closeMapOptions");
    const googleBtn = document.getElementById("openInGoogle");
    const wazeBtn = document.getElementById("openInWaze");

    // Enlaces exactos
    googleBtn.href = "https://maps.app.goo.gl/qk8Rv9rsSsN94ehM7";
    wazeBtn.href = "https://waze.com/ul?q=Cerro%20Verde,%20Santa%20Ana,%20El%20Salvador";

    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


