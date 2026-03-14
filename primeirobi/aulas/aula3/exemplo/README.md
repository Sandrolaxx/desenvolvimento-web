# 📚 Guia Completo de Conceitos CSS

Este projeto demonstra conceitos fundamentais de CSS através de exemplos práticos. Abaixo está uma explicação detalhada de cada conceito implementado.

---

## 📑 Índice

1. [Formas de Aplicar CSS](#1-formas-de-aplicar-css)
2. [Seletores CSS](#2-seletores-css)
3. [Pseudo-classes](#3-pseudo-classes)
4. [Combinadores](#4-combinadores)
5. [Box Model](#5-box-model)
6. [Display](#6-display)
7. [Cores e Formatação de Texto](#7-cores-e-formatação-de-texto)
8. [Efeitos Visuais](#8-efeitos-visuais)
9. [Unidades de Medida](#9-unidades-de-medida)

---

## 1. Formas de Aplicar CSS

Existem três maneiras de adicionar CSS ao HTML:

### 1.1 CSS Inline
- **Definição**: Estilo aplicado diretamente no elemento através do atributo `style`
- **Exemplo no código**: 
  ```html
  <h1 style="font-size: 40px; color: rgb(10, 84, 149);">Exemplo Texto</h1>
  ```
- **Vantagem**: Alta especificidade, útil para testes rápidos
- **Desvantagem**: Dificulta manutenção e não é reutilizável

### 1.2 CSS Interno
- **Definição**: Estilos definidos dentro da tag `<style>` no `<head>`
- **Exemplo no código**: (comentado no HTML)
  ```html
  <style>
    html {
      height: 100vh;
      background-color: rgb(249, 152, 152);
    }
  </style>
  ```
- **Vantagem**: Centralizado no documento
- **Desvantagem**: Não é compartilhado entre páginas

### 1.3 CSS Externo
- **Definição**: Estilos em arquivo separado (.css) linkado ao HTML
- **Exemplo no código**: 
  ```html
  <link rel="stylesheet" href="style.css">
  ```
- **Vantagem**: Reutilizável, organizado, melhor para manutenção
- **Desvantagem**: Requer requisição HTTP adicional

---

## 2. Seletores CSS

### 2.1 Seletor Universal (*)
```css
* {
  margin: 0px;
  padding: 0px;
}
```
- **O que faz**: Seleciona TODOS os elementos da página
- **Uso**: Reset CSS, remover estilos padrão do navegador
- **Performance**: Pode ser lento em páginas grandes

### 2.2 Seletor de Elemento
```css
h1 {
  text-decoration: underline;
}
```
- **O que faz**: Seleciona todos os elementos de um tipo específico
- **Especificidade**: Baixa (0,0,1)
- **Exemplo**: Todos os `<h1>` terão sublinhado

### 2.3 Seletor de Classe (.)
```css
.btn {
  width: 86px;
  height: 24px;
}
```
- **O que faz**: Seleciona elementos com a classe especificada
- **Especificidade**: Média (0,1,0)
- **Uso**: Reutilizável, pode ser aplicado a múltiplos elementos
- **HTML**: `<button class="btn">Clique Aqui</button>`

### 2.4 Seletor de ID (#)
```css
#container {
  height: 200px;
  width: 320px;
}
```
- **O que faz**: Seleciona o elemento com o ID específico
- **Especificidade**: Alta (1,0,0)
- **Uso**: IDs devem ser únicos na página
- **HTML**: `<section id="container">`

---

## 3. Pseudo-classes

Pseudo-classes definem estados especiais de elementos.

### 3.1 :hover
```css
.btn:hover {
  cursor: pointer;
  box-shadow: /* sombras */;
}
```
- **Quando ativa**: Mouse passa sobre o elemento
- **Uso comum**: Feedback visual para interatividade
- **Propriedades típicas**: `cursor`, `background-color`, `transform`

### 3.2 :focus
```css
.input-name:focus {
  background-color: rgb(17, 143, 197);
}
```
- **Quando ativa**: Elemento recebe foco (clique ou Tab)
- **Uso comum**: Inputs, botões, links
- **Acessibilidade**: Importante para navegação via teclado

---

## 4. Combinadores

Combinadores definem relações entre elementos.

### 4.1 Combinador de Irmãos Gerais (~)
```css
div ~ p {
  color: brown;
  font-weight: bold;
}
```
- **Sintaxe**: `A ~ B`
- **O que faz**: Seleciona todos os B que são irmãos posteriores de A
- **Requisitos**: 
  - Estarem no mesmo nível (mesmo pai)
  - B vir depois de A
  - Não precisam ser adjacentes
- **Exemplo prático**: No código, `<p>Texto Show 3</p>` e `<p>Texto Show 4</p>` são estilizados porque vêm após a `<div>`

**Outros Combinadores Comuns:**
- `A > B` (filho direto): Seleciona B que é filho direto de A
- `A + B` (irmão adjacente): Seleciona B imediatamente após A
- `A B` (descendente): Seleciona todos os B dentro de A

---

## 5. Box Model

O Box Model é fundamental no CSS e define como os elementos ocupam espaço.

### 5.1 Componentes do Box Model
```
┌─────────────────────────────────┐
│         MARGIN                   │
│  ┌───────────────────────────┐  │
│  │       BORDER              │  │
│  │  ┌─────────────────────┐  │  │
│  │  │     PADDING         │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  │  (width/height)  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### 5.2 Exemplo Completo
```css
#section-dois {
  height: 200px;           /* Altura do conteúdo */
  width: 320px;            /* Largura do conteúdo */
  padding: 14px 8px 12px 5px;  /* Espaçamento interno */
  border: 6px solid red;   /* Borda */
  box-sizing: border-box;  /* Inclui padding e border no width/height */
}
```

### 5.3 Padding
- **Sintaxe**: `padding: top right bottom left` (sentido horário)
- **Alternativas**:
  - `padding: 10px` (todos os lados)
  - `padding: 10px 20px` (vertical horizontal)
  - `padding: 10px 20px 30px` (top horizontal bottom)

### 5.4 Box-sizing
```css
box-sizing: border-box;
```
- **content-box (padrão)**: width/height aplicam-se apenas ao conteúdo
  - Tamanho total = width + padding + border
- **border-box**: width/height incluem padding e border
  - Tamanho total = width (mais previsível!)

---

## 6. Display

A propriedade `display` controla como os elementos se comportam no layout.

### 6.1 Display: Block
```css
.display-block {
  background-color: blanchedalmond;
}
```
- **Comportamento**:
  - Ocupa toda a largura disponível
  - Começa em nova linha
  - Respeita width, height, padding, margin
- **Exemplos naturais**: `<div>`, `<p>`, `<h1>`, `<section>`

### 6.2 Display: Inline
```css
.display-inline {
  width: 100px;  /* NÃO terá efeito! */
  background-color: rgb(81, 245, 114);
}
```
- **Comportamento**:
  - Fica na mesma linha
  - Ocupa apenas o espaço do conteúdo
  - **NÃO respeita** width e height
  - Respeita padding/margin horizontal, mas não vertical
- **Exemplos naturais**: `<span>`, `<a>`, `<strong>`, `<em>`

### 6.3 Display: None
```css
display: none;  /* Comentado no código */
```
- **Comportamento**: Elemento é completamente removido do layout
- **Diferença de `visibility: hidden`**: 
  - `display: none` → não ocupa espaço
  - `visibility: hidden` → invisível, mas mantém espaço

### 6.4 Outros valores importantes
- **inline-block**: Combina características (inline no fluxo, mas aceita width/height)
- **flex**: Layout flexível (moderno)
- **grid**: Layout em grade (moderno)

---

## 7. Cores e Formatação de Texto

### 7.1 Cores em CSS

**Formato RGB:**
```css
color: rgb(10, 84, 149);
background-color: rgb(249, 152, 152);
```
- Valores de 0 a 255 para Red, Green, Blue
- `rgb(0, 0, 0)` = preto
- `rgb(255, 255, 255)` = branco

**Formato RGBA:**
```css
rgba(0, 0, 0, 0.25)  /* último valor = transparência */
```
- Alpha: 0 (transparente) a 1 (opaco)

**Outros formatos:**
- Hexadecimal: `#FF5733`
- Nomes: `azure`, `brown`, `blanchedalmond`

### 7.2 Propriedades de Texto

```css
text-decoration: underline;  /* sublinhado */
font-weight: bold;           /* negrito */
text-align: center;          /* alinhamento */
font-family: "Poppins";      /* fonte */
```

**Valores comuns:**
- `text-decoration`: `none`, `underline`, `line-through`, `overline`
- `font-weight`: `normal`, `bold`, `100-900`
- `text-align`: `left`, `right`, `center`, `justify`

---

## 8. Efeitos Visuais

### 8.1 Border-radius
```css
border-radius: 20px;
```
- **O que faz**: Arredonda os cantos do elemento
- **Valores**: Valor único ou quatro valores (top-left, top-right, bottom-right, bottom-left)
- **Efeitos**: 
  - `50%` em elemento quadrado → círculo
  - Valores altos → bordas muito arredondadas

### 8.2 Box-shadow
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px;
```
- **Sintaxe**: `offset-x offset-y blur-radius spread-radius color`
- **Múltiplas sombras**: Separadas por vírgula
- **Efeitos**: Profundidade, elevação, destaque

**Parâmetros:**
- `offset-x`: Deslocamento horizontal (+ direita, - esquerda)
- `offset-y`: Deslocamento vertical (+ baixo, - cima)
- `blur-radius`: Desfoque (0 = nítida)
- `spread-radius`: Expansão da sombra
- `color`: Cor da sombra

### 8.3 Cursor
```css
cursor: pointer;
```
- **Valores comuns**: `default`, `pointer`, `text`, `move`, `not-allowed`, `grab`
- **Uso**: Feedback visual de interatividade

---

## 9. Unidades de Medida

### 9.1 Unidades Absolutas
- **px (pixels)**: Fixo, não muda com zoom do navegador
  ```css
  width: 320px;
  ```

### 9.2 Unidades Relativas
- **vh (viewport height)**: Relativo à altura da janela
  ```css
  height: 100vh;  /* 100% da altura da viewport */
  ```
- **% (porcentagem)**: Relativo ao elemento pai
- **em**: Relativo ao tamanho da fonte do elemento
- **rem**: Relativo ao tamanho da fonte raiz (html)

**Quando usar:**
- `px`: Bordas, pequenos detalhes, design fixo
- `vh/vw`: Layouts fullscreen, seções grandes
- `%`: Layouts responsivos, elementos flexíveis
- `em/rem`: Tipografia escalonável, espaçamentos proporcionais

---

## 🎯 Especificidade CSS

A especificidade determina qual regra CSS será aplicada quando há conflito.

**Ordem de especificidade (do maior para o menor):**

1. **Inline styles** (1,0,0,0): `style="color: red"`
2. **IDs** (0,1,0,0): `#header`
3. **Classes, pseudo-classes, atributos** (0,0,1,0): `.btn`, `:hover`, `[type="text"]`
4. **Elementos e pseudo-elementos** (0,0,0,1): `div`, `h1`, `::before`

**Exemplo:**
```css
div { color: blue; }           /* 0,0,0,1 */
.texto { color: green; }       /* 0,0,1,0 - VENCE */
#titulo { color: red; }        /* 0,1,0,0 - VENCE */
<div style="color: yellow;">   /* 1,0,0,0 - VENCE */
```

**`!important`**: Sobrescreve tudo (evite usar!)
```css
color: red !important;
```

---

## 📂 Estrutura do Projeto

```
exemplo/
├── index.html      # Estrutura HTML com demonstrações
├── style.css       # Estilos CSS com todos os conceitos
└── README.md       # Este arquivo
```

---

## 🚀 Como Visualizar

1. Abra o arquivo `index.html` em um navegador
2. Teste as interações:
   - Passe o mouse sobre o botão (`:hover`)
   - Clique no input (`:focus`)
   - Observe os diferentes comportamentos dos elementos

---

## 📖 Recursos Adicionais

- [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de recursos CSS

---

## ✅ Checklist de Conceitos

- [x] Seletor Universal
- [x] Seletores de Elemento, Classe e ID
- [x] Pseudo-classes (:hover, :focus)
- [x] Combinador de Irmãos (~)
- [x] Box Model completo
- [x] Box-sizing
- [x] Display (block, inline, none)
- [x] Border-radius
- [x] Box-shadow
- [x] Cores RGB/RGBA
- [x] Formatação de texto
- [x] Unidades (px, vh)
- [x] CSS Inline, Interno e Externo
- [x] Google Fonts

---

**Desenvolvido para fins educacionais - Aula 3 de CSS** 🎓
