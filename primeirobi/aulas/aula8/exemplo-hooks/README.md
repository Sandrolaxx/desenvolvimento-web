# Exemplo de Hooks React - Conceitos Fundamentais

Este projeto demonstra conceitos essenciais do React, incluindo useState, manipulação de estados, renderização condicional e inputs controlados.

## 📚 Conceitos Abordados

### 1. Hook useState

#### O que é?
`useState` é um Hook fundamental do React que permite adicionar **estado** a componentes funcionais. Antes dos Hooks, apenas componentes de classe podiam ter estado.

#### Sintaxe
```javascript
const [valor, setValor] = useState(valorInicial);
```

- **`valor`**: Variável que contém o estado atual
- **`setValor`**: Função para atualizar o estado
- **`valorInicial`**: Valor inicial do estado (pode ser número, string, objeto, array, etc.)

#### Exemplos no Código

```javascript
// Estado com número
const [contador, setContador] = useState(0);

// Estado com booleano
const [carregando, setCarregando] = useState(true);

// Estado com string
const [nomeProduto, setNomeProduto] = useState("");

// Estado com array de objetos
const [produtos, setProdutos] = useState([
    { id: 1, nome: "Teclado", valor: 200 }
]);
```

#### Como Funciona?
1. Quando você chama a função `set` (ex: `setContador(5)`), o React:
   - Atualiza o valor do estado
   - Re-renderiza o componente
   - Mantém o novo valor entre renderizações

2. **Importante**: Nunca modifique o estado diretamente!
   ```javascript
   // ❌ ERRADO
   contador = contador + 1;
   
   // ✅ CORRETO
   setContador(contador + 1);
   ```

---

### 2. Criação de Objetos

#### Sintaxe Literal de Objetos
JavaScript permite criar objetos de forma declarativa usando chaves `{}`:

```javascript
const produto = {
    id: 1,                              // propriedade numérica
    nome: "Teclado Gamer",              // propriedade string
    valor: 200,                         // propriedade numérica
    disponivel: true                     // propriedade booleana
};
```

#### No Exemplo
```javascript
function criarProduto() {
    const produto = {
        id: produtos.length + 1,    // ID baseado no tamanho da lista
        nome: nomeProduto,          // Valor vem do estado
        valor: 47.47                // Valor fixo
    }
    // ... adiciona à lista
}
```

#### Acessando Propriedades
```javascript
console.log(produto.nome);    // "Teclado Gamer"
console.log(produto['nome']); // "Teclado Gamer" (alternativa)
```

---

### 3. Atualização Imutável de Listas

#### Por que Imutabilidade?
No React, **nunca devemos modificar o estado diretamente**. Isso inclui arrays e objetos. O React depende de detectar mudanças para saber quando re-renderizar.

#### ❌ Forma ERRADA (Mutação)
```javascript
function adicionarProduto() {
    produtos.push(novoProduto);  // Modifica o array original!
    setProdutos(produtos);        // React pode não detectar a mudança
}
```

#### ✅ Forma CORRETA (Imutável)
```javascript
function criarProduto() {
    const produto = { id: 3, nome: "Mouse", valor: 100 };
    
    // Cria uma NOVA array com todos os elementos antigos + o novo
    setProdutos([...produtos, produto]);
}
```

#### Spread Operator (`...`)
O operador spread (`...`) "espalha" todos os elementos de um array:

```javascript
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];
// Resultado: [1, 2, 3, 4, 5]

// É equivalente a:
const novosNumeros = [1, 2, 3, 4, 5];
```

#### Outras Operações Imutáveis

**Remover item:**
```javascript
// Remove produto com id = 2
setProdutos(produtos.filter(p => p.id !== 2));
```

**Atualizar item:**
```javascript
// Atualiza o nome do produto com id = 1
setProdutos(produtos.map(p => 
    p.id === 1 ? { ...p, nome: "Novo Nome" } : p
));
```

**Limpar lista:**
```javascript
setProdutos([]);
```

---

### 4. Renderização Condicional

#### O que é?
Renderização condicional permite mostrar diferentes elementos JSX baseado em condições (como `if/else` no JavaScript).

#### Operador Ternário
Sintaxe: `condição ? seVerdadeiro : seFalso`

```javascript
{carregando ? 
    <h3>Carregando</h3>     // Se carregando for true
    : 
    <div>Conteúdo</div>     // Se carregando for false
}
```

#### Operador AND (&&)
Renderiza apenas se a condição for verdadeira:

```javascript
{produtos.length > 0 && 
    <p>Você tem {produtos.length} produtos</p>
}
// Se produtos.length > 0, mostra o <p>
// Se produtos.length === 0, não renderiza nada
```

#### Exemplos Práticos

```javascript
// Mensagem de boas-vindas personalizada
{usuario ? 
    <p>Olá, {usuario.nome}!</p> 
    : 
    <p>Faça login</p>
}

// Mostrar/esconder com booleano
{mostrarDetalhes && <div>Detalhes aqui...</div>}

// Múltiplas condições
{status === 'loading' ? <Spinner /> :
 status === 'error' ? <Erro /> :
 <Conteudo />
}
```

---

### 5. Inputs Controlados (Controlled Components)

#### O que são?
Um **input controlado** é um campo de formulário cujo valor é controlado pelo estado do React, não pelo DOM.

#### Fluxo de Dados
```
1. Estado define o valor → 2. Input exibe o valor → 
3. Usuário digita → 4. onChange dispara → 
5. Estado atualiza → 6. Input re-renderiza com novo valor
```

#### Implementação
```javascript
// 1. Criar estado para o valor do input
const [nomeProduto, setNomeProduto] = useState("");

// 2. Vincular estado ao input
<input 
    type="text" 
    value={nomeProduto}                          // Valor vem do estado
    onChange={e => setNomeProduto(e.target.value)} // Atualiza estado ao digitar
/>
```

#### Por que Usar?
✅ **Controle total**: React sempre sabe o valor atual  
✅ **Validação fácil**: Pode validar antes de atualizar  
✅ **Sincronização**: Um estado pode controlar múltiplos elementos  
✅ **Resetar facilmente**: Basta usar `setNomeProduto("")`

#### Exemplo com Validação
```javascript
function handleChange(e) {
    const valor = e.target.value;
    
    // Só aceita letras
    if (/^[a-zA-Z\s]*$/.test(valor)) {
        setNomeProduto(valor);
    }
}

<input value={nomeProduto} onChange={handleChange} />
```

#### Input Não-Controlado (Alternativa)
```javascript
// Usa ref para acessar valor direto do DOM
const inputRef = useRef();

function handleSubmit() {
    const valor = inputRef.current.value;
}

<input ref={inputRef} />
```

---

## 🎯 Renderização de Listas com `.map()`

### Como Funciona

```javascript
produtos.map(produto => (
    <span key={produto.id}>
        <p>{produto.nome}</p>
    </span>
))
```

#### O que `.map()` faz?
Transforma cada item do array em um elemento JSX:
```javascript
// Array original
[{ id: 1, nome: "Teclado" }, { id: 2, nome: "Mouse" }]

// Após .map()
[
    <span key={1}><p>Teclado</p></span>,
    <span key={2}><p>Mouse</p></span>
]
```

#### Importância da `key`
A propriedade `key` é **obrigatória** em listas:

```javascript
// ✅ CORRETO
produtos.map(produto => (
    <div key={produto.id}>  {/* key única e estável */}
        <p>{produto.nome}</p>
    </div>
))

// ❌ ERRADO
produtos.map((produto, index) => (
    <div key={index}>  {/* Evite usar index como key */}
        <p>{produto.nome}</p>
    </div>
))
```

**Por que `key` é importante?**
- Ajuda o React a identificar quais itens mudaram
- Melhora performance
- Evita bugs em listas dinâmicas
- Deve ser única e estável (não use índice se a lista pode ser reordenada)

---

## ⚠️ Problemas no Código Atual

### setInterval Descontrolado

```javascript
// ❌ PROBLEMA: Cria um novo timer a cada renderização
setInterval(() => setCarregando(false), 5000)
```

**Solução com useEffect:**
```javascript
import { useState, useEffect } from "react";

useEffect(() => {
    const timer = setTimeout(() => {
        setCarregando(false);
    }, 5000);
    
    // Cleanup: limpa o timer se o componente desmontar
    return () => clearTimeout(timer);
}, []); // [] = executa apenas uma vez ao montar
```

---

## 🚀 Executando o Projeto

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📖 Recursos Adicionais

- [Documentação Oficial do React - useState](https://react.dev/reference/react/useState)
- [Documentação Oficial - Renderização Condicional](https://react.dev/learn/conditional-rendering)
- [Documentação Oficial - Listas e Keys](https://react.dev/learn/rendering-lists)
- [Documentação Oficial - Formulários](https://react.dev/reference/react-dom/components/input)

---

## 💡 Resumo dos Conceitos

| Conceito | Uso | Exemplo |
|----------|-----|---------|
| **useState** | Adicionar estado a componentes | `const [valor, setValor] = useState(0)` |
| **Criação de Objetos** | Estruturar dados | `{ id: 1, nome: "Produto" }` |
| **Imutabilidade** | Atualizar arrays/objetos sem mutação | `[...array, novoItem]` |
| **Renderização Condicional** | Mostrar elementos baseado em condições | `{ativo ? <A /> : <B />}` |
| **Input Controlado** | Controlar formulários com estado | `value={estado} onChange={...}` |
| **map() e key** | Renderizar listas | `array.map(item => <div key={item.id}>)` |

---

**Desenvolvido para fins educacionais - Aula 8 - React Hooks**
