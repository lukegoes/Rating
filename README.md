# Frontend Mentor - Solução do Componente de Avaliação Interativa

Esta é a minha solução para o [desafio de componente de avaliação interativa do Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).<br>
 Os desafios do Frontend Mentor são ótimos para praticar habilidades de programação com projetos reais.

## 📑 Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal do componente, adaptado ao tamanho da tela do dispositivo.
- Ver os efeitos de hover em todos os elementos interativos da página.
- Selecionar e enviar uma nota de avaliação.
- Visualizar o cartão de “Obrigado” após enviar a nota.

### Captura de tela

![Captura de tela do projeto](/screenshot.JPG)

### Links

- **Repositório:** [https://github.com/lukegoes/Rating](https://github.com/lukegoes/Rating)
- **Versão online:** [https://rating-lukegoes.vercel.app/](https://rating-lukegoes.vercel.app/)

## Meu processo

### Tecnologias utilizadas

- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Vite](https://vite.dev/)
- [React](https://reactjs.org/)

### O que aprendi

Neste projeto, aprofundei meus conhecimentos em React, TailwindCSS e animações com Framer Motion.

**Gerenciamento de estado com React `useState`**

Pratiquei o controle de interações do usuário gerenciando o estado da nota selecionada e o status de envio:

```javascript
const [selected, setSelected] = useState(null);
const [submitted, setSubmitted] = useState(false);
```

**Renderização condicional no React**

Implementei renderização condicional para alternar entre o formulário de avaliação e a tela de agradecimento, mantendo tudo na mesma página para uma experiência fluida:

```javascript
{submitted ? <ThankYou /> : <Form />}
```


## Autor

- Frontend Mentor - [@lukegoes](https://www.frontendmentor.io/profile/lukegoes)
