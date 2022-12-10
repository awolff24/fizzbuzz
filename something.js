// something that takes two parameters (numbers) and returns these two parameters, added to each other

const calc = (num1, num2, op)=> {
    if (op === "add"){
        return num1 + num2
    }
    if (op === "sub"){
        return num1 - num2
    }
    if (op === "mult"){
        return num1 * num2
    }
    if (op === "div"){
        return num1 / num2
    }
    if (op === "exp"){
        return num1 ** num2
    }
}

console.log(calc(3,2, "mult"))

// return fizz for 3s buzz for 5s and fizzbuzz for 3 and 5s

const fb = ()=> {
    const arr = [];
    for (let i = 1; i<=30; i++){
        if ((i % 3) == 0){
            if ((i % 5) == 0){
                arr.push("fizzbuzz")
            }
            else {
                arr.push("fizz")
            }
        }
        else if ((i % 5) == 0){
            arr.push("buzz")
        }
        else {
            arr.push(i)
        }
    }
    return arr;
}

console.log(fb())