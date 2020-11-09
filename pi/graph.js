	
	
	function graph_start(){
			  var cvs = document.getElementById("cvs");
			  var ctx = cvs.getContext("2d");		
			  _in=0;
			  _out=0;
			  ctx.strokeStyle="green";
			  ctx.beginPath();
			  ctx.arc(200, 200, 200, 0, Math.PI*2, false);
			  ctx.stroke();
			  
			  ctx.strokeRect(0,0,400,400);
	}
	
	function graph_anime(){
		

			
			var cvs = document.getElementById("cvs");
			var ctx = cvs.getContext("2d");	

			for(var i=0;i<100;i++){
				
				x = Math.floor(Math.random()*400);
				y = Math.floor(Math.random()*400);
				
				
				
				ctx.beginPath();
				
				if((x-200)*(x-200)+(y-200)*(y-200)<40000){
					ctx.fillStyle='rgb(255,0,0)';			
					_in=_in+1;
				}else if((x-200)*(x-200)+(y-200)*(y-200)>40000){
					ctx.fillStyle='rgb(0,0,255)';
					_out=_out+1;
				}
				
				ctx.fillRect(x,y,1,1);
				ctx.fill();	
				
				
				
			}

			ctx.clearRect(0,400, 500, 500);			
			ctx.font = "15px 'メイリオ'";
			ctx.fillStyle='red';
			ctx.fillText("A.内部の点の数(赤点) ： "+ _in　+　"個",10,420);
			ctx.fillStyle='blue';
			ctx.fillText("B.外部の点の数(青点) ： "+ _out　+　"個",10,440);
			ctx.fillStyle='black';
			ctx.fillText("円周率 4 × A ÷ ( A + B ) ： "+(4 * _in / (_in + _out)),10,460);
			ctx.fill();
			requestAnimationFrame(graph_anime);
		}
		
