# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/screenshot.JPG)

### Links

- Repository: [https://github.com/lukegoes/Rating](https://github.com/lukegoes/Rating)
- Solution URL: [https://rating-lukegoes.vercel.app/](https://rating-lukegoes.vercel.app/)

## My process

### Built with

- [TailwindCSS](https://tailwindcss.com/)
- [Framer-motion](https://motion.dev/)
- [Vite](https://vite.dev/)
- [React](https://reactjs.org/)


### What I learned

During this project, I gained valuable experience and improved several skills related to React, TailwindCSS, and animations:

State management with React useState
I learned how to handle user interactions by managing state for selected ratings and submission status.

```html
const [selected, setSelected] = useState(null);
const [submitted, setSubmitted] = useState(false);
```

Conditional rendering in React
I implemented conditional rendering to switch between the rating form and the thank-you screen without changing routes, providing a smooth user experience.

```html
{submitted ? <Form /> : <ThankYou />}
```


## Author

- Frontend Mentor - [@lukegoes](https://www.frontendmentor.io/profile/lukegoes)