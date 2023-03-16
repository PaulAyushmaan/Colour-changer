const btn = document.getElementById("button");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};
// math.random 0-0.99
// floor for making complete value
function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
  document.getElementById("cc").innerText = randomColor();
}

btn.addEventListener("click", changeRandomColor);
