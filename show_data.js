
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datepicker").setAttribute("max", today);
document.getElementById("datepicker").setAttribute("value", today);
function search() {
    var new_date = document.getElementById("datepicker").value
	console.log(new_date)
    window.location.replace('/anpr/show_data?date='+new_date);
}
