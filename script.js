function mudarSkill(skill) {

            let titulo = document.getElementById("titulo")
            let descricao = document.getElementById("descricao")
            let video = document.getElementById("video")

            if (skill == "passiva") {

                titulo.innerHTML = "A TEMPESTADE IMPLACÁVEL"

                descricao.innerHTML =
                    "habilidades e ataques de Volibear concedem uma carga de A Tempestade Implacável por 6 segundos, renovando ao causar dano subsequente e acumulando até 5 vezes. Em cada carga, Volibear ganha velocidade de ataque.No máximo de cargas, os ataques básicos de Volibear causam dano mágico adicional ao alvo e aos inimigos próximos."

                video.src =
                    "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_P1.webm"
            }

            if (skill == "q") {

                titulo.innerHTML = "ESMAGAMENTO TROVEJANTE"

                descricao.innerHTML =
                    "ATIVA: Volibear se fortalece, tornando-se fantasma e ganhando velocidade de movimento por 4 segundos, dobrando enquanto corre em direção a inimigos visíveis. Durante esse período, o próximo ataque básico de Volibear é modificado para avançar rapidamente até o alvo, causando dano físico adicional e atordoando-o por 1 segundo. Se Volibear ficar imobilizado ou impedido de usar ações durante o Esmagamento Trovejante, o efeito termina prematuramente e o tempo de recarga é reiniciado."

                video.src =
                    "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_Q1.webm"
            }

            if (skill == "w") {

                titulo.innerHTML = "FÚRIA SELVAGEM"

                descricao.innerHTML =
                    "ATIVA: Volibear danifica o alvo com as garras, causando dano físico, aplicando efeitos ao contato e marcando o alvo por 8 segundos.<br>MORDIDA: Caso o alvo já esteja marcado, Volibear morde o alvo causando dano adicional e curando-se com base na vida perdida."

                video.src =
                    "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_W1.webm"
            }

            if (skill == "e") {

                titulo.innerHTML = "DIVISOR DE CÉUS"

                descricao.innerHTML =
                    "ATIVA: Volibear invoca um relâmpago na área-alvo que atinge após 2 segundos, causando dano mágico aos inimigos atingidos e desacelerando-os. Se Volibear estiver dentro da área quando o relâmpago cair, ele recebe um escudo por alguns segundos. O dano básico mágico é aumentado contra monstros e limitado contra tropas."

                video.src =
                    "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_E1.webm"
            }

            if (skill == "r") {

                titulo.innerHTML = "EMISSÁRIO DA TEMPESTADE"

                descricao.innerHTML =
                    "ATIVA: Volibear salta até o local-alvo após 2 segundos, causando dano físico aos inimigos próximos ao aterrissar, ganhando vida adicional e desacelerando inimigos próximos.<br>Durante a ultimate: Volibear ganha alcance de ataque, tamanho aumentado, e seus ataques básicos causam dano adicional. Volibear também desativa torres inimigas próximas ao aterrissar por alguns segundos."

                video.src =
                    "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_R1.webm"
            }

            video.load()
        }