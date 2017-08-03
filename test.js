


function changeColor(mycolor)
{
	var mycolor = document.getElementById("input1").value; 
	
	var text = document.getElementById("p1").style.color=mycolor;
	
	
}


			
			function checkColor(mycolor)
			{
				var mycolor = document.getElementById("input1").value; 		
				
				if ((mycolor=="red") || (mycolor=="blue")  || (mycolor=="yellow") || (mycolor=="green") || (mycolor=="pink"))
				{
					
						
						alert("good");
						
						
				}
					
					else
					{
						
						alert("invalid");
						
									
						
					}
					
					
			}
			
			
		
			