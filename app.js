// function Login(){
    // const userName = "Saman";
    // const password = "1234";

    // let texUserNameValue = document.getElementById("texUserName").value;
    // let texPasswordValue = document.getElementById("texPassword").value;

    // if (texUserNameValue ==userName && texPasswordValue == password) {
    //     alert("Login sucessed :)");
    // }else{
    //     alert("Login failed :(");
    // }

    // let number = [10,20,30,40,50,60,70,80,90,100];
    // let sum = 0;
    
    // for (let i = 0; i < number.length; i++) {
    //     console.log(number[i]);
    //     sum+=number[i];
        
    // }
    
    // console.log("Sum is :"+sum);
    
    // let numberArray = [10,20,30,40,50,60,70,80,90,100];

    // for (let number of numberArray){
    //     console.log(number);
    // }

    // numberArray.forEach((number)=>{
    //     // console.log(number);
    //     document.write(`<h1>${number}<h1>`);
    // })

    // //*_value___ */
    // let isTrue = 10 == "10";
    // console.log(isTrue);

    // //___value & type____
    // isTrue = 10 === "10";
    // console.log(isTrue);
    
// }

function calc(){

    let displayText = Number(document.getElementById("displayText").value);
    let lblOutput = document.getElementById("lblOutput");
    let sum = eval(displayText);
    lblOutput.innerHTML = sum;
    alert(sum);

    // console.log("Number 01 : "+number01+" | Number 02 : "+number02+" | Operator : "+number01+number02);
    // lblOutput.innerHTML = "Number 01 : "+number01+" | Number 02 : "+number02+" | Operator : "+number01+number02;
    // console.log(number01+number02);
    
    // switch (operator) {
    //     case "+":
    //         console.log(number01+number02);
    //         lblOutput.innerHTML = number01+number02;
            
    //         break;
    
    //     case "-":
    //         console.log(number01-number02);
    //         lblOutput.innerHTML = number01-number02;
    //         break;
    
    //     case "*":
    //         console.log(number01*number02);
    //         lblOutput.innerHTML = number01*number02;
    //         break;
    
    //     case "/":
    //         console.log(number01/number02);
    //         lblOutput.innerHTML = number01/number02;
    //         break;
    
    //     default:
    //         break;
    // }
    
}

