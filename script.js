function showSection(sectionId) {
    // 隐藏所有的section
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // 显示选中的section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// 创建新项目并添加到表格
function createProject() {
    var title = document.getElementById('projectTitle').value;
    var description = document.getElementById('projectDescription').value;
    var requirements = document.getElementById('projectRequirements').value;

    if (title && description && requirements) {
        var table = document.getElementById('projectsTable').getElementsByTagName('tbody')[0];
        
        // 创建新行
        var newRow = table.insertRow();

        newRow.insertCell(0).innerText = title; // 项目名称
        newRow.insertCell(1).innerText = "Mentor Name"; // 项目导师
        newRow.insertCell(2).innerText = "Research Direction"; // 研究方向
        newRow.insertCell(3).innerText = "0/5"; // 已加入人数/最多人数

        // 创建删除按钮
        var deleteCell = newRow.insertCell(4);
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            table.deleteRow(newRow.rowIndex - 1);
        };
        deleteCell.appendChild(deleteButton);

        // 清空输入框
        document.getElementById('projectTitle').value = '';
        document.getElementById('projectDescription').value = '';
        document.getElementById('projectRequirements').value = '';
    } else {
        alert("Please fill in all fields!");
    }
}
