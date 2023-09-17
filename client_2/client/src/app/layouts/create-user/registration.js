function showStep(step) {
  console.log("Showing step: ===================" + step);
  document.getElementById("step" + currentStep).style.display = "none";
  currentStep = step;
  document.getElementById("step" + currentStep).style.display = "block";
}


