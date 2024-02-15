// math practice app

    let totalQuestions = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;


    // init the problem
    let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
    totalQuestions = totalQuestions + 1;

    // getting the score card elements by id
    let total = document.getElementById('total');
    let correct = document.getElementById('correct');
    let score = document.getElementById('score');

    


function add(){
    total.innerText = totalQuestions;
    
    let result = document.getElementById('result');

    let userSum = document.getElementById('sum').value;
    if(num1 + num2 == userSum){
        console.log(num1, num2, userSum)
        console.log('correct');
         num1 = Math.floor(Math.random()*10);
         num2 = Math.floor(Math.random()*10);
        document.getElementById('num1').value = num1;
        document.getElementById('num2').value = num2;
        result.innerText = 'Well Done!! 🎉'

        // updating result
        correctAnswers = correctAnswers + 1;

        // calculate the correct percentage
        let percentage = (correctAnswers / totalQuestions) * 100;
        document.getElementById('correctPercentage').innerText = percentage.toFixed(2);

        totalQuestions = totalQuestions + 1;
        correct.innerText = correctAnswers;
        score.innerText = correctAnswers * 10;

        

    }
    else{
        console.log(num1, num2, userSum)
        result.innerText = 'Wrong';

        let percentage = (correctAnswers / totalQuestions) * 100;
        document.getElementById('correctPercentage').innerText = percentage.toFixed(2);

        totalQuestions = totalQuestions + 1;
    }
    document.getElementById('sum').value = ''


    if(correctAnswers*10 == 10){
        let audio = document.getElementById('audio');
        audio.play();

        let a50 = document.getElementById('a50');
        a50.classList.remove('d-none');
        a50.classList.add('achievement-50');
    }
}

// bmi



