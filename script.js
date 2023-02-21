const quizData = [
    {
        question: "When was created HTML?",
        a: "1993",
        b: "2003",
        c: "1999",
        d: "2000",
        correct: "a",
    },
    {
        question: "Which company made JavaScript?",
        a: "Microsoft",
        b: "Intel",
        c: " Netscape",
        d: "Strontium",
        correct: "c",
    },
    {
        question: "What was it called first JavaScript?",
        a: "HTMLscript",
        b: "CSCRIPT",
        c: "LiveScript",
        d: "Mocha",
        correct: "d",
    },
    {
        question: "What is React?",
        a: "Library of Js",
        b: "Programming language",
        c: "Server",
        d: "Github one of Version",
        correct: "a",
    },
    {
         question:"Do you Like my code?",
         a:"Yes",
         b:"Yes",
         c:"Yes",
         d:"Yes",
        correct:"a",

    }
];       

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const chooseBtn = document.getElementById('choose')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
chooseBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Again</button>
           `
       }
    }
})