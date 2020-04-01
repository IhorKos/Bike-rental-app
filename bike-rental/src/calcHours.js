export default function calcHours() {
    let money = 0;
    let price ;
    
    money = prompt("How much do you want to calculate your rental? ($)");
    price = prompt("Enter the cost of the selected bike ($/hour)");

    let hours = (Number(money) / price).toFixed(1);
    let hoursSale = (20 + ((Number(money) - (price * 20)) / (price / 2))).toFixed(0);
    
    hours <= 20 
    ? alert("For $" + Number(money) + " you can rent a bike for " + hours + " hours")
    : alert("You have a discount! after 20 hours the price is reduced by half! For $" + Number(money) + " you can rent a bike for " + hoursSale + " hours")
    
    return
  }