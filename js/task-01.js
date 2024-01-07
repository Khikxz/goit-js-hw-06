const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categories.childElementCount}`);

items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.childElementCount}`);
});

