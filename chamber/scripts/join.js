// auto-fill timestamp when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // modal functionality
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });
    const membershipLinks = document.querySelectorAll(".membership-cards a");
    membershipLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const modal = document.querySelector(link.getAttribute("href"));
            if (modal) {
                modal.style.display = "block";
            }
        });
    });
});