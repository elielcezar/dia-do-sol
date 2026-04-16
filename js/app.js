(function () {
  'use strict';
  
  var TRIBOS = {
    'sol-nascente': {
      nome: 'Sol Nascente',
      idadeMin: 0,
      idadeMax: 12,
      fatos: [
        'Você viu o país disputar 4 mundiais',
        'Cresceu com dancinhas virais… e provavelmente aprendeu todas',
        'Viu o Brasil TOTALMENTE brilhante no maior prêmio do cinema',
        'Está vivendo um momento que entrará para os livros: a volta à Lua'
      ]
    },
    'sol-ascensao': {
      nome: 'Sol em Ascensão',
      idadeMin: 13,
      idadeMax: 17,
      fatos: [
        'Você viu o início das trends que ninguém escapou',
        'Participou da explosão das redes sociais e influencers',
        'Teve o prazer de ver o Brasil sediar o mundial e as olimpíadas',
        'Acompanhou a ascensão e obsessão do petit gateau'
      ]
    },
    'sol-raiz': {
      nome: 'Sol Raiz',
      idadeMin: 18,
      idadeMax: 25,
      fatos: [
        'Participou do boom dos YouTubers e memes (lembra da Nazaré confusa? Rs)',
        'Comemorou uma vitória do Brasil no mundial',
        'Teve uma época em que curtir show era pela tela… e você estava lá',
        'Home-office hoje é rotina, mas você viu isso nascer'
      ]
    },
    'sol-experiente': {
      nome: 'Sol Experiente',
      idadeMin: 26,
      idadeMax: 35,
      fatos: [
        'Para nossa alegria, você viu os memes nascerem (só a gente entende, rs)',
        'Viveu a chegada da fritadeira elétrica',
        'Lembra do barulho da internet discada antes de entrar no MSN e Orkut',
        'Aquele título do Brasil com estilo em campo? Você estava lá!'
      ]
    },
    'sol-responsa': {
      nome: 'Sol de Responsa',
      idadeMin: 36,
      idadeMax: 50,
      fatos: [
        'Pipa, pique esconde e futebol de rua fez parte da sua infância',
        'Aniversário bom era com bolo salgado e isso nem se discute',
        'Você acompanhou a popularização dos videogames e fitas VHS',
        'Viu o lançamento do ônibus espacial Columbia'
      ]
    },
    'sol-lendario': {
      nome: 'Sol Lendário',
      idadeMin: 51,
      idadeMax: 999,
      fatos: [
        'Você lembra do famoso bolo de coco no papel alumínio. Era bom demais!',
        'Viu a TV sair do preto e branco e ganhar cor pela primeira vez',
        'Aproveitou muito as discotecas da época com passinhos combinados',
        'Moda extravagante, estampas psicodélicas e boca de sino… Você viu nascer'
      ]
    }
  };

  var DATA_FUNDACAO_ASSAI = new Date(1974, 0, 1);

  var telas = {
    intro: document.getElementById('tela-intro'),
    loading: document.getElementById('tela-loading'),
    resultado: document.getElementById('tela-resultado'),
    fatos: document.getElementById('tela-fatos'),
    branding: document.getElementById('tela-branding')
  };

  var form = document.getElementById('form-nascimento');
  var inputNome = document.getElementById('input-nome');
  var inputData = document.getElementById('input-data');
  var btnVerFatos = document.getElementById('btn-ver-fatos');
  var btnVerBranding = document.getElementById('btn-ver-branding');
  var btnCompartilhar = document.getElementById('btn-compartilhar');
  var btnSalvar = document.getElementById('btn-salvar');
  var btnRecomecar = document.getElementById('btn-recomecar');
 
  /**
   * Calcula a diferença em dias entre duas datas
   */
  function calcularDias(dataInicio, dataFim) {
    var diffMs = dataFim.getTime() - dataInicio.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  /**
   * Calcula a idade em anos a partir de uma data de nascimento
   */
  function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var mesAtual = hoje.getMonth();
    var mesNascimento = dataNascimento.getMonth();
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  /**
   * Identifica a tribo com base na idade
   */
  function identificarTribo(idade) {
    var chaves = Object.keys(TRIBOS);
    for (var i = 0; i < chaves.length; i++) {
      var tribo = TRIBOS[chaves[i]];
      if (idade >= tribo.idadeMin && idade <= tribo.idadeMax) {
        return tribo;
      }
    }
    return TRIBOS['sol-lendario'];
  }

  /**
   * Formata um número com separador de milhar (ponto)
   */
  function formatarNumero(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // ===================== NAVEGAÇÃO ENTRE TELAS =====================

  function mostrarTela(nomeTela) {
    var chaves = Object.keys(telas);
    for (var i = 0; i < chaves.length; i++) {
      telas[chaves[i]].classList.remove('tela--ativa');
    }
    telas[nomeTela].classList.add('tela--ativa');
    window.scrollTo(0, 0);
  }

  // ===================== LÓGICA PRINCIPAL =====================

  function processarResultado(nome, dataNascimento) {
    var hoje = new Date();
    var sois = calcularDias(dataNascimento, hoje);
    var idade = calcularIdade(dataNascimento);
    var tribo = identificarTribo(idade);
    var soisAssai = calcularDias(DATA_FUNDACAO_ASSAI, hoje);

    // Tela loading
    mostrarTela('loading');

    setTimeout(function () {
      preencherResultados(nome, sois, tribo, soisAssai);
      mostrarTela('resultado');
    }, 2000);
  }

  function preencherResultados(nome, sois, tribo, soisAssai) {
    var nomeFormatado = nome ? nome + ',' : '';
    var soisFormatado = formatarNumero(sois);
    var soisAssaiFormatado = formatarNumero(soisAssai);

    // Tela resultado principal
    document.getElementById('resultado-nome').textContent = nomeFormatado;
    document.getElementById('resultado-sois').textContent = soisFormatado;
    document.getElementById('resultado-tribo').textContent = tribo.nome;

    // Tela fun facts
    document.getElementById('fatos-nome').textContent = nomeFormatado;
    document.getElementById('fatos-tribo').textContent = tribo.nome;

    var listaEl = document.getElementById('fatos-lista');
    listaEl.innerHTML = '';
    for (var i = 0; i < tribo.fatos.length; i++) {
      var li = document.createElement('li');
      li.textContent = tribo.fatos[i];
      listaEl.appendChild(li);
    }

    // Tela branding
    document.getElementById('branding-sois-assai').textContent = soisAssaiFormatado;
  }

  // ===================== GERAÇÃO DE IMAGEM =====================

  /**
   * Gera uma imagem PNG a partir de um card usando html2canvas.
   * Retorna uma Promise com o canvas.
   */
  function gerarImagemCard(cardId) {
    var card = document.getElementById(cardId);
    return html2canvas(card, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
      logging: false,
      width: card.offsetWidth,
      height: card.offsetHeight
    });
  }

  /**
   * Converte canvas em blob.
   */
  function canvasParaBlob(canvas) {
    return new Promise(function (resolve) {
      canvas.toBlob(function (blob) {
        resolve(blob);
      }, 'image/png');
    });
  }

  /**
   * Baixa a imagem gerada.
   */
  function baixarImagem(canvas, nomeArquivo) {
    var link = document.createElement('a');
    link.download = nomeArquivo || 'meus-sois-assai.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  // ===================== COMPARTILHAMENTO =====================

  /**
   * Tenta usar a Web Share API (mobile).
   * Fallback: baixa a imagem.
   */
  function compartilhar(canvas) {
    canvasParaBlob(canvas).then(function (blob) {
      var arquivo = new File([blob], 'meus-sois-assai.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        navigator.share({
          title: 'Quantos Sóis Você Já Viveu?',
          text: 'Descubra quantos sóis você já viveu! ☀️ #DiaDeSol #Assaí',
          files: [arquivo]
        }).catch(function () {
          // Usuário cancelou o share, não faz nada
        });
      } else {
        // Fallback: baixar a imagem
        baixarImagem(canvas);
      }
    });
  }

  // ===================== EVENT LISTENERS =====================

  // Define data máxima como hoje
  inputData.setAttribute('max', new Date().toISOString().split('T')[0]);

  // Submit do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var dataValor = inputData.value;
    if (!dataValor) return;

    // Parse da data (formato YYYY-MM-DD do input date)
    var partes = dataValor.split('-');
    var dataNascimento = new Date(
      parseInt(partes[0], 10),
      parseInt(partes[1], 10) - 1,
      parseInt(partes[2], 10)
    );

    // Validações básicas
    var hoje = new Date();
    if (dataNascimento > hoje) {
      alert('A data de nascimento não pode ser no futuro.');
      return;
    }
    if (calcularIdade(dataNascimento) > 130) {
      alert('Por favor, insira uma data de nascimento válida.');
      return;
    }

    var nome = inputNome.value.trim();
    processarResultado(nome, dataNascimento);
  });

  // Navegação entre telas de resultado
  btnVerFatos.addEventListener('click', function () {
    mostrarTela('fatos');
  });

  btnVerBranding.addEventListener('click', function () {
    mostrarTela('branding');
  });

  // Recomeçar
  btnRecomecar.addEventListener('click', function () {
    form.reset();
    mostrarTela('intro');
  });

  // Compartilhar
  btnCompartilhar.addEventListener('click', function () {
    // Gera imagem do card visível na tela de branding
    gerarImagemCard('card-branding').then(function (canvas) {
      compartilhar(canvas);
    });
  });

  // Salvar imagem
  btnSalvar.addEventListener('click', function () {
    gerarImagemCard('card-branding').then(function (canvas) {
      baixarImagem(canvas, 'meus-sois-assai.png');
    });
  });

})();
