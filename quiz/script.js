let currentq = 0;
let score = 0;

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperTransfer Text Protocol",
      "HighText Transmission Program",
      "Hyperlink Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Array", "Queue", "Tree"],
    answer: "Queue"
  },
  {
    question: "What is the value of π (pi) approximately?",
    options: ["2.14", "3.14", "3.41", "4.13"],
    answer: "3.14"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Ruby", "HTML", "Java"],
    answer: "HTML"
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "What is the main function of RAM in a computer?",
    options: [
      "Store permanent data",
      "Run operating system and applications",
      "Connect to the internet",
      "Display graphics"
    ],
    answer: "Run operating system and applications"
  }
];


const nxtbtn = document.getElementById('next');
const questionzz = document.getElementById('questions');
const options = document.getElementById('options');
const result = document.getElementById('result');
const numb=document.getElementById('number');

function loadquestion(index) {
    const quiz = questions[index];
    questionzz.textContent = index+1+"."+quiz.question;
    options.innerHTML = ''; 

    quiz.options.forEach(option => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = option;
        

   
        btn.onclick = () => {
            if (btn.textContent === quiz.answer) {
                score++;
                btn.style.backgroundColor = 'lightgreen';
            } else {
                btn.style.backgroundColor = 'salmon';
            }

         
            const allBtns = document.querySelectorAll('#options button');
            allBtns.forEach(b => b.disabled = true);

            nxtbtn.style.display = 'inline-block'; 
        };

        li.appendChild(btn);
        options.appendChild(li);
    });

    nxtbtn.style.display = 'none'; 
}


nxtbtn.onclick = () => {
    currentq++;
    if (currentq < questions.length) {
        loadquestion(currentq);
    } else {
        showResult();
    }
};


function showResult() {
    document.getElementById('question-container').style.display = 'none';
    nxtbtn.style.display = 'none';
    result.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

questions.sort(() => Math.random() - 0.5);

loadquestion(currentq);
