const cardHead = document.querySelector('.card-head');
const cardBody = document.querySelector('.card-body');
const submitBtn = document.querySelector('#submit');
const loading = document.querySelector('.loading');
let isLoading = true;


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



submitBtn.addEventListener("click", getAdvice);
getAdvice();