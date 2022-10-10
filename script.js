let arr = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg','./images/11.jpg','./images/12.jpg','./images/13.jpg','./images/14.jpg','./images/15.jpg','./images/16.jpg','./images/17.jpg','./images/18.jpg','./images/19.jpg','./images/20.jpg','./images/21.jpg','./images/22.jpg','./images/23.jpg','./images/24.jpg','./images/25.jpg']
let itemset = ['Watch', 'Traffic lights', 'Sunrise', 'car', 'Classroom', 'Beach', 'food']
const elements = document.querySelectorAll(".element")
function setimages(){
    document.getElementById('Image').innerHTML = '<span>'+ itemset[Math.floor(Math.random() * itemset.length)] + '</span';
    for(let j = 1; j <= 16; j++)
     document.getElementById(j).innerHTML = '<img src= "'+ arr[Math.floor(Math.random() * 24)] +'"/>'; 
     

}
elements.forEach((element) =>{
    element.addEventListerner("click", ()=>{
        alert("hello")
    })
}) 

