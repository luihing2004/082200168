// 显示不同的section
function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// 创建新项目并添加到发布项目表格
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

        // 调用更新搜索项目表格的函数
        loadProjectsForSearch();
    } else {
        alert("Please fill in all fields!");
    }
}


// 在搜索项目页面显示可加入的项目
function loadProjectsForSearch() {
    var projectsTable = document.getElementById('projectsTable').getElementsByTagName('tbody')[0];
    var searchProjectsTable = document.getElementById('searchProjectsTable').getElementsByTagName('tbody')[0];

    searchProjectsTable.innerHTML = '';  // 清空之前的数据

    for (var i = 0; i < projectsTable.rows.length; i++) {
        var projectName = projectsTable.rows[i].cells[0].innerText;
        var projectMentor = projectsTable.rows[i].cells[1].innerText;
        var researchDirection = projectsTable.rows[i].cells[2].innerText;
        var joinedMax = projectsTable.rows[i].cells[3].innerText;

        var newRow = searchProjectsTable.insertRow();

        newRow.insertCell(0).innerText = projectName;
        newRow.insertCell(1).innerText = projectMentor;
        newRow.insertCell(2).innerText = researchDirection;
        newRow.insertCell(3).innerText = joinedMax;

        var actionCell = newRow.insertCell(4);

        // 申请加入按钮
        var joinButton = document.createElement("button");
        joinButton.innerText = "Apply to Join";
        joinButton.onclick = function() {
            alert("Applied to join " + projectName);
        };
        actionCell.appendChild(joinButton);
    }
}

// 修改项目
function editProject(row) {
    // 获取当前行的值
    var projectName = row.cells[0].innerText;
    var projectMentor = row.cells[1].innerText;
    var researchDirection = row.cells[2].innerText;
    var joinedMax = row.cells[3].innerText;

    // 将单元格内容变为可编辑的输入框
    row.cells[0].innerHTML = `<input type='text' value='${projectName}'>`;
    row.cells[1].innerHTML = `<input type='text' value='${projectMentor}'>`;
    row.cells[2].innerHTML = `<input type='text' value='${researchDirection}'>`;
    row.cells[3].innerHTML = `<input type='text' value='${joinedMax}'>`;

    // 将操作按钮变为“保存”
    var actionCell = row.cells[4];
    actionCell.innerHTML = ''; // 清空操作单元格内容

    var saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.onclick = function() {
        saveEditedProject(row);
    };
    actionCell.appendChild(saveButton);

    var cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.onclick = function() {
        cancelEditProject(row, projectName, projectMentor, researchDirection, joinedMax);
    };
    actionCell.appendChild(cancelButton);
}

// 保存修改后的项目
function saveEditedProject(row) {
    // 获取输入框的值并更新到表格中
    row.cells[0].innerText = row.cells[0].querySelector('input').value;
    row.cells[1].innerText = row.cells[1].querySelector('input').value;
    row.cells[2].innerText = row.cells[2].querySelector('input').value;
    row.cells[3].innerText = row.cells[3].querySelector('input').value;

    // 恢复操作按钮
    var actionCell = row.cells[4];
    actionCell.innerHTML = ''; // 清空操作单元格内容

    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function() {
        editProject(row);
    };
    actionCell.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        row.parentNode.removeChild(row); // 删除行
    };
    actionCell.appendChild(deleteButton);
}

// 取消编辑项目，恢复原始值
function cancelEditProject(row, projectName, projectMentor, researchDirection, joinedMax) {
    row.cells[0].innerText = projectName;
    row.cells[1].innerText = projectMentor;
    row.cells[2].innerText = researchDirection;
    row.cells[3].innerText = joinedMax;

    // 恢复操作按钮
    var actionCell = row.cells[4];
    actionCell.innerHTML = ''; // 清空操作单元格内容

    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function() {
        editProject(row);
    };
    actionCell.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        row.parentNode.removeChild(row); // 删除行
    };
    actionCell.appendChild(deleteButton);
}
