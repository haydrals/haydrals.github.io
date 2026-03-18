

document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    
    // Get form values
    const email = document.getElementById("emailAddress").value;
    const sienaID = document.getElementById("sienaID").value;
    
    // Log to console (or do whatever you need with the data)
    console.log("Form submitted successfully!");
    console.log("Email:", email);
    console.log("Siena ID:", sienaID);
});

document.getElementById("incomeSourceForm").addEventListener("blur", function (e) {
    e.preventDefault();

    let value = parseFloat(this.value);

    if (!isNaN(value) && value > 0) {
      this.value = value.toFixed(2); // round to 2 decimal places
    } else {
      this.value = ""; // clear invalid input
      alert("Please enter a number greater than 0");
    }
  });

  let count = 0;
  let interval = null;

  function startTimer() {

    if (interval !== null) return;

    interval = setInterval(() => {
      count++;
      document.getElementById("outputPlace").textContent = count;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
    interval = null;
  }