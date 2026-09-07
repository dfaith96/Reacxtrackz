const demoContent = {
  severity: {
    label: "Severity Review",
    title: "See which symptoms intensified and which improved.",
    text: "Reacxtrackz compares symptom levels across time so care teams can assess whether a treatment is stabilizing or producing difficult side effects."
  },
  timing: {
    label: "Timing Pattern",
    title: "Understand when reactions tend to begin and peak.",
    text: "The platform helps surface delayed reactions, early-response effects, and symptom windows that matter during treatment review."
  },
  progress: {
    label: "Treatment Progress",
    title: "Track whether the body is moving toward recovery.",
    text: "Reacxtrackz compares symptom reduction, side effect persistence, and treatment tolerance to show whether progress is improving or becoming unstable."
  },
  review: {
    label: "Clinical Review",
    title: "Prepare better discussions with patients and care teams.",
    text: "Structured summaries make it easier for hospitals and clinicians to review how treatment responses evolved across multiple entries."
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const demoLabel = document.getElementById("demo-label");
const demoTitle = document.getElementById("demo-title");
const demoText = document.getElementById("demo-text");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = demoContent[button.dataset.topic];
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (demoLabel && demoTitle && demoText) {
      demoLabel.textContent = content.label;
      demoTitle.textContent = content.title;
      demoText.textContent = content.text;
    }
  });
});
