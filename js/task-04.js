const decrease = document.querySelector('[data-action = "decrement"]');
const increase = document.querySelector('[data-action = "increment"]');
let value = document.querySelector("#value");
let counterValue = 0;

decrease.addEventListener("click", () => {
    counterValue = Number(value.innerText) - 1;
    value.innerText = counterValue;
});
increase.addEventListener("click", () => {
    counterValue = Number(value.innerText) + 1;
    value.innerText = counterValue;
});

