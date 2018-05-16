 function wypisz()
{
		
        var slowo = document.getElementById('slowo').value;
        var powtorzen = document.getElementById("powtorzen").value;
				var wygenerowane_slowo ="";
				for (i=1; i<=powtorzen; i++)
				{ 
					wygenerowane_slowo = wygenerowane_slowo + slowo +" ";
				}
				document.getElementById("wynik").innerHTML = wygenerowane_slowo;
	
}

$("button").click(function(){
    $("textarea").select();
    document.execCommand('copy');
    alert("Tekst został skopiowany");
});