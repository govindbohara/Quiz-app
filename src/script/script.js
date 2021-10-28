const quizData = [
    {
        question: 'What is my name?',
        a: 'govind',
        b: 'bhuwan',
        c: 'keshav',
        d: 'manoj',
        correct: 'a',
    },
    {
        question: 'What is the full form of JS?',
        a: 'Jay Shambho',
        b: 'Jake Snake',
        c: 'JavaScript',
        d: 'Python',
        correct: 'c',
    },
    {
        question: 'What is my Age?',
        a: '14',
        b: '18',
        c: '17',
        d: '21',
        correct: 'd',
    },
    {
        question: 'What level am I in?',
        a: '+2',
        b: '10',
        c: "bachelor's",
        d: '16th class',
        correct: 'c',
    },
    {
        question: 'What is the full form of KFC',
        a: 'kwality family cafe',
        b: 'Quality food cafe',
        c: 'Kentucky fried chicken',
        d: 'katha fish curry',
        correct: 'c',
    },
];
const quiz = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aTextEl = document.getElementById('a_text');
const bTextEl = document.getElementById('b_text');
const cTextEl = document.getElementById('c_text');
const dTextEl = document.getElementById('d_text');
const sbtButton = document.getElementById('btn');
// console.log('hello');
let currentIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelect();
    const currentQuizData = quizData[currentIndex];
    console.log(currentQuizData);

    questionEl.innerText = currentQuizData.question;
    aTextEl.innerText = currentQuizData.a;
    bTextEl.innerText = currentQuizData.b;
    cTextEl.innerText = currentQuizData.c;
    dTextEl.innerText = currentQuizData.d;
}

function getSelected() {
    let answer;
    // console.log(answer);
    answersEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    });
    return answer;
}

function deSelect() {
    answersEl.forEach(answerEl => {
        answerEl.checked = false;
    });
}

sbtButton.addEventListener('click', () => {
    const answer = getSelected();
    // console.log(answer);
    if (answer) {
        if (answer === quizData[currentIndex].correct) {
            score++;
        }
        currentIndex++;
        console.log(currentIndex);

        if (currentIndex < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2><button onclick = location.reload()>Reload</button>`;
        }
    }
});
console.log(quizData.length);
