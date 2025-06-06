// Troca de temas
        document.querySelectorAll(".theme-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.body.className = btn.dataset.theme;
            });
        });
        //=============================formulario=======================================//

        document.getElementById("formulario").addEventListener("submit", function (e) {
            e.preventDefault(); 

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            console.log("Nome:", nome);
            console.log("Email:", email);
        });
