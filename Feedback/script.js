const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButton = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";
let selectedNickname = "Anonymous";
let userMessage = "";

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendButton.addEventListener("click", (e) => {
  selectedNickname = prompt("Please enter your nickname (or leave it blank for Anonymous):") || "**Anonymous**";
  userMessage = prompt("Please enter your message:") || "";

  const payload = {
    content: `**${selectedNickname}** sent a review:\nThey felt **${selectedRating.toLowerCase()}** with the service\nTheir message:\n\`\`\`${userMessage}\`\`\``,
  };

  fetch("https://discord.com/api/webhooks/1168003735973281854/Uty347X3xe9o_0cGSAoNpS9lYoiA84GOJ3CB1gKiLudXfHogfOBzm1na8uil32gzQa-R", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>Your review has been sent to Discord!</p>
  `;
});