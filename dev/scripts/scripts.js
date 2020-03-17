$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

$(function(){

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
	 });
	/* placeholder*/
	
	/* components */
	if ($('.styled').length) {
		$('.styled').styler();
	}
	$('form').attr('autocomplete', 'off');
	
	new Vivus('my-svg', {type: "oneByOne", duration: 400, delay:0}); 
	if ($('.js-validate-form').length) {
		$('.js-validate-form').validate({
			html: true,
			rules: {
				password: {
					required: true,
					minlength: 8,
					required: "Неверный пароль"
				},
				confirm_password: {
					required: true,
					equalTo: "#password-change_new",
					required: "Неверный пароль"
				}
				},
				messages: {
					password: {
						required: "Неверный пароль"
					},
					confirm_password: {
						required: "Неверный пароль",
						equalTo: "Неверный пароль"
					}
				}
			});
		};
		$.validator.addMethod(
			"regex",
			function(value, element, regexp) {
				var re = new RegExp(regexp);
				return this.optional(element) || re.test(value);
			}
		);
		$("#password-change_new").rules("add", { regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})" })

	new WOW().init();
	$('.js-sign-up__btn').on('click', function(e){
		e.preventDefault();
		if ($('#email').hasClass('valid') && $('#password-change_new').hasClass('valid') && $('#confirm_password').hasClass('valid')){
			$(this).removeClass('error');
			$.ajax({
				url: './scripts/form.json',
				type: "GET",
				dataType: 'json',
				data: $(".js-validate-form").serialize(),
				success: function(result) {
					$(".sign-up__message").text(result.messageSuccess);
					$(".sign-up__message").addClass("active");
					$(".sign-up__form-box, #my-svg").addClass("hidden");
					$(".js-validate-form").find("input").val("");
					$(".js-validate-form").find("input").removeClass("valid");
				},
				error: function(xhr, resp, text) {
					console.log('error');
				}
			})
		}
		else {
			var $this = $(this);
			$this.addClass('error');
			setTimeout(function() {
				$this.removeClass('error');
			}, 1000);
		}
	});


	
	// new Vivus('my-svg', {duration: 200}, myCallback);
	
	/* components */
	
	

});


