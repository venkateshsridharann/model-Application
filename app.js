window.onload = function js(){
$("button").click(function()
{

var firstname = $("#fn");
console.log(firstname)
console.log(firstname.val()) 

switch(firstname.val()) {
	case '':
	$('h1').attr('style',  { color: "red" });
	
	break;

    case 'Venkatesh':
        lastname = 'Sridharan'
        mn = 'G'
        break;
    case 'John':
        lastname = 'Cena';
        mn = 'Z';
        break;
	default:
		lastname = 'not given'
		mn = 'not given'
}

	document.getElementById("test").innerHTML = ( 'Welcome '+ firstname.val());
	
	
	$('#ln').val(lastname);
	$('#mn').val(mn);

})

}