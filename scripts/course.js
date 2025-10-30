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