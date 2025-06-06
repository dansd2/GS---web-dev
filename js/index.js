// Troca de temas
        document.querySelectorAll(".theme-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.body.className = btn.dataset.theme;
            });
        });