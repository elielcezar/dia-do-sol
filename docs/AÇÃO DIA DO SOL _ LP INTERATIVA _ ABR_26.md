# **AÇÃO DIA DO SOL | LP INTERATIVA “QUANTOS SÓIS VOCÊ JÁ VIVEU?”**

## **CONCEITO CENTRAL** Inspirado em retrospectivas tipo Spotify Wrapped: **transformar a idade do usuário em algo emocional \+ compartilhável.**

👉 “Você não tem X anos… você já viveu X sóis.”  
---

#  **1\. O QUE A LP PRECISA TER?**

## **1\. INPUT DE DADOS (mínimo e eficiente)**

Evitar fricção. Aqui vai o ideal:

### **Campo obrigatório:**

* **Data de nascimento (DD/MM/AAAA)**

### **Campo opcional (se quiser enriquecer depois):**

* Nome (pra personalização leve na tela)  
* Checkbox LGPD:  
  * “Aceito compartilhar meus dados com o Assaí…”

👉 **Importante:** se não houver estratégia de CRM, NÃO peça e-mail/telefone.

---

##  **2\. LÓGICA DE CÁLCULO (simples pro dev)**

### **Regra base:** Diferença entre **data atual e data de nascimento em dias**

👉 Resultado \= “quantos sóis viveu”

Exemplo: 25 anos ≈ 9.125 dias → “9.125 sóis”

---

##  **3\. SISTEMA DE “TRIBOS” (pra escalar sem complexidade)**

| Faixa | Nome da Tribo | Tom |
| ----- | ----- | ----- |
| 0–12 | Sol Nascente | leve/divertido |
| 13–17 | Sol em Ascensão | jovem |
| 18–25 | Sol Raiz | memes e cultura pop |
| 26–35 | Sol Experiente | nostalgia \+ trends |
| 36–50 | Sol de Responsa | família \+ conquistas |
| 50+ | Sol Lendário | história \+ nostalgia |

---

##  **4\. TELAS GERADAS (ESTILO STORIES)**

O coração da ação. **Estrutura: 2 a 3 telas compartilháveis**

#### **TELA 1 (principal)**

* “Você já viveu **X sóis** ☀️”  
* Nome da tribo  
* Visual forte \+ cores Assaí


#### **TELA 2 (fun facts)**

Conteúdo baseado na tribo. Exemplo:

* “Você viu o Brasil ganhar X Copas”  
* “Sobreviveu ao meme da Nazaré confusa”  
* “Pegou a era do Orkut/MSN”

👉 Conteúdo pré-definido por faixa etária (não precisa API externa)

#### **TELA 3 (branding leve)**

* “O Assaí já viveu X sóis com você”  
* CTA: “Vem economizar hoje”

---

##  **5\. COMPARTILHAMENTO** 

### **O que precisamos:**

* Botão: **“Compartilhar nos Stories”**

### **Como funciona:**

* Gerar imagem (ou conjunto de imagens)  
* Acionar:  
  * Web Share API (mobile)  
  * Fallback: download da imagem

👉 IMPORTANTE:

* Instagram não permite deep link direto perfeito pra stories via web  
* Melhor UX realista:  
  * Botão → “Salvar imagem”  
  * Instrução: “Compartilhe nos seus stories”

*Ou usar integração tipo “Add to Stories” via mobile — dev pode avaliar viabilidade.*

---

##  **6\. DIREÇÃO DE DESIGN (UX \+ visual)**

* Fundo azul (identidade Assaí)  
* Elementos solares (gradiente, glow, raios)  
* Tipografia grande (impacto imediato)  
* Layout vertical (já pensando em stories)

👉 Mobile-first obrigatório

---

##  **7\. COPY (PRONTA PRA USO)**

### **Headline:** Quantos sóis você já viveu?

### **Sub:** Descubra e compartilhe sua história ☀️

### **CTA:** Descobrir agora

### **Resultado (tela):**

* “Você já viveu **9.125 sóis**”  
* “Você é do time: **Sol Raiz**”  
* “Posta nos stories e marca a gente 🔥”

---

##  **8\. FLUXO COMPLETO (UX)**

1. Usuário entra na LP  
2. Vê conceito \+ CTA  
3. Insere data de nascimento  
4. Clica em “Descobrir”  
5. Loading curto (efeito legal)  
6. Recebe resultado  
7. Clica em compartilhar

👉 Tempo total ideal: **\< 30 segundos**

---

##  **9\. ENTREGÁVEIS PRO DEV**

### **Front:**

* Página responsiva (mobile-first)  
* Input de data  
* Tela de resultado dinâmica  
* Botão de share/download

### **Back (ou front com JS mesmo):**

* Função de cálculo de dias  
* Regra de segmentação por faixa etária

### **Assets:**

* Templates de telas (por tribo)  
* Textos pré-definidos

---

##  **10\. DECISÕES QUE VOCÊ PRECISA VALIDAR INTERNAMENTE**

Antes de mandar pro dev, define:

1. Vai capturar leads ou não? Ver com cliente  
2. Quantas telas por usuário? 3 Ver com Eliel se é possível.  
3. Quantas tribos vamos ter? 6 Ver com Eliel se é possível.  
4. Nível de personalização (nome ou não?) Ver com Eliel se é possível.

---

**SUGESTÕES DE COPY PARA OS CARDS** 

**SOL NASCENTE (0–12 anos)**  
“Você viu o país disputar 4 mundiais”  
“Cresceu com dancinhas virais… e provavelmente aprendeu todas”  
“Viu o Brasil TOTALMENTE brilhante no maior prêmio do cinema”  
“Está vivendo um momento que entrará para os livros: a volta à Lua”

**SOL EM ASCENSÃO (13–17 anos**)  
“Você viu o início das trends que ninguém escapou”  
“Participou da explosão das redes sociais e influencers”  
“Teve o prazer de ver o Brasil sediar o mundial e as olimpíadas”  
“Acompanhou a ascensão e obsessão do petit gateau” 

**SOL RAIZ (18–25 anos)**  
“Participou do boom dos YouTubers e memes (lembra da Nazaré confusa? Rs)”   
“Comemorou uma vitória do Brasil no mundial”  
“Teve uma época em que curtir show era pela tela… e você estava lá”   
“Home-office hoje é rotina, mas você viu isso nascer” 

**SOL EXPERIENTE (26-35 anos)**  
“Para nossa alegria, você viu os memes nascerem (só a gente entende, rs)”  
“Viveu a chegada da fritadeira elétrica”   
“Lembra do barulho da internet discada antes de entrar no MSN e Orkut”   
“Aquele título do Brasil com estilo em campo? Você estava lá\!” 

**SOL RESPONSA (36-50 anos)**  
“Pipa, pique esconde e futebol de rua fez parte da sua infância”   
“Aniversário bom era com bolo salgado e isso nem se discute”   
“Você acompanhou a popularização dos videogames e fitas VHS”   
"Viu o lançamento do ônibus espacial Columbia" 

**SOL LENDÁRIO (50+ anos)**  
“Você lembra do famoso bolo de coco no papel alumínio. *Era bom demais\!*”   
“Viu a TV sair do preto e branco e ganhar cor pela primeira vez”  
“Aproveitou muito as discotecas da época com passinhos combinados”   
“Moda extravagante, estampas psicodélicas e boca de sino… Você viu nascer” 

