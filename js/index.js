$(document).ready(function ($){
	$("#jC-container").jCategorizer();
	
	$("#jC-container2").jCategorizer({
	width: '65px',
	height: '65px'
	});
	
	$("#jC-container3").jCategorizer({
	width: '65px',
	height: '65px',
	iconPerRow: '2'
	});
	
	$("#jC-container4").jCategorizer({
	overlayType: 'blur',
	width: '65px',
	height: '65px',
	iconPerRow: '2'
	});
	
	$("#jC-container5").jCategorizer({
	overlayType: 'blur',
	width: '65px',
	height: '65px',
	background: '#ffb3b3',
	fontColor: '#FF0000',
	border: '2px dotted #FF0000',
	iconMargin: '3px',
	iconPerRow: '2'
	});
});