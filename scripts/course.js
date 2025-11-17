const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
    { code: "WDD 231", name: "Frontend Development I", credits: 3, type: "WDD", completed: false },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 2, type: "CSE", completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, type: "CSE", completed: true },
    { code: "CSE 210", name: "Programming with Classes", credits: 2, type: "CSE", completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, type: "WDD", completed: true },
];

const courseList = document.getElementById("course-list");
const allBtn = document.getElementById("all");
const wddBtn = document.getElementById("wdd");
const cseBtn = document.getElementById("cse");

function renderCourses(filterType = "ALL") {
    courseList.innerHTML = "";

    const filtered = filterType === "ALL"
        ? courses
        : courses.filter(course => course.type === filterType);
    
    const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card ${course.completed ? "completed" : "pending"}`;
        card.innerHTML = `
          <h3>${course.code}</h3>
          <p>${course.name}</p>
          <p>Credits: ${course.credits}</p>
          `;
        courseList.appendChild(card);
    });

    const creditInfo = document.createElement("p");
    creditInfo.textContent = `Total Credits: ${totalCredits}`;
    courseList.appendChild(creditInfo);
}

allBtn.addEventListener("click", () => renderCourses("ALL"));
wddBtn.addEventListener("click", () => renderCourses("WDD"));
cseBtn.addEventListener("click", () => renderCourses("CSE"));

renderCourses(); // Initial load

//grab the modal elements
const modal = document.querySelector('#course-details');

// Function to populate and show the course details
modal.innerHTML = `
<h2>${course.title}</h2>
<p><strong>Credits:</strong>${course.credits}</p>
<p><strong>Description:</strong>${course.description}</p>
<p><strong>Certificate:</strong>${course.certificate}</p>
<p><strong>Technology Stack:</strong>${course.tech}</p>
<button id="closeModal">Close</button>
`
// Show the modal
modal.showModal();

// Close button event
const closeBtn = modal.querySelector('#closeModal');
closeBtn.addEventListener('click', () => modal.closest());

// Attach to course cards
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('click', () => {
        const course = {
            title: card.dataset.title,
            credits: card.dataset.credits,
            description: card.dataset.description,
            certificate: card.dataset.certificate,
            tech: card.dataset.tech
        };
        showCourseDetails(course);
    });
});
