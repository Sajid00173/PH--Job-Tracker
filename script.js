let currentfilter = "all";

function updateDashboard() {
    const allCards = document.querySelectorAll(".job-card");
    const interviewCards = document.querySelectorAll(".job-card[data-status='interview']");
    const rejectedCards = document.querySelectorAll(".job-card[data-status='rejected']");

//cards numbers
    if(document.getElementById("total-count")) document.getElementById("total-count").innerText = allCards.length;
    if(document.getElementById("interview-count")) document.getElementById("interview-count").innerText = interviewCards.length;
    if(document.getElementById("rejected-count")) document.getElementById("rejected-count").innerText = rejectedCards.length;

    let visiblecount = 0;
    allCards.forEach(card => {
        const status = card.getAttribute("data-status");
        if (currentfilter === "all" || status === currentfilter) {
            card.style.display = "block";
            visiblecount++;
        } else {
            card.style.display = "none";
        }
    });

    if(document.getElementById("section-count")) document.getElementById("section-count").innerText = `${visiblecount} jobs`;

// empty
    const emptyState = document.getElementById("empty-state");
    if (emptyState) {
        if (visiblecount === 0) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
        } else {
            emptyState.classList.add("hidden");
            emptyState.classList.remove("flex");
        }
    }
}

//interview/rejected buttons
window.setStatus = (button, status) => {
    const card = button.closest(".job-card");
    const currentStatus = card.getAttribute("data-status");
    const badge = card.querySelector('.apply-status-badge');

    const newStatus = currentStatus === status ? "none" : status;
    card.setAttribute("data-status", newStatus);

    const intBtn = card.querySelector('.btn-interview');
    const rejBtn = card.querySelector('.btn-rejected');

    intBtn.className = "btn-interview px-4 py-1 text-xs font-semibold rounded border border-[#10B981] text-[#10B981] hover:bg-green-50 uppercase transition-all";
    rejBtn.className = "btn-rejected px-4 py-1 text-xs font-semibold rounded border border-[#EF4444] text-[#EF4444] hover:bg-red-50 uppercase transition-all";

    if (newStatus === "interview") {
        intBtn.classList.add("bg-[#10B981]", "text-white");
    } else if (newStatus === "rejected") {
        rejBtn.classList.add("bg-[#EF4444]", "text-white");
    }

    updateDashboard();
};

//delete jobs
window.deleteCard = (button) => {
    const card = button.closest(".job-card");
    card.remove();
    updateDashboard();
};

//tab changes
window.filterTabs = (type) => {
    currentfilter = type;
   
    ['all', 'interview', 'rejected'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (btn) {
            if (t === type) {
                btn.className = "px-4 py-2 bg-[#3B82F6] text-white rounded-md uppercase text-xs font-bold transition-all";
            } else {
                btn.className = "px-4 py-2 bg-[#E2E8F0] text-[#323B49] rounded-md uppercase text-xs font-bold transition-all";
            }
        }
    });

    updateDashboard();
};

updateDashboard();


