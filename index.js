function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(name, email),
  };
}

return fetch("http://localhost:3000/users", configObj)
  .then((resp) => resp.json())
  .then((obj) => {
    document.body.innerHTML = obj.id;
  })
  .catch((err) => {
    alert("Not found");

    document.body.innerHTML = err.message;
  });
