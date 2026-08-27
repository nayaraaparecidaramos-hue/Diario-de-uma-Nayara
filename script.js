    const botoes = document.querySelectorAll(".like-btn");

        botoes.forEach(function (botao) {
            let curtiu = false;

            botao.addEventListener("click", function () {
                let texto = botao.querySelector("span");

                let totalAtual = parseInt(texto.textContent);

                if (curtiu === false) {
                    texto.textContent = totalAtual + 1;
                    curtiu = true;
                } else {
                    texto.textContent = totalAtual - 1;
                    curtiu = false;
                }
            });
        });