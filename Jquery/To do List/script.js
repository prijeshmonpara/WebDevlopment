debugger

$(document).ready(function () {
    // 1. Add Task on Button Click 
    function addTask() {
        let taskText = $('#taskInput').val();

        if (taskText !== '') {
            let newTask = `
    <li>
        <span>${taskText}</span>
        <button class="complete-btn">✔</button>
        <button class="delete-btn" title="Remove Task">&times;</button>
    </li>
               `;
            $('#taskList').append(newTask);
            $('#taskInput').val('');
        }
    }
    $('#addTaskBtn').click(function () {
        addTask();
    });

    $('#taskList').on('click', '.complete-btn', function () {
        $(this).parent().toggleClass('completed');
    });
    $('#taskList').on('click', '.delete-btn', function () {
        $(this).parent().remove();
    });
    //filters
    $(".filters button").click(function () {
        $(".filters button").removeClass("active");
        $(this).addClass("active");

        let filter = $(this).attr("id");

        $("#taskList li").each(function () {
            if (filter === "showAll") {
                $(this).show();
            } else if (filter === "showCompleted") {
                $(this).toggle($(this).hasClass("completed"));
            } else if (filter === "showActive") {
                $(this).toggle(!$(this).hasClass("completed"));
            }
        });
        $("#clearCompleted").click(function () {
            $("#taskList li.completed").remove();
        });
    });

});



