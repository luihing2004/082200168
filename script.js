// 显示不同的section
function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// 创建新项目并添加到表格
function createProject() {
    var projectName = document.getElementById('projectName').value;
    var projectMentor = document.getElementById('projectMentor').value;
    var researchDirection = document.getElementById('researchDirection').value;
    var joinedMax = document.getElementById('joinedMax').value;

    if (projectName && projectMentor && researchDirection && joinedMax) {
        var table = document.getElementById('projectsTable').getElementsByTagName('tbody')[0];
        
        // 创建新行
        var newRow = table.insertRow();

        newRow.insertCell(0).innerText = projectName;
        newRow.insertCell(1).innerText = projectMentor;
        newRow.insertCell(2).innerText = researchDirection;
        newRow.insertCell(3).innerText = joinedMax;

        // 创建操作按钮：编辑和删除
        var actionCell = newRow.insertCell(4);
        
        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function() {
            editProject(newRow);
        };
        actionCell.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            table.deleteRow(newRow.rowIndex - 1);
        };
        actionCell.appendChild(deleteButton);

        // 清空输入框
        document.getElementById('projectName').value = '';
        document.getElementById('projectMentor').value = '';
        document.getElementById('researchDirection').value = '';
        document.getElementById('joinedMax').value = '';
    } else {
        alert("Please fill in all fields!");
    }
}

// 修改项目
function editProject(row) {
    var projectName = row.cells[0].innerText;
    var projectMentor = row.cells[1].innerText;
    var researchDirection = row.cells[2].innerText;
    var joinedMax = row.cells[3].innerText;

    document.getElementById('projectName').value = projectName;
    document.getElementById('projectMentor').value = projectMentor;
    document.getElementById('researchDirection').value = researchDirection;
    document.getElementById('joinedMax').value = joinedMax;

    row.parentNode.removeChild(row);
}

// 保存个人信息
function savePersonalInfo() {
    var name = document.getElementById('name').value;
    var studentID = document.getElementById('studentID').value;
    var major = document.getElementById('major').value;

    if (name && studentID && major) {
        document.getElementById('displayName').innerText = name;
        document.getElementById('displayStudentID').innerText = studentID;
        document.getElementById('displayMajor').innerText = major;

        document.getElementById('personalInfoForm').style.display = 'none';
        document.getElementById('personalInfoDisplay').style.display = 'block';
    } else {
        alert("Please fill in all fields!");
    }
}

// 编辑个人信息
function editPersonalInfo() {
    document.getElementById('personalInfoForm').style.display = 'block';
    document.getElementById('personalInfoDisplay').style.display = 'none';
}

// 删除个人信息
function deletePersonalInfo() {
    document.getElementById('displayName').innerText = '';
    document.getElementById('displayStudentID').innerText = '';
    document.getElementById('displayMajor').innerText = '';

    document.getElementById('personalInfoForm').style.display = 'block';
    document.getElementById('personalInfoDisplay').style.display = 'none';
}
