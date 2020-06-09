function connectWithSalesJet(apiKey, event_name, selector, noAlert) {
  const form = document.querySelector(selector);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    submitFormToSalesJet({
      apiKey,
      event_name,
      formData,
    })
      .then((response) => {
        console.log({ success: true, error: false, data: response });
      })
      .catch((err) => {
        if (!noAlert && noAlert !== "no-alert")
          alert(
            "An error has occurred while trying to submit the form. Please try later or contact the system administrator."
          );
        console.log({ success: false, error: err, data: {} });
      });
  });
}

async function submitFormToSalesJet({ apiKey, event_name, formData }) {
  const requestBody = {};
  for (let [name, value] of formData) requestBody[name] = value;

  const response = await fetch("https://sj-api.com/externalapp/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({
      event_name,
      contact: requestBody,
    }),
  });
  return response;
}
