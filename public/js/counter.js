function clicksCount() {
  let count = 0;
  const btn = document.getElementById("like");
  const amount = document.getElementById("likesAmount");

  if (!amount || !btn) return;

  btn.addEventListener('click' , () => {
    count++;
    amount.textContent = count.toString();
  })

  console.log(count);
}

clicksCount();