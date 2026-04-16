<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quantos Sóis Você Já Viveu? | Assaí Atacadista</title>
  <meta name="description" content="Descubra quantos sóis você já viveu e compartilhe sua história!">

  <!-- Open Graph -->
  <meta property="og:title" content="Quantos Sóis Você Já Viveu?">
  <meta property="og:description" content="Descubra e compartilhe sua história ☀️">
  <meta property="og:type" content="website">
  <!-- <meta property="og:image" content="URL_DA_IMAGEM_OG"> -->

  <?php print $styles; ?>
</head>
<body class="promo-dia-do-sol">

  <!-- ===================== TELA 1: INTRO / INPUT ===================== -->
  <section id="tela-intro" class="tela tela--ativa">
    <div class="container">
      <div class="intro-content">
        <div class="logo-assai">
          <!-- Logo Assaí será inserido aqui -->
          <img src="<?php print base_path() . path_to_theme(); ?>/images/logo-assai.png" alt="Assaí Atacadista" class="logo-img">
        </div>

        <h1 class="titulo-principal">
          Quantos <span class="destaque">sóis</span><br>
          você já viveu?
        </h1>
        <p class="subtitulo">Descubra e compartilhe sua história ☀️</p>

        <form id="form-nascimento" class="form-nascimento" autocomplete="off">
          <div class="campo-grupo">
            <label for="input-nome" class="campo-label">Seu nome (opcional)</label>
            <input
              type="text"
              id="input-nome"
              class="campo-input"
              placeholder="Como podemos te chamar?"
              maxlength="30"
            >
          </div>

          <div class="campo-grupo">
            <label for="input-data" class="campo-label">Data de nascimento</label>
            <input
              type="date"
              id="input-data"
              class="campo-input"
              required
              max=""
            >
          </div>

          <button type="submit" id="btn-descobrir" class="btn-principal">
            Descobrir agora
          </button>
        </form>
      </div>

      <div class="sol-decorativo sol-decorativo--intro"></div>
    </div>
  </section>

  <!-- ===================== TELA LOADING ===================== -->
  <section id="tela-loading" class="tela">
    <div class="container">
      <div class="loading-content">
        <div class="sol-animado">
          <div class="sol-centro"></div>
          <div class="sol-raios"></div>
        </div>
        <p class="loading-texto">Contando seus sóis...</p>
      </div>
    </div>
  </section>

  <!-- ===================== TELA 2: RESULTADO PRINCIPAL ===================== -->
  <section id="tela-resultado" class="tela">
    <div class="container">

      <!-- Card compartilhável 1: Resultado principal -->
      <div id="card-resultado" class="card-compartilhavel">
        <div class="card-header">
          <img src="<?php print base_path() . path_to_theme(); ?>/images/logo-assai-branco.png" alt="Assaí" class="card-logo">
        </div>
        <div class="card-body">
          <p class="card-nome" id="resultado-nome"></p>
          <p class="card-prefixo">Você já viveu</p>
          <p class="card-numero" id="resultado-sois"></p>
          <p class="card-sufixo">sóis ☀️</p>
          <div class="card-tribo">
            <span class="tribo-badge" id="resultado-tribo"></span>
          </div>
        </div>
        <div class="card-footer">
          <p class="card-hashtag">#DiaDeSol #Assaí</p>
        </div>
      </div>

      <div class="resultado-acoes">
        <button id="btn-ver-fatos" class="btn-secundario">Ver curiosidades →</button>
      </div>
    </div>
  </section>

  <!-- ===================== TELA 3: FUN FACTS ===================== -->
  <section id="tela-fatos" class="tela">
    <div class="container">

      <!-- Card compartilhável 2: Fun Facts -->
      <div id="card-fatos" class="card-compartilhavel">
        <div class="card-header">
          <img src="<?php print base_path() . path_to_theme(); ?>/images/logo-assai-branco.png" alt="Assaí" class="card-logo">
        </div>
        <div class="card-body">
          <p class="card-nome" id="fatos-nome"></p>
          <p class="fatos-tribo-label">Você é do time</p>
          <p class="fatos-tribo-nome" id="fatos-tribo"></p>
          <ul class="fatos-lista" id="fatos-lista">
            <!-- Fun facts injetados via JS -->
          </ul>
        </div>
        <div class="card-footer">
          <p class="card-hashtag">#DiaDeSol #Assaí</p>
        </div>
      </div>

      <div class="resultado-acoes">
        <button id="btn-ver-branding" class="btn-secundario">Próximo →</button>
      </div>
    </div>
  </section>

  <!-- ===================== TELA 4: BRANDING / CTA ===================== -->
  <section id="tela-branding" class="tela">
    <div class="container">

      <!-- Card compartilhável 3: Branding -->
      <div id="card-branding" class="card-compartilhavel">
        <div class="card-header">
          <img src="<?php print base_path() . path_to_theme(); ?>/images/logo-assai-branco.png" alt="Assaí" class="card-logo">
        </div>
        <div class="card-body card-body--branding">
          <p class="branding-texto">
            O Assaí já viveu<br>
            <span class="branding-numero" id="branding-sois-assai"></span><br>
            sóis com você ☀️
          </p>
          <p class="branding-cta">Vem economizar hoje</p>
        </div>
        <div class="card-footer">
          <p class="card-hashtag">#DiaDeSol #Assaí</p>
        </div>
      </div>

      <div class="resultado-acoes">
        <div class="share-buttons">
          <button id="btn-compartilhar" class="btn-principal btn-share">
            📤 Compartilhar
          </button>
          <button id="btn-salvar" class="btn-principal btn-download">
            💾 Salvar imagem
          </button>
        </div>
        <button id="btn-recomecar" class="btn-link">← Recomeçar</button>
      </div>
    </div>
  </section>

  <?php print $scripts; ?>
</body>
</html>
