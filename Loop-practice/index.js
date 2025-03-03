function add() {
    const num1 = parseFloat(document.getElementById('input').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    
    const sum = num1 + num2;
    const result = document.getElementsById('result').innerHTML = sum;
}



Array.forEach(function(item, index) {
    console.log(item, index);
    if (arr[index].selected) {
        count++;
    }
});

let i = 0;
while (i < Array.length) {
    if (array[i].selected) {
        count++;
    }
    i++;



}




const shoppingList = ["apple", "banana", "orange", "kiwi"]
for (let item of shoppingList) {
    console.log(item);
}

