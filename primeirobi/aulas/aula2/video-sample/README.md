# AgregaTech 🚀

Um agregador moderno de vídeos sobre tecnologia e programação, desenvolvido com HTML5 semântico e CSS3 avançado.

## 📋 Sobre o Projeto

O **AgregaTech** é uma plataforma que reúne os melhores vídeos de tecnologia e programação em um só lugar. O site apresenta uma interface moderna, responsiva e acessível, focada na experiência do usuário.

## ✨ Características

### 🎨 Design Moderno
- Interface limpa e intuitiva
- Design responsivo para todos os dispositivos
- Animações suaves e transições elegantes
- Suporte a modo escuro automático
- Paleta de cores profissional

### 🏗️ HTML Semântico
- Estrutura semântica completa com elementos HTML5
- Uso correto de `header`, `main`, `section`, `article`, `nav`, `footer`
- Acessibilidade com ARIA labels e atributos semânticos
- SEO otimizado com meta tags apropriadas
- Modal de vídeo com roles e atributos ARIA adequados

### 🎯 Funcionalidades
- **Navegação Suave**: Links âncora com scroll suave
- **Busca Interativa**: Campo de busca responsivo
- **Player de Vídeo Integrado**: Modal com reprodução de vídeos do YouTube usando iframe
- **Controles de Vídeo**: Curtir, compartilhar, salvar e tela cheia
- **Categorização**: Vídeos organizados por categorias (Web Dev, Mobile, DevOps, IA, etc.)
- **Canais em Destaque**: Seção dedicada aos melhores canais
- **Vídeos Recentes**: Últimas adições à plataforma
- **Interface Responsiva**: Adaptação perfeita a mobile, tablet e desktop
- **Acessibilidade Completa**: Navegação por teclado, focus trap, ARIA labels
- **LocalStorage**: Salvamento de vídeos favoritos localmente

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Grid, Flexbox e CSS Variables
- **JavaScript**: Interatividade básica (navegação e busca)
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 guidelines

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** (1280px+): Layout completo com grid de múltiplas colunas
- **Tablet** (768px - 1279px): Layout adaptado com menos colunas
- **Mobile** (até 767px): Layout de coluna única otimizado para toque

## 🎨 Paleta de Cores

```css
:root {
    --primary-color: #2563eb;     /* Azul principal */
    --secondary-color: #06b6d4;   /* Ciano secundário */
    --accent-color: #f59e0b;      /* Amarelo de destaque */
    --text-primary: #1f2937;      /* Texto principal */
    --text-secondary: #6b7280;    /* Texto secundário */
    --bg-primary: #ffffff;        /* Fundo principal */
    --bg-secondary: #f9fafb;      /* Fundo secundário */
}
```

## 📂 Estrutura do Projeto

```
video-sample/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
└── README.md          # Documentação
```

## 🚀 Como Visualizar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Ou sirva o projeto em um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```

## 📋 Seções do Site

### 🏠 Header
- Logo animado do AgregaTech
- Navegação principal com indicador ativo
- Design gradient moderno

### 🎯 Hero Section
- Título impactante com gradient text
- Descrição da plataforma
- Barra de busca centralizada

### ⭐ Vídeos em Destaque
- Cards destacados com bordas especiais
- Thumbnails com efeito hover
- Informações do canal e metadados
- **Click para reproduzir**: Abre modal com player integrado

### 📚 Categorias
- Grid de categorias interativo
- Ícones representativos
- Contador de vídeos por categoria

### 🕒 Vídeos Recentes
- Grid responsivo de vídeos
- Informações detalhadas de cada vídeo
- Efeitos de hover suaves
- **Reprodução direta**: Click nos cards abre o player

### 📺 Canais em Destaque
- Perfis dos principais canais
- Estatísticas de inscritos
- Botões de ação

### 🎬 Modal de Vídeo
- **Player YouTube Integrado**: Iframe responsivo com autoplay
- **Controles Interativos**: Curtir, compartilhar, salvar, tela cheia
- **Informações do Vídeo**: Título, canal e avatar
- **Acessibilidade Completa**: Focus trap, navegação por teclado, ARIA
- **Responsive Design**: Adaptação para mobile e desktop
- **Fechamento Intuitivo**: ESC, click no overlay ou botão X

### 🦶 Footer
- Links organizados por seções
- Redes sociais
- Informações da plataforma

## 🎨 Características CSS Avançadas

### CSS Grid e Flexbox
- Layout responsivo com CSS Grid
- Alinhamento flexível com Flexbox
- Auto-fit para adaptação automática

### CSS Custom Properties
- Variáveis CSS para cores e espaçamentos
- Facilita manutenção e personalização
- Suporte a temas escuros

### Animações e Transições
- Animações keyframe (@keyframes)
- Transições suaves em hover
- Transform e scale effects
- Animações do modal (fade in/out)

### Responsive Design
- Mobile-first approach
- Breakpoints bem definidos
- Grid adaptativos

### Modal Avançado
- **Backdrop Filter**: Efeito de blur no fundo
- **Transform Animations**: Escala suave na abertura/fechamento
- **Aspect Ratio**: Containers com proporção 16:9
- **Focus Trap**: Navegação por tab contida no modal
- **Overlay Interativo**: Click fora para fechar

## 🎬 Funcionalidades do Player de Vídeo

### 🔧 Tecnologias Utilizadas
- **YouTube Embed API**: Integração direta com vídeos do YouTube
- **Iframe Responsivo**: Player que se adapta a qualquer tela
- **Web Share API**: Compartilhamento nativo (com fallback)
- **LocalStorage**: Persistência de vídeos salvos
- **Fullscreen API**: Modo tela cheia nativo do browser

### 🎯 Recursos do Player
- **Autoplay**: Reprodução automática ao abrir o modal
- **Controles Nativos**: Utilizando os controles do YouTube
- **Qualidade Adaptativa**: YouTube ajusta automaticamente
- **Closed Captions**: Suporte a legendas quando disponível
- **Keyboard Shortcuts**: Atalhos do YouTube funcionam normalmente

### 📱 Experiência Mobile
- **Touch-Friendly**: Botões e áreas de toque otimizadas
- **Orientação Adaptativa**: Funciona em portrait e landscape
- **Swipe Gestures**: Gestos nativos do YouTube
- **Performance**: Carregamento otimizado para mobile

### ♿ Acessibilidade do Player
- **ARIA Labels**: Descrições para leitores de tela
- **Keyboard Navigation**: Navegação completa por teclado
- **Focus Visible**: Indicadores visuais de foco
- **Screen Reader**: Compatibilidade com tecnologias assistivas
- **High Contrast**: Suporte a modo de alto contraste

## ♿ Acessibilidade

- Estrutura semântica HTML5
- ARIA labels para elementos interativos
- Contraste adequado de cores
- Navegação por teclado
- Suporte a leitores de tela
- Respeito às preferências de movimento reduzido

## 🔧 Possíveis Melhorias

- [ ] Integração com APIs de vídeo (YouTube, Vimeo)
- [ ] Sistema de favoritos com localStorage
- [ ] Filtros avançados de busca
- [ ] Sistema de comentários
- [ ] Modo escuro manual
- [ ] PWA (Progressive Web App)
- [ ] Sistema de notificações
- [ ] Integração com redes sociais

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Desenvolvimento Web.

---

**Desenvolvido com ❤️ para a comunidade dev brasileira** 🇧🇷
