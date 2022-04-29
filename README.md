# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
The challenge is to build out an advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.
### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
### Screenshot

![](./advice-generator-app.png)
### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/advice-generator-app-B1P47yvrc/)
- Live Site URL: [Add live site URL here](https://advice-generator-appfrontendmentor.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- [Styled Components](https://styled-components.com/) - For styles

### What I learned


```html
<div class="card-btn" id="submit">
            <a href="#"> <img src="img/icon-dice.svg" alt="dice: submit button"></a>
```
```css
.card-btn {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  background: hsl(150, 100%, 66%);
  padding: 10px 18px;
  border-radius: 50%;
}

.card-btn img {
  width: 80%;
}

.card-btn:hover {
  box-shadow: 0 4px 8px 16px hsla(150, 100%, 66%, .3);
  cursor: pointer;
  transition: .5s;
}
```
```js
const getAdvice = async() => {
  let result = await fetch('https://api.adviceslip.com/advice')
  result = await result.json()
  isLoading = false
  loading.style.display = 'none'


  const advice = result.slip.advice;
  const id = result.slip.id;
  cardHead.innerHTML = `<span>Advice # ${id}</span>`;
  cardBody.innerText = advice
}
```

### Continued development

I will keep focusing on:
- HTML ,Markup:best practices.
- CSS: Position
- Javascript: asnc and await.
- Mobile responsiveness.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/28455100/how-to-center-div-vertically-inside-of-absolutely-positioned-parent-div) - This helped me for styling the dice button. I really liked this pattern and will use it going forward.
- [Example resource 2](https://stackoverflow.com/questions/71650028/async-function-for-advice-generator) - This is an amazing article which helped me finally understandusing javascrippt to build an advice generator. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Oluwatosin Abigail Ogundeji](https://medium.com/@oluwatosinhephzibah)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@undaunted_pen](https://www.twitter.com/undaunted_pen)

## Acknowledgments

Thanks to Faleke Peace for taking time to review the code.
