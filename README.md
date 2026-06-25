# Projeto da Disciplina - Fase 2
## Sistema Web para Petshop - PetShop Patinhas

---

## 1. Objetivo e Metas

### Objetivo Geral

Evoluir o protótipo desenvolvido na Fase 1 (HTML puro) para um sistema web mais atrativo e dinâmico, incorporando CSS/Bootstrap, JavaScript, um formulário completo de cadastro de cliente e pet, um fluxo de agendamento de serviços (tele-busca ou entrega no local) e ao menos um recurso de acessibilidade para deficientes visuais.

### Metas (Atividades Específicas)

1. Reestruturar o projeto em múltiplos arquivos (HTML, CSS e JavaScript separados), em vez de uma única página monolítica.
2. Aplicar o framework **Bootstrap 5** para responsividade, grid e componentes visuais (navbar, cartões, botões, formulário).
3. Implementar um **carrossel** (Bootstrap Carousel) com banners promocionais do petshop.
4. Implementar **funções em JavaScript**, incluindo: função temporal (relógio/data ao vivo), validação de formulário, definição dinâmica da data mínima de agendamento, resumo dinâmico do agendamento e botão de interação "voltar ao topo".
5. Criar um **formulário de cadastro** do cliente (nome, endereço, CPF, sexo, telefone, e-mail) e do pet (nome, raça, idade, espécie), utilizando elementos variados (input de texto, e-mail, number, tel, date, time, radio button, checkbox, placeholder e campos obrigatórios).
6. Implementar a **escolha do serviço** (Banho ou Tosa) e da **forma de agendamento** (tele-busca ou entrega no local), com seleção de data e horário por meio de calendário (`<input type="date">`).
7. Adaptar o sistema para atender a **pelo menos um requisito de acessibilidade** para deficientes visuais (uso detalhado do atributo `alt`, link de pular conteúdo, marcação semântica e atributos ARIA).
8. Comentar todo o código (HTML, CSS e JavaScript), explicando a função de cada bloco.
9. Revisar o sistema antes da publicação, corrigindo problemas de caminhos de arquivo, links internos e compatibilidade, a fim de minimizar problemas após a publicação.
10. Publicar o projeto atualizado no GitHub e republicar via GitHub Pages.

---

## 2. Link para os códigos-fonte (Repositório GitHub)

> **Atenção:** substitua pelo link real do seu repositório.

🔗 [https://github.com/berllp218/petshop-patinhas](https://github.com/berllp218/petshop-patinhas)

---

## 3. Link para o sistema publicado (GitHub Pages)

> **Atenção:** substitua pelo link gerado pelo GitHub Pages.

🔗 [https://berllp.github.io/petshop-patinhas/](https://berllp218.github.io/petshop-patinhas/)

---

## 4. Estrutura de Arquivos do Projeto (Fase 2)

```
petshop-patinhas/
├── index.html            → página inicial (carrossel, produtos, serviços)
├── agendamento.html      → formulário de cadastro do cliente/pet e agendamento
├── ajuda.html            → página de ajuda (funcionalidades do site)
├── README.md             → este documento
├── HELP.md               → arquivo de ajuda em texto simples
├── css/
│   └── estilos.css       → estilos personalizados (cores, tipografia, cartões, carrossel)
├── js/
│   └── script.js         → relógio, validação de formulário, resumo de agendamento, botão "Topo"
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

O HTML foi separado da apresentação (CSS) e do comportamento (JavaScript), conforme as boas práticas estudadas nas aulas da disciplina: cada tipo de arquivo fica em sua própria pasta (`css/`, `js/`, `images/`), e os três arquivos HTML compartilham os mesmos `css/estilos.css` e `js/script.js`.

---

## 5. Requisitos Atendidos na Fase 2

### 5.1 CSS/Bootstrap e JavaScript (Aulas 7, 8 e 9)

- **Bootstrap 5** via CDN: usado para grid responsivo (`container`, `row`, `col`), navbar, cartões (`card`), botões e formulário.
- **Carrossel** (`Bootstrap Carousel`) na página inicial, com 3 banners promocionais, indicadores e setas de navegação.
- **CSS próprio** (`css/estilos.css`): paleta de cores da marca, efeitos de hover nos cartões, estilização do formulário e do rodapé.
- **JavaScript** (`js/script.js`), com as seguintes funções:
  - **Função temporal:** relógio/data atual exibido no rodapé, atualizado a cada segundo (`setInterval`).
  - **Data mínima de agendamento:** define dinamicamente o menor valor permitido no calendário, impedindo datas passadas.
  - **Validação do formulário de cadastro:** confere os campos obrigatórios antes de simular o envio e exibe mensagem de confirmação.
  - **Resumo dinâmico do agendamento:** atualiza um texto-resumo (serviço, forma de atendimento, data e horário) conforme o cliente preenche o formulário.
  - **Botão "voltar ao topo":** aparece ao rolar a página e rola suavemente de volta ao início ao ser clicado.

### 5.2 Formulário de cadastro do cliente e do pet (Aula 6)

Disponível em `agendamento.html`, dividido em três blocos (`<fieldset>`):

**Dados do cliente:** nome (`text`), e-mail (`email`), CPF (`text` com `pattern`), telefone (`tel`), endereço (`text`), sexo (`radio button`) e preferências de contato (`checkbox`).

**Dados do pet:** nome (`text`), raça (`text`), idade (`number`, com `min`/`max`), espécie (`radio button`) e observações (`text`, opcional).

Todos os campos obrigatórios usam o atributo `required`, e vários campos usam `placeholder` como exemplo de preenchimento.

### 5.3 Escolha do serviço e agendamento (Aula 6)

Também em `agendamento.html`:
- Escolha entre **Banho Completo** ou **Tosa Higiênica e Completa** (`radio button`).
- Escolha entre **tele-busca** ou **entrega do pet no local** (`radio button`).
- Seleção de **data** (`input type="date"`, com data mínima = hoje) e **horário** (`input type="time"`, limitado ao período de atendimento).

### 5.4 Acessibilidade (Aula 10)

- Atributo `alt` detalhado (audiodescrição) em todas as imagens do site, descrevendo o conteúdo visual para usuários de leitores de tela.
- Link "Pular para o conteúdo principal", disponível ao navegar com Tab, permitindo pular o menu repetitivo.
- Uso de HTML semântico (`header`, `main`, `footer`, `fieldset`, `legend`, `nav`) e de atributos ARIA (`aria-label`, `aria-live`, `aria-current`, `role`).
- Contorno de foco bem visível para navegação via teclado (`:focus-visible`).
- Texto alternativo (`visually-hidden`) em botões com apenas ícones (ex.: setas do carrossel).

---

## 6. Ajustes Realizados Nesta Fase

Em relação ao protótipo entregue na Fase 1, os seguintes ajustes foram realizados, visando reduzir problemas antes da publicação:

1. **Reestruturação dos arquivos**: o projeto deixou de ser um único arquivo HTML e passou a ser organizado em pastas (`css/`, `js/`, `images/`) e múltiplas páginas (`index.html`, `agendamento.html`, `ajuda.html`), separando estrutura, estilo e comportamento.
2. **Revisão dos atributos `alt`**: todas as descrições de imagem foram detalhadas para servir como audiodescrição completa, atendendo ao requisito de acessibilidade.
3. **Padronização dos links internos**: os links de navegação por âncora (`#produtos`, `#servicos`) foram revisados para garantir que o `id` de destino e o `href` de origem estivessem sempre escritos de forma idêntica, prevenindo links quebrados.
4. **Adoção do Bootstrap 5 via CDN**: a estrutura HTML foi adaptada ao sistema de grid do Bootstrap (`container`, `row`, `col`) para melhorar a responsividade e o alinhamento dos cartões de produtos e serviços em diferentes tamanhos de tela.
5. **Validação do formulário no navegador**: os campos foram testados com valores em branco, e-mail inválido e CPF fora do padrão antes da publicação, conferindo o funcionamento dos atributos `required`, `pattern`, `type="email"`, `type="number"`, `min`/`max`.
6. **Teste do calendário de agendamento**: o campo de data foi configurado, via JavaScript, com data mínima igual ao dia atual, prevenindo agendamentos retroativos.
7. **Verificação de caminhos relativos**: todos os caminhos de arquivos (`css/`, `js/`, `images/`) foram revisados para usar caminhos relativos, evitando que o site quebrasse ao ser hospedado no GitHub Pages.
8. **Comentários no código**: todo o HTML, CSS e JavaScript foi comentado, indicando a função de cada bloco/seção, facilitando a manutenção e a correção pela disciplina.

---

## 7. Autoria

Projeto desenvolvido por: **[Seu Nome Completo]**
Disciplina: **Fundamentos de Sistemas Web**
Data: Junho de 2026
