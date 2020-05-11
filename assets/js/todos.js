$("ul").on("click","li",function()
{
	if($(this).css("color")==="rgb(128, 128, 128)")
	{
		$(this).css({color:"black",textDecoration:"none"});
	}
	else
	{
		$(this).css(
		{
			color:"gray",
			textDecoration:"line-through"
		});
	}



});

/*Removing todos*/
$("ul").on("click","span",function(event){

event.stopPropagation();
$(this).parent().fadeOut(500,function()
{
	$(this).remove();
});

});

/*Adding todos*/
$("input[type='text']").keypress(function(e) {
	if(e.which==13)
	{
		var str=$(this).val();
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span>"+str+"</li>");
		$("input").val("");
	}
	
	// body...
});
$(".fa-plus").click(function()
{
	$("input").fadeToggle();

});