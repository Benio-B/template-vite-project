document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");

  if (button) {
    let nb = 0;
    button.innerHTML = "Button + " + nb;
    button.addEventListener("click", () => {
      nb++;
      button.innerHTML = "Button + " + nb;
    });
  }
})
