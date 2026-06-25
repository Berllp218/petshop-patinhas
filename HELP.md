# Arquivo de Ajuda - PetShop Patinhas (Fase 2)

## Sobre este documento

Este arquivo descreve as funcionalidades do site do **PetShop Patinhas**, atualizado na **Fase 2** do Projeto da Disciplina. Uma versão navegável deste conteúdo também está disponível na página `ajuda.html` do site.

## O que mudou desde a Fase 1

Na Fase 1, o site era uma única página em HTML puro, sem estilo e sem JavaScript. Na Fase 2, o projeto passou a ter:
- Três páginas HTML (`index.html`, `agendamento.html`, `ajuda.html`);
- Estilo visual com **Bootstrap 5** e um arquivo CSS próprio (`css/estilos.css`);
- Comportamento dinâmico com **JavaScript** (`js/script.js`);
- Um **formulário completo** de cadastro do cliente e do pet, com agendamento de serviços;
- Recursos de **acessibilidade** para deficientes visuais.

## Páginas do site

### index.html — Página inicial
- **Cabeçalho:** faixa institucional (endereço/telefone/horário) + menu de navegação (Bootstrap Navbar), responsivo para celular.
- **Carrossel:** banners promocionais que trocam automaticamente, com setas e indicadores.
- **Produtos:** 2 produtos de cada uma das 3 categorias (Ração; Higiene e Beleza; Acessórios), em cartões com foto, descrição e valor.
- **Serviços:** Banho Completo e Tosa Higiênica e Completa, com descrição, valor e indicação de tele-busca.
- **Rodapé:** dados de contato, links de navegação, autoria e relógio/data atual (atualizado a cada segundo via JavaScript).

### agendamento.html — Cadastro e Agendamento
Formulário dividido em três partes:
1. **Dados do cliente** — nome, e-mail, CPF, telefone, endereço, sexo (radio button) e preferências de contato (checkbox).
2. **Dados do pet** — nome, raça, idade (number), espécie (radio button) e observações.
3. **Serviço e agendamento** — escolha do serviço (Banho ou Tosa), forma de atendimento (tele-busca ou entrega no local), data (calendário) e horário.

Conforme os campos da etapa 3 são preenchidos, um **resumo do agendamento** é montado automaticamente na tela, via JavaScript. Ao confirmar o formulário, o site verifica se todos os campos obrigatórios foram preenchidos corretamente e exibe uma mensagem de confirmação — sem enviar dados a nenhum servidor, já que este é um projeto apenas de front-end.

### ajuda.html — Página de ajuda
Página equivalente a este arquivo, explicando as funcionalidades do site para quem estiver navegando.

## Funções de JavaScript implementadas (js/script.js)

| Função | O que faz |
|---|---|
| `inicializarRelogio()` | Exibe e atualiza a data/hora atual no rodapé, a cada segundo. |
| `inicializarDataMinimaAgendamento()` | Impede a seleção de datas passadas no campo de agendamento. |
| `inicializarValidacaoFormularioCadastro()` | Confere os campos obrigatórios e exibe mensagem de confirmação ao enviar o formulário. |
| `inicializarResumoAgendamento()` | Monta, em tempo real, um resumo com o serviço, a forma de atendimento, a data e o horário escolhidos. |
| `inicializarBotaoVoltarAoTopo()` | Mostra/esconde e aciona o botão flutuante de voltar ao topo da página. |

## Recursos de acessibilidade

- Todas as imagens têm atributo `alt` detalhado (audiodescrição).
- Link "Pular para o conteúdo principal" no topo de cada página (visível ao navegar com a tecla Tab).
- HTML semântico (`header`, `main`, `footer`, `fieldset`, `legend`, `nav`) e atributos ARIA (`aria-label`, `aria-live`, `aria-current`).
- Contorno de foco bem visível para quem navega só com o teclado.

## Estrutura de arquivos do repositório

```
petshop-patinhas/
├── index.html
├── agendamento.html
├── ajuda.html
├── README.md
├── HELP.md
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── images/
    ├── banner-promo-racao.svg
    ├── banner-banho-tosa.svg
    ├── banner-novidades.svg
    ├── racao-caes.svg
    ├── racao-gatos.svg
    ├── shampoo-pet.svg
    ├── perfume-pet.svg
    ├── coleira.svg
    └── caminha-pet.svg
```

> **Observação:** as imagens incluídas são placeholders (ilustrações simples em SVG) usados para preencher visualmente os espaços de produtos e banners. Recomenda-se substituí-las por fotos reais antes da entrega final, mantendo os mesmos nomes de arquivo (ou atualizando o atributo `src` correspondente nos arquivos HTML).

## Suporte

Em caso de dúvidas sobre o funcionamento do site, consulte também o `README.md`, que contém o objetivo do projeto, as metas, os requisitos atendidos e os ajustes realizados nesta fase.
