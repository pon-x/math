	
	
	function graph_start(){
			  var cvs = document.getElementById("cvs");
			  var ctx = cvs.getContext("2d");		
			  ctx.fillStyle = "rgb(0, 0, 0)";
			  ctx.fillRect(0, 0, 650, 750);
			  ctx.fillStyle = "rgb(255, 255, 255)";
			  ctx.fillRect(50, 50, 550, 650);
			  ctx.fillRect(50, 0, 50, 50);
			  ctx.fillRect(550, 700, 50, 50);
			  
			  ctx.fillStyle = "rgb(0, 0, 0)";
			  for (var j=1;j<=5;j++){
				  for (var i=1;i<=6;i++){
					  ctx.fillRect(j*100, i*100, 50, 50);
					  ctx.fillRect(j*100, i*100, 50, 50);
					  ctx.fillRect(j*100, i*100, 50, 50);
				  }
			  }
	}
	
	function graph_anime(){
		

			
			var cvs = document.getElementById("cvs");
			var ctx = cvs.getContext("2d");	
			ctx.clearRect(0,0, 1000, 1000);
			graph_start();
			
			ctx.fillStyle = "rgb(255, 0, 0)";
			for (var j=1;j<=5;j++){
				  for (var i=1;i<=6;i++){
					  x = Math.floor(Math.random()*3);
					  if (x==0){
						  ctx.fillRect(j*100 - 50, i*100, 50, 50);
						  ctx.fillRect(j*100 - 50, i*100, 50, 50);
						  ctx.fillRect(j*100 - 50, i*100, 50, 50);
					  }else if (x==1){
						  ctx.fillRect(j*100 + 50, i*100, 50, 50);
						  ctx.fillRect(j*100 + 50, i*100, 50, 50);
						  ctx.fillRect(j*100 + 50, i*100, 50, 50);
					  }else if (x==2){
						  ctx.fillRect(j*100, i*100 - 50, 50, 50);
						  ctx.fillRect(j*100, i*100 - 50, 50, 50);
						  ctx.fillRect(j*100, i*100 - 50, 50, 50);
					  }else if (x==3){
						  ctx.fillRect(j*100, i*100 + 50, 50, 50);
						  ctx.fillRect(j*100, i*100 + 50, 50, 50);
						  ctx.fillRect(j*100, i*100 + 50, 50, 50);
					  }
				  }
			  }
			
		}
		
