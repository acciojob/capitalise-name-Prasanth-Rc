//your JS code here. If required.
function capitalise(){
	var inputField = document.getElementById('fname');
	inputField.value = inputField.value.toUpperCase(); 
}

window.onload = function() {
  document.getElementById('fname').onblur = capitalizeName;
};