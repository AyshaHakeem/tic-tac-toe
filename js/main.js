const board = document.querySelector('.board')
board.addEventListener('click', myFunc)
const reset = document.querySelector('.reset')
reset.addEventListener('click', resetCell)
let displayResult = document.querySelector('.result-msg')

let b1 = document.querySelector('.b1'),
    b2 = document.querySelector('.b2'),
    b3 = document.querySelector('.b3'),
    b4 = document.querySelector('.b4'),
    b5 = document.querySelector('.b5'),
    b6 = document.querySelector('.b6'),
    b7 = document.querySelector('.b7'),
    b8 = document.querySelector('.b8'),
    b9 = document.querySelector('.b9');
    
let flag = 1;
let countX = 0;
let count0 = 0;
let result = '';

// box 1
b1.addEventListener('click',func1)
function func1(){
    if(flag==1){
        b1.textContent = 'X';
        flag=0;
    }
    else{
        b1.textContent = '0';
        flag=1;
    }
    b1.disabled = true;
}

// box 2
b2.addEventListener('click',func2)
function func2(){
    if(flag==1){
        b2.textContent = 'X';
        flag=0
    }
    else{
        b2.textContent = '0';
        flag=1
    }
    b2.disabled = true
}

// box 3
b3.addEventListener('click',func3)
function func3(){
    if(flag==1){
        b3.textContent = 'X'
        flag=0
    }
    else{
        b3.textContent = '0'
        flag=1
    }
    b3.disabled = true
}

// box 4
b4.addEventListener('click',func4)
function func4(){
    if(flag==1){
        b4.textContent = 'X'
        flag=0
    }
    else{
        b4.textContent = '0'
        flag=1
    }
    b4.disabled = true
}

// box 5
b5.addEventListener('click',func5)
function func5(){
    if(flag==1){
        b5.textContent = 'X'
        flag=0
    }
    else{
        b5.textContent = '0'
        flag=1
    }
    b5.disabled = true
}

// box 6
b6.addEventListener('click',func6)
function func6(){
    if(flag==1){
        b6.textContent = 'X';
        flag=0
        b6.disabled = true
    }
    else{
        b6.textContent = '0';
        flag=1
        b6.disabled = true
    }
}

// box 7
b7.addEventListener('click',func7)
function func7(){
    if(flag==1){
        b7.textContent = 'X'
        flag=0
    }
    else{
        b7.textContent = '0'
        flag=1
    }
    b7.disabled = true
}

// box 8
b8.addEventListener('click',func8)
function func8(){
    if(flag==1){
        b8.textContent = 'X'
        flag=0
    }
    else{
        b8.textContent = '0'
        flag=1
    }
    b8.disabled = true
}

// box 9
b9.addEventListener('click',func9)
function func9(){
    if(flag==1){
        b9.textContent = 'X'
        flag=0
    }
    else{
        b9.textContent = '0'
        flag=1
    }
    b9.disabled = true
}

function resetCell(){

    b1.disabled = false
    b2.disabled = false
    b3.disabled = false
    b4.disabled = false
    b5.disabled = false
    b6.disabled = false
    b7.disabled = false
    b8.disabled = false
    b9.disabled = false

    b1.innerText = ''
    b2.innerText = ''
    b3.innerText = ''
    b4.innerText = ''
    b5.innerText = ''
    b6.innerText = ''
    b7.innerText = ''
    b8.innerText = ''    
    b9.innerText = ''

    displayResult.textContent = '';
    flag=1;
    countX = 0;
    count0 = 0;
 }

function myFunc(){

    let b1Val = b1.innerText,
        b2Val = b2.innerText,
        b3Val = b3.innerText,
        b4Val = b4.innerText,
        b5Val = b5.innerText,
        b6Val = b6.innerText,
        b7Val = b7.innerText,
        b8Val = b8.innerText,
        b9Val = b9.innerText;   

    if (b1Val&&b2Val&&b3Val&&b4Val&&b5Val&&b6Val&&b7Val&&b8Val&&b9Val){
        checkResult()
        if(countX>count0){
            result = 'Player X WON!'
        }else if(count0>countX){
            result  = 'Player 0 WON!'
        }else if(count0==countX){
            result = 'Match Tie'
        }
        displayResult.textContent = result;
    }
        function checkResult(){

            if(b1Val===b2Val && b2Val===b3Val){
                (b1Val === '0') ? count0++ : countX++
            }
            if(b1Val===b4Val && b4Val===b7Val){
                (b1Val === '0') ? count0++ : countX++
            }
            if(b1Val===b5Val && b5Val===b9Val){
                (b1Val === '0') ? count0++ : countX++
            }
            if(b4Val===b5Val && b4Val===b6Val){
                (b5Val === '0') ? count0++ : countX++
            }
            if(b2Val===b5Val && b2Val===b8Val) {
                (b5Val === '0') ? count0++ : countX++
            }
            if(b3Val===b5Val && b3Val===b7Val){
                (b5Val === '0') ? count0++ : countX++
            }
            if (b3Val===b6Val && b6Val===b9Val){
                (b9Val === '0') ? count0++ : countX++
            } 
            if(b9Val===b8Val && b8Val===b7Val){
                (b9Val === '0') ? count0++ : countX++
            }
            return count0, countX
        }
        
}

        
        



