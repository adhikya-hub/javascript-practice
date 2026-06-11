function fetchQuote() {
  const data = fetch("https://api.kanye.rest/")
    .then((res) => {
      const data = res.json();

      return data;
    })
    .then((res) => {
      console.log(res);
      addQuoteToDom(res);
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

fetchQuote();

function addQuoteToDom(q) {
  const h = document.getElementById("quote");
  console.log(h.textContent);
  h.textContent = q.quote;
}

//function
