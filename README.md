# Ação Dia do Sol — "Quantos Sóis Você Já Viveu?"

Landing page interativa promocional para o **Assaí Atacadista**, inspirada no formato Spotify Wrapped.  
O usuário descobre quantos "sóis" (dias) já viveu e compartilha o resultado nas redes sociais.

---

## Conceito

> "Você não tem X anos… você já viveu X sóis."

O usuário insere sua data de nascimento, é classificado em uma das 6 **tribos solares** por faixa etária, recebe fun facts personalizados e pode compartilhar ou salvar a imagem gerada.

---

## Estrutura de arquivos

```
promo_dia_do_sol/
├── promo_dia_do_sol.info          # Definição do tema Drupal 7
├── template.php                   # Preprocessors Drupal (remove breadcrumb, tabs, sidebars)
├── templates/
│   └── page--promo-dia-do-sol.tpl.php   # Template Drupal com <?php print $styles/$scripts ?>
├── css/
│   └── style.css                  # Estilos mobile-first, identidade visual Assaí
├── js/
│   ├── html2canvas.min.js         # Biblioteca para geração de imagem (v1.4.1)
│   └── app.js                     # Lógica principal: cálculo, tribos, share
├── images/                        # Assets visuais (logos, ícones — a incluir)
├── index.html                     # Versão standalone para testes sem Drupal
└── README.md
```

---

## Stack

- **HTML / CSS / JS puro** (sem frameworks, sem npm)
- Compatível com **Drupal 7** como subtema
- Única dependência externa: [html2canvas v1.4.1](https://html2canvas.hertzen.com/) (incluída localmente)

---

## Como testar localmente

Abra o arquivo `index.html` direto no navegador. Não precisa de servidor.

> Para testar o botão "Compartilhar" (Web Share API), é necessário acessar via HTTPS em um dispositivo mobile ou usar o DevTools do Chrome com emulação de dispositivo.

---

## Fluxo da experiência

1. **Tela Intro** — Título + formulário (nome opcional, data de nascimento obrigatória)
2. **Tela Loading** — Animação de sol girando (~2 segundos)
3. **Tela Resultado** — Número de sóis vividos + nome da tribo
4. **Tela Fun Facts** — Curiosidades baseadas na faixa etária
5. **Tela Branding** — "O Assaí já viveu X sóis com você" + botões de compartilhar/salvar

**Tempo total estimado para o usuário: < 30 segundos**

---

## Sistema de tribos

| Faixa etária | Tribo            | Tom                      |
|--------------|------------------|--------------------------|
| 0–12         | Sol Nascente     | Leve / divertido         |
| 13–17        | Sol em Ascensão  | Jovem                    |
| 18–25        | Sol Raiz         | Memes e cultura pop      |
| 26–35        | Sol Experiente   | Nostalgia + trends       |
| 36–50        | Sol de Responsa  | Família + conquistas     |
| 50+          | Sol Lendário     | História + nostalgia     |

Cada tribo possui 4 fun facts pré-definidos em `js/app.js` (objeto `TRIBOS`).

---

## Geração de imagem

- Utiliza **html2canvas** para converter os cards HTML em imagem PNG
- Renderiza em escala 2x para boa qualidade em telas retina
- A imagem gerada tem formato vertical (pensado para stories)

---

## Compartilhamento

| Canal             | Método                                      |
|-------------------|---------------------------------------------|
| Mobile (geral)    | **Web Share API** — abre menu nativo do OS   |
| Fallback          | Download direto do PNG                       |
| Instagram Stories | Não há deep link web; usuário salva e posta  |

---

## Integração com Drupal 7

### Instalação

1. Copiar a pasta `promo_dia_do_sol` para `sites/all/themes/`
2. Ativar o tema em **admin/appearance** (ou aplicá-lo só na rota desejada)
3. Criar uma página/node na rota desejada (ex.: `/promo-dia-do-sol`)

### Como funciona o template

- O arquivo `page--promo-dia-do-sol.tpl.php` é automaticamente usado pelo Drupal para a rota `/promo-dia-do-sol`
- O `template.php` remove breadcrumb, tabs e action links para manter a LP limpa
- O `.info` registra os CSS e JS automaticamente

### Ajuste necessário

No `promo_dia_do_sol.info`, descomentar e ajustar a linha `base theme` para herdar do tema principal do site, se necessário:

```ini
; base theme = TEMA_BASE_AQUI
```

---

## Assets pendentes

- [ ] Logo Assaí (versão colorida para tela intro)
- [ ] Logo Assaí (versão branca para cards de resultado)
- [ ] Imagem Open Graph para compartilhamento em redes
- [ ] Templates visuais finais por tribo (se houver variação de design)

---

## Decisões de projeto

| Decisão                     | Status                                |
|-----------------------------|---------------------------------------|
| Captura de leads (e-mail)   | **Não** — compliance/LGPD do cliente  |
| Número de telas por usuário | 3 cards compartilháveis + intro       |
| Número de tribos            | 6                                     |
| Personalização com nome     | Sim, campo opcional                   |
| Checkbox LGPD               | Não necessário (sem coleta de dados)  |

---

## Próximos passos

1. Receber e integrar os assets visuais (logos, backgrounds por tribo)
2. Validar copy dos fun facts com a equipe de marketing
3. Testar geração de imagem em diferentes dispositivos mobile
4. Integrar no Drupal 7 de produção
5. Testar fluxo completo no ambiente de staging
