//init page
$(function(){
	initClearInput();
	initFormValidation();
});
//init clear input
function initClearInput(){
	clearFormFields({
		clearInputs: true,
		clearTextareas: true,
		passwordFieldText: false,
		addClassFocus: "focus",
		filterClass: "default"
	});
}



//init validation form
function initFormValidation() {
	var _errorClass = 'error';
	var _regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var regPhone = /^[0-9\-\ \()]+$/;
	

	$('form').each(function(){
		var _form = $(this);
		function checkFields() {
			var _flag = false;
			//_form.find('.'+_errorClass).removeClass(_errorClass);
			_form.find('.error-legend').hide();

			// fields validation
			_form.find('input.required-email').each(function(){
				if(!_regEmail.test(this.value)) addError($(this));
			});
			_form.find('input.required, textarea.required').each(function(){
				if(!this.value.length || this.value == $(this).attr('alt')) addError($(this));
			});
			_form.find('input.required-phone').each(function(){
				if(!regPhone.test(this.value) || this.value == this.defaultValue ) addError($(this));
			});

			// error class adding
			function addError(_obj) {
				var attrId = _obj.attr('id');
				_form.find('label[for='+ attrId +']').addClass(_errorClass);
				_flag=true;
			}
			return _flag;
		}

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

//clear input module
function clearFormFields(o){
	if (o.clearInputs == null) o.clearInputs = true;
	if (o.clearTextareas == null) o.clearTextareas = true;
	if (o.passwordFieldText == null) o.passwordFieldText = false;
	if (o.addClassFocus == null) o.addClassFocus = false;
	if (!o.filterClass) o.filterClass = "default";
	if(o.clearInputs) {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++ ) {
			if((inputs[i].type == "text" || inputs[i].type == "password") && inputs[i].className.indexOf(o.filterClass) == -1) {
				inputs[i].valueHtml = inputs[i].value;
				inputs[i].onfocus = function ()	{
					if(this.valueHtml == this.value) this.value = "";
					if(this.fake) {
						inputsSwap(this, this.previousSibling);
						this.previousSibling.focus();
					}
					if(o.addClassFocus && !this.fake) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				inputs[i].onblur = function () {
					if(this.value == "") {
						this.value = this.valueHtml;
						if(o.passwordFieldText && this.type == "password") inputsSwap(this, this.nextSibling);
					}
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
				if(o.passwordFieldText && inputs[i].type == "password") {
					var fakeInput = document.createElement("input");
					fakeInput.type = "text";
					fakeInput.value = inputs[i].value;
					fakeInput.className = inputs[i].className;
					fakeInput.fake = true;
					inputs[i].parentNode.insertBefore(fakeInput, inputs[i].nextSibling);
					inputsSwap(inputs[i], null);
				}
			}
		}
	}
	if(o.clearTextareas) {
		var textareas = document.getElementsByTagName("textarea");
		for(var i=0; i<textareas.length; i++) {
			if(textareas[i].className.indexOf(o.filterClass) == -1) {
				textareas[i].valueHtml = textareas[i].value;
				textareas[i].onfocus = function() {
					if(this.value == this.valueHtml) this.value = "";
					if(o.addClassFocus) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				textareas[i].onblur = function() {
					if(this.value == "") this.value = this.valueHtml;
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
			}
		}
	}
	function inputsSwap(el, el2) {
		if(el) el.style.display = "none";
		if(el2) el2.style.display = "inline";
	}
}
//init validation form
function initFormValidation() {
	var _errorClass = 'error';
	var _form;
	$('form').each(function(){
		var _form = $(this);});

		// catch form submit event
		$(_form).submit(function(){
			if(checkFields()) {
				$(_form).find('.error-legend').show();
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
						$(_form).find('.error-legend').empty().html('Your message was sent!').show();
					}
				});
				return false;
			}
		});
	}