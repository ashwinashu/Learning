let employees = [
    {
        "name": "Mano",
        "skills": ["es6", "node"],
        "projects": [
            {
                "name": "ABC",
                "Role": "Dev"
            },
            {
                "name": "XYZ",
                "Role": "Lead"
            }
        ]
    },
    {
        "name": "Bava",
        "skills": ["php", "laravel"],
        "projects": [
            {
                "name": "ABC",
                "Role": "Senior Dev"
            },
            {
                "name": "XYZ",
                "Role": "Team Lead"
            }
        ]
    },
];

function renderEmplonameyees(params = []) {
    let employess = [...params]
    let AllEmployessDOM = employess.map(function(employee, index) {
        let holder = document.querySelectorAll('.row'[0],)
        cards = document.querySelectorAll('.card');
        let singleEmployeeDOM = `
        <div class="row">
        <div class="col-3">
            <div class="card shadow">
                <div class="card-body">
                    <h3>Name: ${employee.name}</h3>
                    <p>Skills</p>
                    <ul>
                        ${employee.skills.map(function(skill, index) {
                            return `<li>${index+1}. ${skill}</li>`
                        }).join("")}
                    </ul>
                    <p>Projects</p>
                    <ul>
                        ${employee.projects.map(function(project, index) {
                            return `<li>${index+1}. Project Name: ${project.name}, Role: ${project.Role}</li>`
                        }).join("")}
                    </ul>
                </div>                    
            </div>
        </div>
        </div>
        `;
        return singleEmployeeDOM;
    })
    let finalDOM = `<div class="row">${AllEmployessDOM.join("")}</div>`
    // console.log(finalDOM);
    document.getElementById("app").innerHTML = finalDOM;
}


renderEmplonameyees(employees)