const aud = document.getElementById("audi")
const aud2 = document.getElementById("audi2")


let squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime1 = 40
let timerId = null

function audio1(){
    aud.currentTime=0;
    aud.play();
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      audio2();
      score.textContent = result
      // hitPosition = null
    }
    // else{}
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime1--
 timeLeft.textContent = currentTime1

 if (currentTime1 == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
  audio1();

  // const para = document.createElement("p");
  // const node = document.createTextNode("Game Over!");
  
  // para.appendChild(node);
  // document.getElementById("finalmsg").appendChild(para);
  alert('GAME OVER! Your final score is ' + result);
 }
//  else if(currentTime1==0){
//   audio1()
//  }


}

let countDownTimerId = setInterval(countDown, 1000)

function audio2(){
  aud2.currentTime=0;
  aud2.play();
}

