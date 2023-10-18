const pw1 = document.getElementById("password1");
const pw2 = document.getElementById("password2");
const texto = document.getElementById("pedrosaurio");
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        pw2.addEventListener("input", (event) => {
            if ((pw2.value != pw1.value) || (!pw1.checkValidity())) {
              pw2.setCustomValidity(' Las contraseñas deben de ser iguales');
            }
            else {
              pw2.setCustomValidity('');
            }
          })

        form.classList.add('was-validated')
      }, false)
    })
  })()
  
document.addEventListener("DOMContentLoaded", function() {
    var checkboxTerminos = document.getElementById("terminos");
    var textoExplicativo = document.getElementById("textoExplicativo");

    checkboxTerminos.addEventListener("change", function() {
        var botonTerminos = document.querySelector('.btn-link');

        if (checkboxTerminos.checked) {
            botonTerminos.classList.remove("text-danger");
            textoExplicativo.style.display = "none";
        } else {
            botonTerminos.classList.add("text-danger"); 
            textoExplicativo.style.display = "inline";
        }
    });
});