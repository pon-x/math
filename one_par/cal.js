	var num=0;
	var hit=0;			

	function go(){	
	
		var cvs = document.getElementById("cvs2");
		var ctx = cvs.getContext("2d");	
		var flag = 0;

		

			  
			  
		
		for(var i=0;i<100;i++){
			
			x = Math.floor(Math.random()*101)-1;
			
			if (x==0){
				flag = 1;
				break;
			}

		}
		
		num = num + 1;
		
		if (flag==1){
			hit = hit +1;
		}

			ctx.clearRect(0,0, 500, 200);			
			ctx.font = "15px 'メイリオ'";
			ctx.fillStyle='black';
			ctx.fillText("試行回数 ： "+ num,0,30);
			ctx.fillText("1回以上当たった回数 ： "+ hit,0,50);
			ctx.fillStyle='red';
			ctx.fillText("1回以上当たった確率 ： "+ hit / num,0,70);
			
			
			
			var angleA = 360 * ( hit / num ) ;
			var angleB = 360 * ( 1 - ( hit / num ) ) ;
			var angleC = 360 * 0.634 ;
			var angleD = 360 * (1 - 0.634) ;
			
			ctx.beginPath () ;
			ctx.arc( 200, 200, 100, (0 - 90) * Math.PI / 180, (angleA - 90) * Math.PI / 180, false ) ;
			ctx.lineTo( 200, 200 ) ;
			ctx.fillStyle = "rgb(255,100,100)" ;
			ctx.fill() ;

			ctx.beginPath () ;
			ctx.arc( 200, 200, 100, (angleA - 90) * Math.PI / 180, ((angleA + angleB) - 90) * Math.PI / 180, false ) ;
			ctx.lineTo( 200, 200 ) ;
			ctx.fillStyle = "rgb(100,100,255)"  ;
			ctx.fill() ;
			
			ctx.beginPath () ;
			ctx.arc( 200, 200, 100, (0 - 90) * Math.PI / 180, (angleC - 90) * Math.PI / 180, false ) ;
			ctx.lineTo( 200, 200 ) ;
			ctx.fillStyle = "black" ;
			ctx.stroke();
			
			ctx.beginPath () ;
			ctx.arc( 200, 200, 100, (angleC - 90) * Math.PI / 180, ((angleC + angleD) - 90) * Math.PI / 180, false ) ;
			ctx.lineTo( 200, 200 ) ;
			ctx.fillStyle = "black" ;
			ctx.stroke();
			
			
			
			
			requestAnimationFrame(go);
	}
	

	
