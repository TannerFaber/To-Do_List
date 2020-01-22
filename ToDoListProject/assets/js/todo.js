
$("ul").on("click","li",function () { 
    $(this).toggleClass("completed");
});

//click on X to delete

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#newTodo").keypress(function (event) { 
    if(event.which === 13){
        var todo = $(this).val();
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> "+todo+"</li>");

        $("#newTodo").val("");
    }
});

$("#symbolPlus").click(function(){
    $("#newTodo").fadeToggle();
})

$("ul").sortable();