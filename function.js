emailjs.init("შენი_User_ID"); // მაგ: "S0y6VfR4X_abcde"

document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_2r31kr9", "შენი_Template_ID", this)
    .then(function() {
      alert("წარმატებით გაიგზავნა!");
    }, function(error) {
      alert("შეცდომა მოხდა: " + JSON.stringify(error));
    });
});
