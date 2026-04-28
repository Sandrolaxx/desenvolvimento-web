# Guia Visual de CSS: Flexbox & Grid

> Uma demonstração interativa dos conceitos de CSS moderno para construção de layouts responsivos.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Conceitos Abordados](#conceitos-abordados)
  - [1. Posicionamento e Z-Index](#1-posicionamento-e-z-index)
  - [2. Dimensionamento e Overflow](#2-dimensionamento-e-overflow)
  - [3. Efeitos Visuais e Transições](#3-efeitos-visuais-e-transições)
  - [4. Unidades de Medida](#4-unidades-de-medida)
  - [5. Flexbox](#5-flexbox)
  - [6. CSS Grid](#6-css-grid)
  - [7. Grid vs Flexbox](#7-grid-vs-flexbox)
- [Como Executar](#como-executar)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

## 🎯 Sobre o Projeto

Este projeto é um guia visual interativo desenvolvido para o **Encontro 4** do curso de Desenvolvimento Web. Ele demonstra de forma prática e visual os principais conceitos de CSS moderno, com foco em layouts responsivos utilizando **Flexbox** e **CSS Grid**.

O projeto apresenta exemplos práticos de:
- Diferentes tipos de posicionamento CSS
- Controle de dimensionamento e transbordamento
- Efeitos visuais modernos com transições
- Unidades de medida relativas e absolutas
- Layouts unidimensionais com Flexbox
- Layouts bidimensionais com CSS Grid
- Combinação de Grid e Flexbox para layouts profissionais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo
- **CSS3**: Estilização avançada com:
  - Flexbox
  - CSS Grid
  - Media Queries
  - Transições e transformações
  - Variáveis CSS (Custom Properties)
- **Google Fonts**: 
  - Roboto (fonte principal)
  - Source Code Pro (fonte para código)

## 📚 Conceitos Abordados

### 1. Posicionamento e Z-Index

Demonstração prática dos diferentes valores da propriedade `position`:

- **`static`**: Posicionamento padrão no fluxo normal do documento
- **`relative`**: Posicionamento relativo à sua posição original
- **`absolute`**: Posicionamento absoluto em relação ao ancestral posicionado mais próximo
- **`fixed`**: Posicionamento fixo em relação à viewport (sempre visível)
- **`z-index`**: Controle de empilhamento de elementos sobrepostos

**Exemplo prático:**
```css
.relative {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
```

### 2. Dimensionamento e Overflow

Controle de tamanho e comportamento de conteúdo transbordante:

- **Dimensionamento Responsivo**: `min-width`, `max-width`, larguras percentuais
- **Overflow**: Controle de conteúdo que excede os limites do container
  - `overflow: scroll` adiciona barras de rolagem
  - `overflow: auto` adiciona barras apenas quando necessário

**Exemplo prático:**
```css
.resizable {
  width: 80%;
  min-width: 150px;
  max-width: 300px;
}

.overflow-box {
  height: 100px;
  overflow: scroll;
}
```

### 3. Efeitos Visuais e Transições

Animações suaves e efeitos interativos:

- **Transitions**: Animações suaves entre estados
- **Transform**: Rotação, escala e translação de elementos
- **Box-shadow**: Sombras para profundidade visual
- **Border-radius**: Arredondamento de cantos (incluindo círculos perfeitos)

**Exemplo prático:**
```css
.effect-box {
  transition: background-color 0.4s ease, 
              transform 0.4s ease, 
              border-radius 0.4s ease;
}

.effect-box:hover {
  background-color: #dc3545;
  border-radius: 50%;
  transform: scale(1.1) rotate(15deg);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}
```

### 4. Unidades de Medida

Demonstração das diferentes unidades de medida CSS:

#### Unidades Absolutas:
- **`px`** (pixels): Valor fixo (ex: `200px`)

#### Unidades Relativas:
- **`%`** (porcentagem): Relativo ao elemento pai
- **`em`**: Relativo ao tamanho da fonte do elemento pai
- **`rem`**: Relativo ao tamanho da fonte do elemento raiz (`<html>`)
- **`vw`** (viewport width): Relativo à largura da viewport
- **`vh`** (viewport height): Relativo à altura da viewport

**Exemplos práticos:**
```css
.unit-px { width: 200px; }           /* 200 pixels fixos */
.unit-percent { width: 50%; }        /* 50% do pai */
.unit-em { font-size: 2em; }         /* 2x o tamanho da fonte do pai */
.unit-rem { font-size: 2rem; }       /* 2x o tamanho da fonte raiz */
.unit-vw { width: 50vw; }            /* 50% da largura da tela */
.unit-vh { height: 10vh; }           /* 10% da altura da tela */
```

### 5. Flexbox

**Flexbox (Flexible Box Layout)** é ideal para layouts **unidimensionais** (uma linha ou uma coluna).

#### Propriedades do Container:
- **`display: flex`**: Ativa o Flexbox
- **`justify-content`**: Alinhamento no eixo principal
  - `space-around`: Distribui espaço ao redor dos itens
  - `space-between`: Distribui espaço entre os itens
  - `center`: Centraliza os itens
- **`align-items`**: Alinhamento no eixo transversal
  - `center`: Centraliza verticalmente
  - `flex-start`: Alinha ao topo
  - `flex-end`: Alinha ao fundo
- **`flex-wrap`**: Define se os itens quebram linha
  - `wrap`: Permite quebra de linha
  - `nowrap`: Não quebra (padrão)
- **`gap`**: Espaçamento entre itens

#### Propriedades dos Itens:
- **`flex-grow`**: Define se o item pode crescer
- **`flex-shrink`**: Define se o item pode encolher
- **`flex-basis`**: Tamanho base do item

**Exemplos práticos:**
```css
/* Container Flexbox */
.flex-container {
  display: flex;
  gap: 10px;
}

/* Distribuição de espaço */
.justify-around {
  justify-content: space-around;
}

/* Alinhamento vertical */
.align-center {
  align-items: center;
  min-height: 100px;
}

/* Quebra de linha */
.flex-wrap {
  flex-wrap: wrap;
}

/* Item que cresce */
.grow {
  flex-grow: 1;
}
```

### 6. CSS Grid

**CSS Grid** é ideal para layouts **bidimensionais** (linhas e colunas simultaneamente).

#### Propriedades do Container:
- **`display: grid`**: Ativa o Grid
- **`grid-template-columns`**: Define as colunas
  - `1fr 1fr`: Duas colunas de tamanhos iguais
  - `repeat(3, 1fr)`: Três colunas iguais
  - `3fr 1fr`: Primeira coluna 3x maior que a segunda
- **`grid-template-areas`**: Define áreas nomeadas do layout
- **`gap`**: Espaçamento entre células

#### Propriedades dos Itens:
- **`grid-column`**: Define quantas colunas o item ocupa
  - `span 2`: Ocupa 2 colunas
- **`grid-area`**: Define a área que o item ocupa (ao usar template-areas)

**Exemplos práticos:**
```css
/* Grid básico */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* Item que ocupa 2 colunas */
.span-two {
  grid-column: span 2;
}

/* Layout com áreas nomeadas */
.page-layout {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header  header"
    "main    sidebar"
    "footer  footer";
}

.layout-header { grid-area: header; }
.layout-main { grid-area: main; }
.layout-sidebar { grid-area: sidebar; }
.layout-footer { grid-area: footer; }
```

### 7. Grid vs Flexbox

**Regra de ouro:** Grid para MACRO (estrutura geral da página), Flexbox para MICRO (componentes internos).

#### Quando usar Grid:
- Layout geral da página (header, main, sidebar, footer)
- Layouts complexos bidimensionais
- Quando você precisa controlar linhas E colunas

#### Quando usar Flexbox:
- Componentes menores (menus de navegação, cards, botões)
- Layouts unidimensionais simples
- Distribuição de espaço entre itens

**Exemplo prático do projeto:**
```css
/* MACRO: Grid define a estrutura geral */
.page-layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

/* MICRO: Flexbox alinha os itens do menu */
.main-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
```

## 📱 Responsividade

O projeto implementa **design responsivo** usando Media Queries:

### Mobile First (< 768px)
- Layout em coluna única
- Menu de navegação vertical
- Grid coloca elementos empilhados

### Tablet (≥ 768px)
```css
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .page-layout {
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "header  header"
      "main    sidebar"
      "footer  footer";
  }
  
  .main-nav {
    flex-direction: row;
    justify-content: space-around;
  }
}
```

### Desktop (≥ 1024px)
```css
@media (min-width: 1024px) {
  main {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## 🎨 Variáveis CSS

O projeto utiliza **CSS Custom Properties** para facilitar manutenção e consistência:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #f8f9fa;
  --text-color: #343a40;
  --accent-color: #17a2b8;
  --shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

## 🚀 Como Executar

1. Clone ou faça download do repositório
2. Navegue até a pasta do projeto:
   ```bash
   cd primeirobi/aulas/aula4
   ```
3. Abra o arquivo `index.html` em seu navegador preferido

**Ou simplesmente:**
- Clique duas vezes no arquivo `index.html`

## 📁 Estrutura de Arquivos

```
aula4/
│
├── index.html          # Estrutura HTML principal
├── globals.css         # Estilos globais e variáveis CSS
├── style.css          # Estilos específicos dos componentes
└── README.md          # Este arquivo
```

### Descrição dos Arquivos:

- **`index.html`**: Contém toda a estrutura HTML semântica do guia visual, organizada em seções temáticas
- **`globals.css`**: Define variáveis CSS, reset de estilos e estilos base para elementos HTML
- **`style.css`**: Implementa todos os estilos específicos para cada seção do guia (posicionamento, flexbox, grid, etc.)

## 💡 Recursos de Aprendizado

Este projeto demonstra:
- ✅ Estruturação semântica de HTML
- ✅ Uso de variáveis CSS para manutenibilidade
- ✅ Layouts modernos com Flexbox e Grid
- ✅ Design responsivo com Media Queries
- ✅ Transições e transformações CSS
- ✅ Diferentes sistemas de unidades CSS
- ✅ Posicionamento avançado de elementos
- ✅ Controle de overflow e dimensionamento

## 🎓 Conceitos-Chave para Memorizar

1. **Position**: `static | relative | absolute | fixed | sticky`
2. **Flexbox**: Uma dimensão (linha OU coluna)
3. **Grid**: Duas dimensões (linhas E colunas)
4. **Unidades**: `px` (fixo), `%` (pai), `em/rem` (fonte), `vw/vh` (viewport)
5. **Mobile First**: Comece com mobile e adapte para telas maiores
6. **Grid para Macro, Flex para Micro**: Use Grid para layout geral, Flexbox para componentes

## 📚 Referências

- [MDN Web Docs - Flexbox](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Google Fonts](https://fonts.google.com/)

---

**Desenvolvido para fins educacionais** - Encontro 4: Construindo Layouts Responsivos
