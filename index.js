let main = document.getElementById('main');
let dal = document.getElementById('dal');
let breads = document.getElementById('bread');
let fast = document.getElementById('fast');
let dessert = document.getElementById('dessert');


let amount = document.getElementById('costId');


let billAmount = document.getElementById('billId');
// billAmount.addEventListener('click',function(){
//     // amount.value = cost;
//     amount.innerText = cost;
// })

function showcost(){

    let cost = 0;

    switch(main.value){
        case "none" : cost = cost;
        break;
        case "Butter Paneer Masala": cost = cost + 200;
            break;
        case "Paneer Tikka Masala" : cost = cost + 250;
            break;
        case "Special Malai Kofta" : cost = cost + 300;
            break;
        default:
    
    }
    
    switch(dal.value){
        case "none" : cost = cost;
        break;
        case "Punjabi Dal Tadka Special": cost = cost + 120;
            break;
        case "Dal Fry" : cost = cost + 150;
            break;
        case "Dal makhani" : cost = cost + 170;
            break;
        default:
            
    }
    
    switch(breads.value){
        case "none" : cost = cost;
        break;
        case "Punjabi Garlic Naan": cost = cost + 70;
            break;
        case "Butter Tandoori Roti" : cost = cost + 60;
            break;
        case "Butter Tawa Roti" : cost = cost + 50;
            break;
        default:
            
    }
    
    
    switch(fast.value){
        case "none" : cost = cost;
        break;
        case "Veg. Hakka Noodles": cost = cost + 150;
            break;
        case "Double Cheese Margherita" : cost = cost + 200;
            break;
        case "Special Paneer Pasta" : cost = cost + 120;
            break;
        default:
            
    }
    
    
    switch(dessert.value){
        case "none" : cost = cost;
        break;
    case "Gulab Jamun" : cost = cost + 20;
            break;
        case "Chocolate Fudge" : cost = cost + 50;
            break;
        case "Choco Lava Cake" : cost = cost + 60;
            break;
        default: cost = cost;
            
    }
    

    console.log(cost);
    amount.innerText = cost;
    console.log("main = "+ main.value);
console.log("breads = "+ breads.value);
console.log("dal = "+ dal.value);
console.log("dessert = "+ dessert.value);
console.log("fast = "+ fast.value);
}

// amount.value = cost;

