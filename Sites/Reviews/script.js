const reviewsContainer = document.querySelector(".reviews-container");
const review = document.querySelector(".review");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const reviews = [
  {
    name: "Ecstasy",
    position: "Developer",
    photo: "https://cdn.discordapp.com/avatars/1055323753241911347/b4b3ff0b828271edf05f127d454b3198.png?size=1024",
    text: "Hello, I see you found an interest in Silent, It is currently in its development phase, but I'm excited to bring it to the public soon. In the meantime, feel free to explore the previews (silent.lol/Previews) for snippets, until then check out reviews from our community members xD"
    },  {
    name: "Aied",
    position: "Beta Tester",
    photo:"https://cdn.discordapp.com/avatars/1143288496933585000/b3f16d3ae569612cb9b1e6dd5fab4d1e.png?size=1024",
    text:"I tested the net, and i can say by far its one of the most advanced i seen so far this shit has potential, just imagine what happens in a few more years jeez. shit is a 10/10 cant wait for it to release",
  },  {
    name: "Aied",
    position: "Beta Tester",
    photo:"https://cdn.discordapp.com/avatars/1143288496933585000/b3f16d3ae569612cb9b1e6dd5fab4d1e.png?size=1024",
    text:"I tested the net, and i can say by far its one of the most advanced i seen so far this shit has potential, just imagine what happens in a few more years jeez. shit is a 10/10 cant wait for it to release",
  },
];

let index = 1;

const updateReview = () => {
  const { name, position, photo, text } = reviews[index];
  review.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > reviews.length - 1) index = 0;
};

setInterval(updateReview, 10000);