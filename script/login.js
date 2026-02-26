console.log("Heloo payoo banking");

document.getElementById("login-btn").addEventListener("click", function () {

    // Step: 1 --> fetch the number from number input
    const inputNumber = document.getElementById("login-number").value;
    console.log(inputNumber);

    //Step: 2 --> fetch the pin number from the pin Input
    const pinNumber = document.getElementById("login-pin").value;
    console.log(pinNumber);


    // Step: 3 --> matching number and pin number
    if(inputNumber === "01811353353" && pinNumber === "1234") {

        // Step: 3.1 : true:::--> alert --> homePage
        alert("Login Successful");

        //window.location.replace("/home.html")
        window.location.assign("./homepage.html");
        
    }else{

        // Step: 3.2 :::--> alert --> return 

        alert("login failed");
        return;

    }

    

});
