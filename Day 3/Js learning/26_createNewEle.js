document.querySelector('.parent')
// console.log(parent);//provide parent class
// console.log(parent.children);//provide html collection
// console.log(parent.children[1].innerHTML);// Tuesday shows in html page 

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML)  
}
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);//Monday
console.log(parent.lastElementChild);//Thursday

const dayOne= document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES",parent.chilNodes);


