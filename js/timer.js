window.onload = () => {
  const progressBar = document.getElementById("progress-bar");

  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      progressBar.style.width = `${i * 10}%`;
      progressBar.setAttribute("aria-valuenow", i * 10);
      progressBar.textContent = `${i * 10}%`;
    }, 1000 * i);
  }
};
