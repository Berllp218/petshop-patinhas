/* ==========================================================================
   PetShop Patinhas - script.js
   Fase 2 - Fundamentos de Sistemas Web

   Este arquivo reúne as funções em JavaScript usadas nas páginas do site.
   Cada bloco abaixo é independente e só executa se encontrar, na página
   atual, o elemento HTML correspondente (por isso o mesmo script.js pode
   ser incluído em todas as páginas sem gerar erro).
   ========================================================================== */

/* Garante que o código só rode depois que todo o HTML da página já foi
   carregado pelo navegador, evitando erros de "elemento não encontrado". */
document.addEventListener("DOMContentLoaded", function () {

  inicializarRelogio();
  inicializarDataMinimaAgendamento();
  inicializarValidacaoFormularioCadastro();
  inicializarResumoAgendamento();
  inicializarBotaoVoltarAoTopo();

});


/* ==========================================================================
   1. RELÓGIO / DATA ATUAL (função temporal)
   Exibe, no rodapé do site, a data e a hora atual, atualizando a cada
   segundo. Isso é o exemplo clássico de "função temporal" pedido na
   atividade: usa setInterval() para repetir uma ação ao longo do tempo.
   ========================================================================== */
function inicializarRelogio() {
  const elementoRelogio = document.getElementById("relogioAtual");

  // Se a página atual não tiver o elemento #relogioAtual, a função para aqui
  // (evita erro em páginas que não usam o relógio).
  if (!elementoRelogio) {
    return;
  }

  function atualizarRelogio() {
    const agora = new Date();

    // toLocaleDateString/toLocaleTimeString formatam a data conforme o
    // padrão brasileiro (dd/mm/aaaa e hh:mm:ss).
    const dataFormatada = agora.toLocaleDateString("pt-BR");
    const horaFormatada = agora.toLocaleTimeString("pt-BR");

    elementoRelogio.textContent = dataFormatada + " às " + horaFormatada;
  }

  atualizarRelogio();              // exibe imediatamente ao carregar a página
  setInterval(atualizarRelogio, 1000); // e depois atualiza a cada 1000ms (1s)
}


/* ==========================================================================
   2. DATA MÍNIMA PARA AGENDAMENTO
   Impede que o cliente escolha, no campo de calendário (<input type="date">),
   uma data anterior ao dia de hoje. Isso é feito definindo o atributo "min"
   do campo via JavaScript, com base na data atual do dispositivo do usuário.
   ========================================================================== */
function inicializarDataMinimaAgendamento() {
  const campoData = document.getElementById("dataAgendamento");

  if (!campoData) {
    return;
  }

  const hoje = new Date();

  // Monta a data no formato "AAAA-MM-DD", exigido pelo atributo "min"
  // de um input do tipo "date". Os zeros à esquerda (padStart) garantem que
  // o mês e o dia sempre tenham 2 dígitos (ex.: "01" em vez de "1").
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  const dataMinima = `${ano}-${mes}-${dia}`;

  campoData.setAttribute("min", dataMinima);
}


/* ==========================================================================
   3. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CADASTRO (cliente + pet)
   O HTML já usa validação nativa (atributos required, pattern, type="email",
   etc.), mas aqui adicionamos uma camada extra em JavaScript: ao enviar o
   formulário, impedimos o recarregamento da página (já que não há backend
   nesta fase), conferimos os campos manualmente e exibimos uma mensagem de
   confirmação amigável para o usuário.
   ========================================================================== */
function inicializarValidacaoFormularioCadastro() {
  const formulario = document.getElementById("formularioCadastro");

  if (!formulario) {
    return;
  }

  const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");

  formulario.addEventListener("submit", function (evento) {
    // Impede o comportamento padrão do navegador (recarregar/navegar),
    // já que neste projeto não existe um servidor para receber os dados.
    evento.preventDefault();

    // O método checkValidity() do próprio navegador verifica todos os
    // campos required/pattern/type de uma só vez, reaproveitando a
    // validação nativa do HTML5 em vez de reescrevê-la manualmente.
    const formularioValido = formulario.checkValidity();

    if (!formularioValido) {
      // reportValidity() exibe as mensagens de erro padrão do navegador
      // (balão "preencha este campo", etc.) apontando para o campo inválido.
      formulario.reportValidity();
      return;
    }

    // Recupera os principais dados preenchidos para montar uma mensagem
    // de confirmação personalizada.
    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;

    if (mensagemConfirmacao) {
      mensagemConfirmacao.style.display = "block";
      mensagemConfirmacao.textContent =
        "Cadastro recebido com sucesso! Obrigado, " + nomeCliente +
        ". O pet " + nomePet + " já está cadastrado em nosso sistema.";

      // Move o foco para a mensagem de confirmação, para que leitores de
      // tela anunciem automaticamente o resultado do envio (acessibilidade).
      mensagemConfirmacao.setAttribute("tabindex", "-1");
      mensagemConfirmacao.focus();
    }

    formulario.reset(); // limpa os campos após a confirmação do cadastro
  });
}


/* ==========================================================================
   4. RESUMO DINÂMICO DO AGENDAMENTO (serviço + forma de atendimento)
   Conforme o cliente escolhe o serviço (Banho ou Tosa), a forma de
   atendimento (tele-busca ou entrega no local) e a data/horário, a página
   monta um resumo em tempo real, sem precisar recarregar nada.
   ========================================================================== */
function inicializarResumoAgendamento() {
  const formularioAgendamento = document.getElementById("formularioAgendamento");

  if (!formularioAgendamento) {
    return;
  }

  const resumo = document.getElementById("resumoAgendamento");
  const camposObservados = formularioAgendamento.querySelectorAll(
    "input[name='servico'], input[name='formaAtendimento'], #dataAgendamento, #horaAgendamento"
  );

  function montarResumo() {
    const servicoSelecionado = formularioAgendamento.querySelector("input[name='servico']:checked");
    const formaSelecionada = formularioAgendamento.querySelector("input[name='formaAtendimento']:checked");
    const data = document.getElementById("dataAgendamento").value;
    const hora = document.getElementById("horaAgendamento").value;

    // Se algum campo essencial ainda não foi preenchido, mostra uma
    // mensagem orientando o usuário, em vez de deixar o resumo "quebrado".
    if (!servicoSelecionado || !formaSelecionada || !data || !hora) {
      resumo.textContent = "Selecione o serviço, a forma de atendimento, a data e o horário para visualizar o resumo do seu agendamento.";
      return;
    }

    // Formata a data de "AAAA-MM-DD" (formato do input) para "DD/MM/AAAA"
    // (formato mais familiar ao usuário brasileiro).
    const [ano, mes, dia] = data.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    resumo.textContent =
      "Resumo do agendamento: serviço de " + servicoSelecionado.value +
      ", com " + formaSelecionada.value +
      ", agendado para o dia " + dataFormatada + " às " + hora + ".";
  }

  // Sempre que qualquer um dos campos observados mudar de valor, o resumo
  // é recalculado automaticamente (evento "change" = "o valor mudou").
  camposObservados.forEach(function (campo) {
    campo.addEventListener("change", montarResumo);
  });

  montarResumo(); // exibe a mensagem inicial assim que a página carrega
}


/* ==========================================================================
   5. BOTÃO "VOLTAR AO TOPO"
   Pequena função de interatividade: o botão só aparece depois que o
   visitante rola a página para baixo, e ao ser clicado, rola suavemente
   de volta ao topo. Melhora a navegação em páginas mais longas.
   ========================================================================== */
function inicializarBotaoVoltarAoTopo() {
  const botaoTopo = document.getElementById("botaoVoltarTopo");

  if (!botaoTopo) {
    return;
  }

  // Mostra o botão apenas quando o usuário já rolou mais de 300px,
  // escondendo-o quando está próximo do topo da página.
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      botaoTopo.style.display = "block";
    } else {
      botaoTopo.style.display = "none";
    }
  });

  botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
