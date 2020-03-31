//to cross out a to do
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function(event){ 
    var todo = $("input[type='text'").val();
    if(event.which == 13){
        $("input[type='text'").val("");
        $("ul").append('<li><span><i class="fa fa-minus-circle" aria-hidden="true"></i></span> '+todo+'</li>');
    }
});
$(".fa-pencil").click(function(){
    $("input").fadeToggle();
})