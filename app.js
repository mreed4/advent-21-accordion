import questions from "./data.js";

const questionsList = document.querySelector(".wrapper ul");

questions.forEach((question, i) => {
  let { question: text, answer } = question;
  const li = document.createElement("li");

  li.innerHTML = `
    <a href="#">
      <div class="question">
        <div class="question-mark">
          <img src="./images/question-${i + 1}.svg" alt="question" />
        </div>
        <div class="content">${text}</div>
      </div>
    </a>
    <div class="answer">
      <p>${answer}</p>
    </div>
  `;

  questionsList.appendChild(li);

  li.addEventListener("click", () => {
    li.classList.toggle("expand");
  });
});
