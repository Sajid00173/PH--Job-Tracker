let currentfilter = "all";

function updateDashboard() {
    const allCards = document.querySelectorAll(".job-card");
    const interviewCards = document.querySelectorAll(".job-card[data-status='interview']");
    const rejectedCards = document.querySelectorAll(".job-card[data-status='rejected']");

    // Update the numbers in the top cards
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = allCards.length;
    if(document.getElementById("interview-count")) document.getElementById("interview-count").innerText = interviewCards.length;
    if(document.getElementById("rejected-count")) document.getElementById("rejected-count").innerText = rejectedCards.length;
}