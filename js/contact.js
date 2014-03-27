//init validation form
function initFormValidation() {
	var _errorClass = 'error';
	

		// catch form submit event
		_form.submit(function(){
			if(checkFields()) {
				_form.find('.error-legend').show();
				return false;
			}else{
				$.ajax({
					type:"POST",
					url:_form.attr('action'),
					data:_form.serialize(),
					dataType:'text',
					error:function() {
						alert("Internal error occured!");
					},
					success:function (data) {
						_form.find('.error-legend').empty().html('Your message was sent!').show();
					}
				});
				return false;
			}
		});
	});
}
