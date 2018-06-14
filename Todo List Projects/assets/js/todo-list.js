// Check off a todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click the X to delete a Todo
$("ul").on("click", "span", function(event){
	// Gets its parent aka the li the span is in
	$(this).parent().fadeOut(500, function(){
		// 'this' in here is the li not the span
		$(this).remove();
	});
	// Prevents further bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Gets the text inside the input
		var todoText = $(this).val();
		$(this).val("");
		// Make a new li in ul
		$("ul").append("<li> <span>X</span> " + todoText + "</li>");
	}
});