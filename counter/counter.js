countEle = document.getElementById("count");
incrEle = document.getElementById("incr");
decrEle = document.getElementById("decr");

let count = 0;

decrEle.addEventListener("click", () => {
  count--;
  countEle.textContent = count;
});

incrEle.addEventListener("click", () => {
  count++;
  countEle.textContent = count;
});
