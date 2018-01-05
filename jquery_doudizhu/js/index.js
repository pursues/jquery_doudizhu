$(function(){
	// 背景音乐
	// var player_bg = document.querySelector();
	var player_voice = document.querySelector('#voice');
	var player_sound = document.querySelector('#sound');
	var jifen = 50;		//设定底分为50
	var play_1_jifen = 10000;
	var play_2_jifen = 10000;
	var play_3_jifen = 10000;

	var onclick = 0;
	var all_poker=Array('14_0','14_1');	//先生成大王和小王
	for(var i=1;i<=13;i++){
		for(var j=0;j<=3;j++){
			all_poker.push(i+'_'+j);	//生成52张的扑克牌
		}
	}
	//三位玩家的初始牌数据
	// 使用对象来保用户的信息
	var play_1 = {'name':'alex','poker':[]};	//玩家1
	var play_2 = {'name':'rose','poker':[]};	//玩家2
	var play_3 = {'name':'jack','poker':[]};	//玩家3

	var dz=null;//表示谁是地主

	//生成牌组
	for(var i=0;i<54;i++){
		$('.mid_top .all_poker').append('<li class="back"></li>');
		$('.all_poker li:last').css({
			top:'-'+i+'px'
		});
	}

	var att=new Array;
		function ass(){
			for(var i=1;i<=54;i++){
				att.push(i);

			}
			console.log(att);
		}
		ass();

	$('body').on('click','.all_poker li',function(){
		onclick++;
		//打乱牌组数据的数组顺序,相当于洗牌
		all_poker=all_poker.sort(function(x,y){
			return Math.random()-0.5;
		});
		if (onclick == 1) {
			clearPoker();	//开始发牌
			$('body').off('click','.all_poker li');
		}
		
		setTimeout(function(){ dz = qdz()},7000);
		// setTimeout(function(){ dz = qdz()},1900);   //测试
	});

	// ==============切牌动画==============
//=====感觉好烂啊========
	// function clearPoker(){
	// 	var poker_html = $('.mid_top').html();
	// 	// var right = setInterval(function(){//右边拉开
	// 	// 	setTimeout(function(){
	// 	// 		var rt = setInterval(function(){//缩小
	// 	// 			for(var i=0;i<54;i+=2){
	// 	// 				$('.all_poker li').eq(i).css({'transform':'translateX(-260px) translateY(-52px) translateZ(-260px)','transition-duration':'0.3s'});
	// 	// 			}
	// 	// 			clearInterval(rt);
	// 	// 		},300);
	// 	// 	},600);


	// 	// 	setTimeout(function(){
	// 	// 		var rtr = setInterval(function(){//旋转
	// 	// 			for(var i=0;i<54;i+=2){
	// 	// 				$('.all_poker li').eq(i).css({'transform':' rotateY(-'+i*10+'deg) rotateZ('+i*10+'deg) translateX('+i*10+'px) translateY(-'+i*3+'px) translateZ(-'+i*3+'px)','transition-duration':'0.3s'});
	// 	// 			}
	// 	// 			clearInterval(rtr);
	// 	// 		},300);
	// 	// 	},900);
		

	// 		setTimeout(function(){
	// 			var rtnr = setInterval(function(){//继续旋转
	// 				for(var i=0;i<54;i+=2){
	// 					$('.all_poker li').eq(i).css({'transform':'rotateY(-'+(i*10+20)+'deg) rotateZ('+(i*10+20)+'deg) translateX('+i*10+'px) translateY(-'+(i*3+10)+'px) translateZ(-'+(i*3+10)+'px)','transition-duration':'6s'});
	// 				}
	// 				clearInterval(rtnr);
				
	// 			},500);	
	// 		},900);
	// 	// clearInterval(right);
	// 	// },300);

	// 	//叠牌后状态1：translateX(527px) translateY(136px) translateZ(77px)  
	// 	// 叠牌后状态2： translateX(0px) translateY(-117px) translateZ(-444px) 
	// 	// 叠牌后状态3：translateX(-527px) translateY(136px) translateZ(77px)   
	// 	// 叠牌后状态4：translateX(0px) translateY(173px) translateZ(176px)
	// 	setTimeout(function(){
	// 		var n=53;
	// 		var turnar = setInterval(function(){
	// 			if(n<=0){
	// 				$('.all_poker li').eq(n).css({'top':'0px','transform':' rotateY(90deg) translateX(527px) translateY(136px) translateZ(77px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
	// 			}
				
	// 			n--
	// 		},100);
			
	// 	},200);

	// 	setTimeout(function(){
	// 		var n=53;
	// 		var turnar = setInterval(function(){
	// 			if(n<=0){
	// 				$('.all_poker li').eq(n).css({'top':'0px','transform':'rotateY(180deg) translateX(0px) translateY(-117px) translateZ(-444px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
	// 			}
				
	// 			n--
	// 		},100);
			
	// 	},1000);

	// 	setTimeout(function(){
	// 		var n=53;
	// 		var turnar = setInterval(function(){
	// 			if(n<=0){
	// 				$('.all_poker li').eq(n).css({'top':'0px','transform':'rotateY(270deg) translateX(-527px) translateY(136px) translateZ(77px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
	// 			}
				
	// 			n--
	// 		},100);
			
	// 	},2000);

	// 	setTimeout(function(){
	// 		var n=53;
	// 		var turnar = setInterval(function(){
	// 			if(n<=0){
	// 				$('.all_poker li').eq(n).css({'top':'0px','transform':' rotateY(360deg) translateX(0px) translateY(173px) translateZ(176px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
	// 			}
				
	// 			n--
	// 		},100);
			
	// 	},3000);


	// 	//移动回原位
	// 	setTimeout(function(){
	// 		var n=53;
	// 		var tb = setInterval(function(){
	// 			if(n%2==0){
	// 				$('.all_poker li').eq(n).css({'top':'-'+n+'px','transform':' rotateZ(-360deg)  translateX(0px) translateY(0px) translateZ(0px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
	// 			}
	// 			else{
	// 				$('.all_poker li').eq(n).css({'top':'-'+n+'px','transform':' rotateY(360deg)  translateX(0px) translateY(0px) translateZ(0px)','transition-duration':'0.3s','transition-timing-function':'ease-in-out'});
	// 			}
				
	// 			n--
	// 		},100);
			
	// 	},4000);
	// 	setTimeout(function(){
	// 		var n=53;
	// 		var tb = setInterval(function(){
	// 			if(n>=0){
	// 				$('.all_poker li').eq(n).css({'top':'-'+n+'px','transform':'   translateX(0px) translateY(0px) translateZ(0px)','transition-duration':'0.1s'});
	// 			}
				
	// 			n--
	// 		},10);
			
	// 	},5000);

		



	// 	// setTimeout(function(){	//旋转后叠牌
	// 	// 	var n=0;
	// 	// 		var brr = setInterval(function(){
	// 	// 			if(n%2==0){
	// 	// 				$('.all_poker li').eq(n).css({'transform':' translateX(-178px) translateY(701px) translateZ(-248px)','transition-duration':'0.08s'});

	// 	// 		}else {
	// 	// 			$('.all_poker li').eq(n).css({'transform':' translateX(-178px) translateY(701px) translateZ(-248px)','transition-duration':'0.05s'});
	// 	// 		}
	// 	// 		n++
			
	// 	// 	},100);
	// 	// },1700);

		
	
	
	// 	// var left = setInterval(function(){//左边拉开
	// 	// 	setTimeout(function(){
	// 	// 		var lt = setInterval(function(){//缩小
	// 	// 			for(var j=1;j<54;j+=2){
	// 	// 				$('.all_poker li').eq(j).css({'transform':'translateX(-260px) translateY(-52px) translateZ(-260px)','transition-duration':'0.3s'});
	// 	// 			}
	// 	// 			clearInterval(lt);
	// 	// 		},300);
				
	// 	// 	},600);

	// 	// 	setTimeout(function(){
	// 	// 		var ltr = setInterval(function(){//旋转
	// 	// 			for(var j=1;j<54;j+=2){
	// 	// 				$('.all_poker li').eq(j).css({'transform':' rotateY('+j*10+'deg) rotateZ(-'+j*10+'deg) translateX(-'+j*10+'px) translateY(-'+j*3+'px) translateZ(-'+j*3+'px)','transition-duration':'0.3s'});
	// 	// 			}
	// 	// 			clearInterval(ltr);
	// 	// 		},300);
	// 	// 	},900);

	// 	// 	setTimeout(function(){
	// 	// 		var ltnr = setInterval(function(){//继续旋转
	// 	// 			for(var j=1;j<54;j+=2){
	// 	// 				$('.all_poker li').eq(j).css({'transform':' rotateY('+(j*10+20)+'deg) rotateZ(-'+(j*10+20)+'deg) translateX(-'+j*10+'px) translateY(-'+(j*3+10)+'px) translateZ(-'+(j*3+10)+'px)','transition-duration':'6s'});
	// 	// 			}
	// 	// 			clearInterval(ltnr);
	// 	// 		},500);
	// 	// 	},900);
			
	// 	// 	clearInterval(left);
		
	// 	//  },300);

	// 	setTimeout(function(){
	// 		$('.mid_top ul').remove();
	// 		$('.mid_top').html(poker_html);
	// 	},1500);


	// 		setTimeout(function(){
	// 		$('.mid_top ul').remove();
	// 		$('.mid_top').html(poker_html);
	// 		},20000);

	// 		setTimeout(function(){
	// 			start();
	// 		},20000);
	// }
	
	function clearPoker(){
		// 先保存原牌组的HTML代码
		var poker_html = $('.mid_top').html();
		// 1、删除原牌组
		$('.mid_top ul').remove();

		// 2、生成新的6组牌
		for(var j=0; j<6; j++){
			var ul = '<ul class="all_poker" style="top:'+(-232*j)+'px">';
			for(var i=0; i<9; i++){
				ul += '<li class="back" style="top:'+i+'px"></li>'
			}
			ul += '</ul>';
			$('.mid_top').append(ul);
		}
		var i=0;
		setTimeout(function outs(){
			$('.all_poker').eq(0).find('li').eq(i).animate({top:'550px'},100);
			$('.all_poker').eq(1).find('li').eq(i).animate({top:'550px',left:'650px'},100);
			$('.all_poker').eq(2).find('li').eq(i).animate({top:'550px',right:'650px'},100);
			$('.all_poker').eq(3).find('li').eq(i).animate({top:'-50px'},100);
			$('.all_poker').eq(4).find('li').eq(i).animate({top:'-50px',left:'650px'},100);
			$('.all_poker').eq(5).find('li').eq(i).animate({top:'-50px',right:'650px'},100);
			i++;
			if(i<9){
				setTimeout(function(){
					outs();
				},50)
			}
		},100)

		setTimeout(function one(){
			$('.all_poker').eq(0).find('li').eq(i).animate({top:'550px',right:'650px'},100).animate({top:'-50px',right:'650px'},100).animate({top:'-50px',right:'0px'},100).animate({top:'-50px',left:'650px'},100).animate({top:'550px',left:'650px'},100).animate({top:'550px',left:'0px'},100);
			$('.all_poker').eq(1).find('li').eq(i).animate({top:'550px',left:'0px'},100);
			$('.all_poker').eq(2).find('li').eq(i).animate({top:'-50px',right:'650px'},100).animate({top:'-50px',right:'0px'},100).animate({top:'-50px',left:'650px'},100).animate({top:'550px',left:'650px'},100).animate({top:'550px',left:'0px'},100);
			$('.all_poker').eq(3).find('li').eq(i).animate({top:'-50px',left:'650px'},100).animate({top:'550px',left:'650px'},100).animate({top:'550px',left:'0px'},100);
			$('.all_poker').eq(4).find('li').eq(i).animate({top:'550px',left:'650px'},100).animate({top:'550px',left:'0px'},100);
			$('.all_poker').eq(5).find('li').eq(i).animate({top:'-50px',right:'0px'},100).animate({top:'-50px',left:'650px'},100).animate({top:'550px',left:'650px'},100).animate({top:'550px',left:'0px'},100);
			i--;
			if(i>=0){
				setTimeout(function(){
					one();
				},50)
			}
		},700)

		setTimeout(function comeup(){
			$('.all_poker li').eq(i).css({'top':'0px','transform':' rotateY(90deg) translateX(527px) translateY(136px) translateZ(77px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
			$('.all_poker li').eq(i).css({'top':'0px','transform':'rotateY(180deg) translateX(0px) translateY(-117px) translateZ(-444px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
			$('.all_poker li').eq(i).css({'top':'0px','transform':'rotateY(270deg) translateX(-527px) translateY(136px) translateZ(77px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
			$('.all_poker li').eq(i).css({'top':'0px','transform':' rotateY(360deg) translateX(0px) translateY(-50px) translateZ(176px)','transition-duration':'0.5s','transition-timing-function':'ease-in-out'});
			i++;
			if(i<54){
					setTimeout(function(){
						comeup();
					},10)
				}
		},2000)

		setTimeout(function(){
			for(var i=0;i<54;i++){
				var x = Math.random()*10;
				var y = Math.random()*10-5;
				$('.all_poker').find('li').eq(i).animate({top:x*50-50+'px',left:y*100+'px',},100);
			}
		},2500)

		
		setTimeout(function back(){
			$('.all_poker').find('li').eq(i).animate({top:'-10px',left:'0px'},50);
			i--;
			if(i>=0){
				setTimeout(function(){
					back();
				},10)
			}
		},3200)

		

		setTimeout(function(){
			$('.mid_top ul').remove();
			$('.mid_top').html(poker_html);
		},4800);

		setTimeout(function(){
			start();
		},4800);
	}
	/*=====================发牌函数======================*/
	function start(){
		var i=0;//发的是第几轮的牌
		var m=0;//发的是第几张的牌
		var int=setInterval(function(){
			//先发给左边的玩家
			setTimeout(function(){
				$('.all_poker li:last').animate({top:'200px',left:'-500px'},20);
				setTimeout(function(){$('.all_poker li:last').remove()},20);

				play_1.poker.push(all_poker[m++]);

				var poker_html=makePoker(play_1.poker[play_1.poker.length-1]);
				$('.play_1').append(poker_html);
				$('.play_1 li:last').css({top:(35*i)+'px'});
				$('.play_1').css({top:-(2*i)+'px'});
				play_1.poker=pokerSort(play_1.poker);
				$('.play_1 li').remove();	//删除原来的牌
				//边发牌边排序，再生成新的牌
				for(var i=0;i<play_1.poker.length;i++){
					var poker_html_1 = makePoker(play_1.poker[i]);
					$('.play_1').append(poker_html_1);
					$('.play_1 li:last').css({top:(35*(i+1))+'px'});
					$('.play_1').css({top:-(2*i)+'px'});
				}
			},30);

			//再发给中间的玩家
			setTimeout(function(){
				$('.all_poker li:last').animate({top:'400px'},20);
				setTimeout(function(){$('.all_poker li:last').remove()},20);

				play_2.poker.push(all_poker[m++]);

				var poker_html=makePoker(play_2.poker[play_2.poker.length-1]);
				$('.play_2').append(poker_html);

				$('.play_2 li:last').css({left:(40*i)+'px'});

				$('.play_2').css({left:-(20*i)+'px'});

				play_2.poker=pokerSort(play_2.poker);

				$('.play_2 li').remove();	//删除原来的牌

				//边发牌边排序，再生成新的牌
				for(var i=0;i<play_2.poker.length;i++){
					var poker_html_2 = makePoker(play_2.poker[i]);
					$('.play_2').append(poker_html_2);
					$('.play_2 li:last').css({left:(40*(i+1))+'px'});
					$('.play_2').css({left:-(20*i)+'px'});
				}
			},60);

			//最后发给右边的玩家
			setTimeout(function(){
				$('.all_poker li:last').animate({top:'200px',left:'500px'},20);
				setTimeout(function(){$('.all_poker li:last').remove()},20);

				play_3.poker.push(all_poker[m++]);

				var poker_html=makePoker(play_3.poker[play_3.poker.length-1]);
				$('.play_3').append(poker_html);

				$('.play_3 li:last').css({top:(30*i)+'px'});

				$('.play_3').css({top:-(2*i)+'px'});

				play_3.poker=pokerSort(play_3.poker);

				$('.play_3 li').remove();	//删除原来的牌

				//边发牌边排序，再生成新的牌
				for(var i=0;i<play_3.poker.length;i++){
					var poker_html_3 = makePoker(play_3.poker[i]);
					$('.play_3').append(poker_html_3);
					$('.play_3 li:last').css({top:(35*(i+1))+'px'});
					$('.play_3').css({top:-(2*i)+'px'});
				}
			},90);
			i++;
			if(i>=17){
				//当牌大于17张时，停止发牌
				clearInterval(int);
			}
		},100);
	}

	//生成牌面
	function makePoker(data){
		var poker_html = '<li style="width: 85px; height: 110px; background: url(./tu/cards/'+data+'.png) no-repeat top; background-size:100%; "data-poker="'+data+'"></li>';

		return poker_html;
	}

	// 抢地主的函数
	var a = 0;				//记录玩家抢地主的积分数
	var c = 0;
	var n = 0;								// 记录已经经几位玩家进行抢地主
	function qdz(){
		// 先随机谁开始抢地主
		var f = Math.round(Math.random()*2);
		var h = f;
		var x = 0;
		n = 0;
		$('.h1').eq(f).css({'display':'block'});
		$('.h2').eq(f).css({'display':'block'});
		$('.h3').eq(f).css({'display':'block'});
		$('.h4').eq(f).css({'display':'block'});

		qdzTimeOver(h);
		$('body').on('click', '.qdz h1', function(){
			var v = parseInt($(this).attr('data-value'));
			// v 大于0说明该玩家抢了地主
			if (v > 0) {
				jifen = jifen * parseInt($(this).attr('index'));
				console.log('jifen: ' + jifen);
				x++;
				if (x == 1) {
					$('.content #sound').attr('src', './Sound/Woman_Order.ogg');
					player_sound.play();
				}else{
					$('.content #sound').attr('src', './Sound/Woman_Rob2.ogg');
					player_sound.play();
				}
				console.log('n: ' + n)
				if(x < 3){
					if (a < parseInt($(this).attr('index'))) {
						a = parseInt($(this).attr('index'));
						c = parseInt($(this).attr('data-value'));
					} else{
						a = a;
						c = c;
					}
					console.log('a :' + a);
					console.log('c: ' + c);
					$('.time').eq(f).css({'display':'none'})
					f = (++f >2)?0:f;
					clearInterval(timeconunt);
					qdzTimeOver(f);
					$('.qdz').css({'display':'none'});
					$('.qdz').eq(f).css({'display':'block'});
					$('.h1').eq(f).css({'display':'block'});
					$('.h2').eq(f).css({'display':'block'});	
					$('.h3').eq(f).css({'display':'block'});	
					$('.h4').eq(f).css({'display':'block'});	
				}else{
					for(var i = all_poker.length-1; i>all_poker.length-4; i--){
						var li_html = makePoker(all_poker[i]);
						var top = $('.all_poker li:first').css('top');
						var left= $('.all_poker li:first').css('left');
						$('.all_poker li:first').remove();
						$('.all_poker').append(li_html);
						$('.all_poker li:last').css({'top':top,'left':left});
					}

					// 确定谁是地主，把最三张牌打开
					$('.all_poker li').eq(0).animate({'left':'-200px','top':'0px'},200).animate({'top':'-50px'},200);
					$('.all_poker li').eq(1).animate({'left':'200px','top':'0px'},200).animate({'top':'-50px'},200);
					$('.all_poker li').eq(2).animate({'left':'0px'},200).animate({'top':'-50px'},200);
					// $('.all_poker li').animate({'top':'-50px'},200);

					// return v;
					// 使用多路径选择语句，把牌发给对应的玩家
					if(c == 0){
						c = parseInt($(this).attr('data-value'));
					}
					console.log('c: ' + c);
					switch(c){
						case 1:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_1.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}
							play_1.poker = pokerSort(play_1.poker);
							$('.play_1 li').remove();	//删除原来的牌
							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_1.poker.length;i++){
								var poker_html_1 = makePoker(play_1.poker[i]);
								if(play_1.poker[i]==dzpoker[0] || play_1.poker[i]==dzpoker[1] ||play_1.poker[i]==dzpoker[2]){
									$('.play_1').append(poker_html_1);
									$('.play_1 li:last').css({top:(35*(i+1))+'px'});
									$('.play_1 li:last').attr('class','select');
									$('.play_1').css({top:-(2*i)+'px'});
									var data_poker = $('.play_1 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}
								else{
									
									$('.play_1').append(poker_html_1);
									$('.play_1 li:last').css({top:(35*(i+1))+'px'});
									$('.play_1').css({top:-(2*i)+'px'});
								}
								
							}
						break;
						case 2:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_2.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}

							play_2.poker = pokerSort(play_2.poker);

							$('.play_2 li').remove();	//删除原来的牌

							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_2.poker.length;i++){
								if(play_2.poker[i]==dzpoker[0] || play_2.poker[i]==dzpoker[1] ||play_2.poker[i]==dzpoker[2]){
									var poker_html_2 = makePoker(play_2.poker[i]);
									$('.play_2').append(poker_html_2);
									$('.play_2 li:last').css({left:(40*(i+1))+'px'});
									$('.play_2 li:last').attr('class','select');
									$('.play_2').css({left:-(20*i)+'px'});
									var data_poker = $('.play_2 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}else{
									var poker_html_2 = makePoker(play_2.poker[i]);
									$('.play_2').append(poker_html_2);
									$('.play_2 li:last').css({left:(40*(i+1))+'px'});
									$('.play_2').css({left:-(20*i)+'px'});
								}
								
							}
						break;
						case 3:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_3.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}

							play_3.poker = pokerSort(play_3.poker);
							
							$('.play_3 li').remove();	//删除原来的牌

							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_3.poker.length;i++){
								if(play_3.poker[i]==dzpoker[0] || play_3.poker[i]==dzpoker[1] ||play_3.poker[i]==dzpoker[2]){
									var poker_html_3 = makePoker(play_3.poker[i]);
									$('.play_3').append(poker_html_3);
									$('.play_3 li:last').css({top:(35*(i+1))+'px'});
									$('.play_3 li:last').attr('class','select');
									$('.play_3').css({top:-(2*i)+'px'});
									var data_poker = $('.play_3 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}else{
									var poker_html_3 = makePoker(play_3.poker[i]);
									$('.play_3').append(poker_html_3);
									$('.play_3 li:last').css({top:(35*(i+1))+'px'});
									$('.play_3').css({top:-(2*i)+'px'});
								}
							}
						break;
					}
					clearInterval(timeconunt);
					$('.time').eq(v-1).css({'display':'none'});
					$('.h1').eq(v-1).css({'display':'none'});
					$('.h2').eq(v-1).css({'display':'none'});
					$('.h3').eq(v-1).css({'display':'none'});
					$('.h4').eq(v-1).css({'display':'none'});

					$('span').css("display","block");
					$('span').eq(c-1).css({
						'background':'url(./tu/dizu.png) center no-repeat',
						'background-size': '100%',
					});
					$('.qdz').hide();
					startGame(c);		// 调用开始打牌函数
				}
				
			}else{
				x++;
				n++;						// 每个不抢主地的人，n就加1
				if (n == 1 && x == 1) {
					$('.content #sound').attr('src', './Sound/Woman_NoOrder.ogg');
				} else {
					$('.content #sound').attr('src', './Sound/Woman_NoRob.ogg');
				}
				player_sound.play();
				if(x > 2 && n < 3){
					for(var i = all_poker.length-1; i>all_poker.length-4; i--){
						var li_html = makePoker(all_poker[i]);
						var top = $('.all_poker li:first').css('top');
						var left= $('.all_poker li:first').css('left');
						$('.all_poker li:first').remove();
						$('.all_poker').append(li_html);
						$('.all_poker li:last').css({'top':top,'left':left});
					}

					// 确定谁是地主，把最三张牌打开
					$('.all_poker li').eq(0).animate({'left':'-200px','top':'0px'},200).animate({'top':'-50px'},200);
					$('.all_poker li').eq(1).animate({'left':'200px','top':'0px'},200).animate({'top':'-50px'},200);
					$('.all_poker li').eq(2).animate({'left':'0px'},200).animate({'top':'-50px'},200);
					// $('.all_poker li').animate({'top':'-50px'},200);

					// return v;
					// 使用多路径选择语句，把牌发给对应的玩家
					console.log('c: ' + c);
					switch(c){
						case 1:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_1.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}
							play_1.poker = pokerSort(play_1.poker);
							$('.play_1 li').remove();	//删除原来的牌
							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_1.poker.length;i++){
								var poker_html_1 = makePoker(play_1.poker[i]);
								if(play_1.poker[i]==dzpoker[0] || play_1.poker[i]==dzpoker[1] ||play_1.poker[i]==dzpoker[2]){
									$('.play_1').append(poker_html_1);
									$('.play_1 li:last').css({top:(35*(i+1))+'px'});
									$('.play_1 li:last').attr('class','select');
									$('.play_1').css({top:-(2*i)+'px'});
									var data_poker = $('.play_1 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}
								else{
									$('.play_1').append(poker_html_1);
									$('.play_1 li:last').css({top:(35*(i+1))+'px'});
									$('.play_1').css({top:-(2*i)+'px'});
								}
								
							}
						break;
						case 2:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_2.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}

							play_2.poker = pokerSort(play_2.poker);

							$('.play_2 li').remove();	//删除原来的牌

							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_2.poker.length;i++){
								if(play_2.poker[i]==dzpoker[0] || play_2.poker[i]==dzpoker[1] ||play_2.poker[i]==dzpoker[2]){
									var poker_html_2 = makePoker(play_2.poker[i]);
									$('.play_2').append(poker_html_2);
									$('.play_2 li:last').css({left:(40*(i+1))+'px'});
									$('.play_2 li:last').attr('class','select');
									$('.play_2').css({left:-(20*i)+'px'});
									var data_poker = $('.play_2 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}else{
									var poker_html_2 = makePoker(play_2.poker[i]);
									$('.play_2').append(poker_html_2);
									$('.play_2 li:last').css({left:(40*(i+1))+'px'});
									$('.play_2').css({left:-(20*i)+'px'});
								}
								
							}
						break;
						case 3:
							var dzpoker=Array();	//地主牌
							for(var i = all_poker.length-1; i>all_poker.length-4; i--){
								play_3.poker.push(all_poker[i]);	// 把最后三张牌数据放到对应玩家数据中
								dzpoker.push(all_poker[i]);	//保存地主牌
							}

							play_3.poker = pokerSort(play_3.poker);
							
							$('.play_3 li').remove();	//删除原来的牌

							//边发牌边排序，再生成新的牌
							for(var i=0;i<play_3.poker.length;i++){
								if(play_3.poker[i]==dzpoker[0] || play_3.poker[i]==dzpoker[1] ||play_3.poker[i]==dzpoker[2]){
									var poker_html_3 = makePoker(play_3.poker[i]);
									$('.play_3').append(poker_html_3);
									$('.play_3 li:last').css({top:(35*(i+1))+'px'});
									$('.play_3 li:last').attr('class','select');
									$('.play_3').css({top:-(2*i)+'px'});
									var data_poker = $('.play_3 li:last').attr('data-poker');
									temp_poker.push(data_poker);
								}else{
									var poker_html_3 = makePoker(play_3.poker[i]);
									$('.play_3').append(poker_html_3);
									$('.play_3 li:last').css({top:(35*(i+1))+'px'});
									$('.play_3').css({top:-(2*i)+'px'});
								}
							}
						break;
					}
					clearInterval(timeconunt);
					$('.time').eq(f).css({'display':'none'});
					$('.h1').eq(v-1).css({'display':'none'});
					$('.h2').eq(v-1).css({'display':'none'});
					$('.h3').eq(v-1).css({'display':'none'});
					$('.h4').eq(v-1).css({'display':'none'});

					$('span').css("display","block");
					$('span').eq(c-1).css({
						'background':'url(./tu/dizu.png) center no-repeat',
						'background-size': '100%',
					});
					$('.qdz').hide();
					startGame(c);		// 调用开始打牌函数

				}else{
					
					if(n < 3){					// 如果n小于3，说明还有人没有抢地主
						$('.time').eq(f).css({'display':'none'})
						f = (++f >2)?0:f;
						clearInterval(timeconunt);
						qdzTimeOver(f);
						$('.qdz').css({'display':'none'});
						$('.qdz').eq(f).css({'display':'block'});
						$('.h1').eq(f).css({'display':'block'});
						$('.h2').eq(f).css({'display':'block'});	
						$('.h3').eq(f).css({'display':'block'});	
						$('.h4').eq(f).css({'display':'block'});	
						$('<div class="h4"></div>').eq(f).css({'display':'block'});	
					}else{
						var string = '没人抢地主，点击确定重新开始';
						msgBox(string);			
					}
				}
				
			}
		});
	}

	function msgBox(string) {
		$('.restart').show();
		$('.restart h1').html(string);
		$('.OK').mouseover(function(){
			$(this).animate({'top':'62%'},500)
		});
		$('.OK').mouseout(function(){
			$(this).animate({'top':'70%'},500);
		});
		$('.OK').click(function(){
			$('.restart').hide();
			// 重新刷新页面
			var url = window.location.href;
			window.location.href = url;
		});
	}

	// 开始打牌
	var now_poker = null;				// 当前桌面上的牌型
	var temp_poker = Array();			// 准备出牌的牌型数据
	var pass = 1;						// 用来记录过牌的次数
	function startGame( index ){	
		// var temp_poker_type = 0;
		PokerTimeOver(index-1);
		// 绑定打牌玩家可以点击牌的事件
		pokerClick(index);
		// var index = index;
		$('.play_'+index+'~.h5').show();

		$('.play_'+index+'~.h5').on('click','.play', function(){
				// 调用判断函数
				vsRule(index);
		});

		//过牌
		$('.play_'+index+'~.h5').on('click','.pass', function(){
			if(now_poker == null){
				var string='你现在无法过牌，因为桌面上没有牌';
				showAlert(string);
				return false;
			}
			clearInterval(timeconunt);	//停止计时
			// console.log('pass: ' + pass);
			$('.content #sound').attr('src', './Sound/Woman_buyao1.ogg');
			player_sound.play();
			
			pass++;
			// 隐藏掉所有对应的按钮与计时器
			$('.time').eq(index-1).hide();
			$('.h5').eq(index-1).hide();
			
			if(pass > 2) {
				now_poker = null;
				pass = 1;
				$('.now_poker li').remove();
			}

			// 解除原来绑定的事件
			$('body').off('click','.play_'+index+' li');
			$('.play_'+index+'~.h5').off('click','.pass');
			$('.play_'+index+'~.h5').off('click','.play');

			for(var i=0;i<$('.play_'+index+' li').length;i++){
				if($('.play_'+index+' li').eq(i).attr('class')=='select'){
				 	$('.play_'+index+' li').eq(i).attr('class','');
				}
			}

			if(pass >= 2) {
				// now_poker = null;
				temp_poker = Array();
			}
			index = (++index > 3)?1:index;
			startGame(index);
		});
	}


	//判断选中的牌是否符合出牌规则，和出牌判断
	function vsRule(index) {
		var rule;
		if(now_poker == null) {
			// console.log('now_poker:' + now_poker);
			rule = rules(temp_poker);   //将当前选中的牌传到rules函数中做出牌规则判断
		}else {
			// console.log('vsRule==now_poker.poker.length:'+now_poker.poker.length);
			// console.log('vsRule==temp_poker.length:'+temp_poker.length);
			rule = rules(temp_poker);

			if(now_poker.poker.length == temp_poker.length) {
				rule = rules(temp_poker);
			}else if(rule.type == 12 || rule.type == 13) {
				rule = rules(temp_poker);
			}else {
				rule = false;
			}
		}
		
			
		if (!rule) {		//判断选择的牌型是否符合规则
			var string='你出的牌不符合规则，请重新选择！'
			showAlert(string);
			return false;
		}else {
			
			var VS = checkVS(rule, now_poker);
			console.log('vs:'+VS);

			if (VS) {		//判断能否将牌打出去
				// console.log('统计：'+o);
				pass = 1;
				now_poker = rule;   //当打牌出去之后，now_poker里的值就变成打出去的牌
				console.log('now_poker-poker: ' + now_poker.poker);
				console.log('now_poker-type: ' + now_poker.type);
				console.log('now_poker-num: ' + now_poker.num);

				// 特效动画
				if (now_poker.type == 1) {
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					if(now_poker.num == 14 && now_poker.flower == 0){
						$('.content #voice').attr('src', './Sound/voice/lord_v_1card_small_joker.mp3');
					}else if (now_poker.num == 14 && now_poker.flower == 1) {
						$('.content #voice').attr('src', './Sound/voice/lord_v_1card_big_joker.mp3');
					}else{
						$('.content #voice').attr('src', './Sound/voice/lord_v_1card_' + now_poker.num + '.mp3');
					}
				}else if(now_poker.type == 2){
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_2card_' + now_poker.num + '.mp3');
				}else if(now_poker.type == 3){
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_3card_' + now_poker.num + '.mp3');
				}else if(now_poker.type == 4){
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_3with1.mp3');
				}else if(now_poker.type == 5){
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_3with2.mp3');
				}else if(now_poker.type == 6){
					$('.content #sound').attr('src', './Sound/Special_give.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_4with2.mp3');
				}else if(now_poker.type == 7){
					$('.content #sound').attr('src', './Sound/SpecBeanChanged.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_straight.mp3');
					$('.shunzi').css({
						display: 'block'
					});
				}else if(now_poker.type == 8){
					$('.content #sound').attr('src', './Sound/Special_flower.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_chainpairs.mp3');
					$('.liandui').css({
						display: 'block'
					});
				}else if(now_poker.type == 9 || now_poker.type == 10 || now_poker.type == 11){
					$('.content #sound').attr('src', './Sound/Special_plane.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_plane_2.mp3');
					$('.feiji').css({
						display: 'block'
					});
				}else if (now_poker.type == 12) {
					$('.content #sound').attr('src', './Sound/Special_Bomb.ogg');
					$('.content #voice').attr('src', './Sound/voice/lord_v_bomb_1.mp3');
					$('.zhadan').css({
						display: 'block'
					});
				}else if (now_poker.type == 13) {
					$('.content #sound').attr('src', './Sound/Special_Bomb.ogg');
					$('.content #voice').attr('src', './Sound/voice/Woman_wangzha.ogg');
					$('.huojian').css({
						display: 'block'
					});
				}
				
				player_voice.play();
				player_sound.play();

				console.log('进入vs之后的now_poker:'+now_poker.poker);
				clearInterval(timeconunt);	//停止计时
				$('.time').eq(index-1).hide();
				// clearInterval(int);

				$('body').off('click','.play_'+index+' li');
				$('.play_'+index+'~.h5').off('click','.pass');
				$('.play_'+index+'~.h5').off('click','.play');

				$('.now_poker li').remove();
				for(var i=0; i<now_poker.poker.length; i++){
					// console.log(123);
					var li = makePoker(now_poker.poker[i]);
					$('.now_poker').append(li);
					$('.now_poker li:last').css({left:(40*(i+1))+'px'});
					$('.now_poker').css({left:-(20*(i + 1))+'px'});
				}
				console.log('循环之后 now.poker:'+now_poker.poker);

				switch(index){
					case 1:
						play_1 = delPoker(play_1,rule.poker);
						console.log('delPoker1之后 now.poker:'+now_poker.poker);

						$('.play_1 li').remove();
						for(var i = 0; i<play_1.poker.length; i++){
							// 生成1号玩家的牌 
							var poker_html_1 = makePoker(play_1.poker[i]);
							$('.play_1').append(poker_html_1);
							$('.play_1 li:last').css({top:(35*(i+1))+'px'});
							$('.play_1').css({top:-(2*i)+'px'});
						}
						// 隐藏掉所有对应的按钮与计时器
						$('.play_1~.clock').hide();
						$('.play_1~.h5').hide();

						if(play_1.poker.length == 0){
							$('.win').show();
							if (index == c) {
								$('.win .winner').html('地主胜！');
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' + ' + jifen);
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' - ' + (jifen / 2));
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' - ' + (jifen / 2));
								play_1_jifen = play_1_jifen + jifen;
								play_2_jifen = play_2_jifen - (jifen / 2);
								play_3_jifen = play_3_jifen - (jifen / 2);
							} else if (c == 2) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' - ' + jifen);
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' + ' + (jifen / 2));
								play_1_jifen = play_1_jifen + (jifen / 2);
								play_2_jifen = play_2_jifen - jifen;
								play_3_jifen = play_3_jifen + (jifen / 2);
							} else if (c == 3) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' - ' + jifen);
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' + ' + (jifen / 2));
								play_1_jifen = play_1_jifen + (jifen / 2);
								play_2_jifen = play_2_jifen + (jifen / 2);
								play_3_jifen = play_3_jifen - jifen;
							}
							return false;
						}
						
						// console.log('1aa');
						// 重新执行startGame
						// $('body').off('click','.play_1~.h5 .play');
						index = (++index > 3)?1:index;
						startGame(index);
						// auto(now_poker,play_1);
					break;
					case 2:
						play_2 = delPoker(play_2,rule.poker);
						console.log('delPoker2之后 now.poker:'+now_poker.poker);
						// console.log(play_2);
						$('.play_2 li').remove();
						for(var i = 0; i<play_2.poker.length; i++){
							// 生成2号玩家的牌 
							var poker_html_2 = makePoker(play_2.poker[i]);
							$('.play_2').append(poker_html_2);
							$('.play_2 li:last').css({left:(40*(i+1))+'px'});
							$('.play_2').css({left:-(20*i)+'px'});
						}

						// 隐藏掉所有对应的按钮与计时器
						$('.play_2~.clock').hide();
						$('.play_2~.h5').hide();

						if(play_2.poker.length == 0){
							$('.win').show();
							if (index == c) {
								$('.win .winner').html('地主胜！');
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' + ' + jifen);
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' - ' + (jifen / 2));
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' - ' + (jifen / 2));
								play_2_jifen = play_2_jifen + jifen;
								play_1_jifen = play_1_jifen - jifen;
								play_3_jifen = play_3_jifen - jifen;
							} else if (c == 1) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' - ' + jifen);
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' + ' + (jifen / 2));
								play_2_jifen = play_2_jifen + (jifen / 2);
								play_1_jifen = play_1_jifen - jifen;
								play_3_jifen = play_3_jifen + (jifen / 2);
							} else if (c == 3) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' - ' + jifen);
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' + ' + (jifen / 2));
								play_2_jifen = play_2_jifen + (jifen / 2);
								play_1_jifen = play_1_jifen + (jifen / 2);
								play_3_jifen = play_3_jifen - jifen;
							}
							return false;
						}
						//解除绑定
						// $('body').off('click','.play_2~.h5 .play');
						// 重新执行startGame
						index = (++index > 3)?1:index;
						startGame(index);
						// auto(now_poker,play_2);
					break;
					case 3:
						play_3 = delPoker(play_3,rule.poker);
						// console.log('delPoker3之后 now.poker:'+now_poker.poker);
						// console.log(play_3);
						$('.play_3 li').remove();
						for(var i = 0; i<play_3.poker.length; i++){
							// 生成3号玩家的牌 
							var poker_html_3 = makePoker(play_3.poker[i]);
							$('.play_3').append(poker_html_3);
							$('.play_3 li:last').css({top:(35*(i+1))+'px'});
							$('.play_3').css({top:-(2*i)+'px'});
						}

						// 隐藏掉所有对应的按钮与计时器
						$('.play_3~.clock').hide();
						$('.play_3~.h5').hide();

						if(play_3.poker.length == 0){
							$('.win').show();
							if (index == c) {
								$('.win .winner').html('地主胜！');
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' + ' + jifen);
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' - ' + (jifen / 2));
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' - ' + (jifen / 2));
								play_3_jifen = play_3_jifen + jifen;
								play_1_jifen = play_1_jifen - jifen;
								play_2_jifen = play_2_jifen - jifen;
							} else if (c == 1) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' - ' + jifen);
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' + ' + (jifen / 2));
								play_2_jifen = play_2_jifen + (jifen / 2);
								play_1_jifen = play_1_jifen - jifen;
								play_3_jifen = play_3_jifen + (jifen / 2);
							} else if (c == 2) {
								$('.win .winner').html('农民胜！');
								$('.win h1').eq(1).html(play_1.name + ': ' + play_1_jifen + ' + ' + (jifen / 2));
								$('.win h1').eq(2).html(play_2.name + ': ' + play_2_jifen + ' - ' + jifen);
								$('.win h1').eq(3).html(play_3.name + ': ' + play_3_jifen + ' + ' + (jifen / 2));
								play_3_jifen = play_3_jifen + (jifen / 2);
								play_1_jifen = play_1_jifen + (jifen / 2);
								play_2_jifen = play_2_jifen - jifen;
							}
							return false;
						}
						//解除绑定
						// $('body').off('click','.play_3~.h5 .play');
						// 重新执行startGame
						index = (++index > 3)?1:index;
						startGame(index);
						// auto(now_poker,play_3);
					break;
				}

				console.log('end-now_poker:'+now_poker.poker);

				// now_poker = rule;
				// for(var i=0; i<=20; i++){
					
				// }
				console.log('splice    end-now_poker:'+now_poker.poker);
			}else{
				console.log('选择的牌无效，请重新选择！error');
				// if(timep == 0) {
				// 	// 隐藏掉所有对应的按钮与计时器
				// 	$('.play_'+(index)+'~.clock').hide();
				// 	$('.play_'+(index)+'~.h5').hide();
				// 	// $('.h5').eq(index-1).hide();
				// 	$('.time').eq(index-1).hide();
				// 	alert('你当前没有可以出的牌');
				// 	// pass++;
				// 	if(pass > 2) {
				// 		now_poker = null;
				// 		pass = 1;
				// 		$('.now_poker li').remove();
				// 	}

				// 	startGame(index+1);
				// 	return false;
				// }
				if(!VS) {
					var string='选择的牌无效，请重新选择！';
					showAlert(string);
					return false;
				}
			}
			temp_poker = Array();		// 删除对应的选中牌的数据
		}
	}

	// var coun	t = 0;   //统计自动出牌，当没有牌出的时候

	//删除牌数组
	function delPoker(play_arr, arr_del){
		for(var i=0; i<=arr_del.length-1; i++) {
			for(var j=0; j<=play_arr.poker.length-1; j++) {
				if(play_arr.poker[j] == arr_del[i]) {
					play_arr.poker.splice(j,1);
				}
			}
			
		}
		console.log('play_arr:'+play_arr.poker.length);
		return play_arr;
	}

	//li的绑定事件
	function pokerClick(index){
		$('body').on('click','.play_'+index+' li', function(){
			var select = $(this).attr('class');
			if(pass > 2) {
				now_poker = null;
			}
			// 判断是否选中出牌
			if (select == 'select') {
				// console.log(222);
				$(this).attr('class','');
				var data_poker = $(this).attr('data-poker');
				
				for(var i=0; i<temp_poker.length; i++){
					if( temp_poker[i] == data_poker){
						temp_poker.splice(i,1);		// 删除对应的选中牌的数据
						break;
					}
				}
			}else{
				console.log('data_poker');
				$(this).attr('class','select');
				var data_poker = $(this).attr('data-poker');
				temp_poker.push(data_poker);
			}
		});
	}

	var timeconunt; //倒计时计时器
	//抢地主倒计时函数
	function qdzTimeOver(h){
		var time = 20;
		$('.time i').eq(h).html(time);

		$('.qdz .h1').eq(h).show();
		$('.qdz .h2').eq(h).show();
		$('.qdz .h3').eq(h).show();
		$('.qdz .h4').eq(h).show();

		$('.time').eq(h).show();

		timeconunt = setInterval(function(){
			$('.time i').eq(h).html(--time);
			if (time <= 0) {
				if(n<3){
					$('.time').eq(h).hide();
					$('.qdz .h1').eq(h).hide();
					$('.qdz .h2').eq(h).hide();
					$('.qdz .h3').eq(h).hide();
					$('.qdz .h4').eq(h).hide();
					clearInterval(timeconunt);
					h=(++h==3)?0:h;
					setTimeout(qdzTimeOver(h),100);
					
				}else{
					var string = '没人抢地主，点击确定重新开始';
					msgBox(string);	
					clearInterval(timeconunt)
				}
				n++;
			}
		},1000);
	}

	//开始打牌倒计时
	var timep = 0;
	function PokerTimeOver(h){
		
		timep = 30;
		// console.log('time:' + time);
		$('.time i').eq(h).html(timep);

		$('.h5').eq(h).show();

		$('.time').eq(h).show();
		console.log('当前的now_poker:'+now_poker);
		timeconunt = setInterval(function(){
			$('.time i').eq(h).html(--timep);
			if (timep == 0) {
				if(pass == 2) {
					temp_poker = Array();
				}

				pass++;

				//判断当前桌面还有没有牌，没有牌，自动出一张
				//有牌的话则根据桌面的牌，出一份比桌面的牌大的

				// h = autoPoker(h);
				
				clearInterval(timeconunt);	//停止计时
				// console.log('pass: ' + pass);
				
				// 隐藏掉所有对应的按钮与计时器
				$('.time').eq(h).hide();
				$('.h5').eq(h).hide();
				
				if(pass > 2) {
					now_poker = null;
					pass = 1;
					$('.now_poker li').remove();
				}

				// 解除原来绑定的事件
				$('body').off('click','.play_'+(h + 1)+' li');
				$('.play_'+(h + 1)+'~.h5').off('click','.pass');
				$('.play_'+(h + 1)+'~.h5').off('click','.play');

				for(var i=0;i<$('.play_'+(h + 1)+' li').length;i++){
					if($('.play_'+(h + 1)+' li').eq(i).attr('class')=='select'){
					 	$('.play_'+(h + 1)+' li').eq(i).attr('class','');
					}
				}

				h=(++h==3)?0:h;
				startGame(h+1);
			}
		},1000);
	}

	// 判断桌面的牌自动出牌函数
	function autoPoker(int) {
		clearInterval(timeconunt);
		if(now_poker == null){
			// clearInterval(timeconunt);
			// if(pass > 2) {
			// 	alert('你现在无法过牌，因为桌面上没有牌。');
			// 	return false;
			// }
			// if(int==0) {
			// 	var tp = auto(now_poker,play_1);
			// }else if(int==1) {
			// 	var tp = auto(now_poker,play_2);
			// }else if(int==2) {
			// 	var tp = auto(now_poker,play_3);
			// }

			// temp_poker = tp.poker;
			// vsRule(int+1);
			// int=(++int==3)?0:int;
			return false;

			// return false;
		}else {
			clearInterval(timeconunt);
			console.log('倒计时');
			if(int==0) {
				var tp = auto(now_poker,play_1);
			}else if(int==1) {
				var tp = auto(now_poker,play_2);
			}else if(int==2) {
				var tp = auto(now_poker,play_3);
			}

			// console.log('返回回来的tp.poker: '+ tp.poker);

			if(!tp) {
				console.log('没有牌可以出');
				// 隐藏掉所有对应的按钮与计时器
				$('.play_'+(int)+'~.clock').hide();
				$('.play_'+(int)+'~.h5').hide();
				// $('.h5').eq(int-1).hide();
				$('.time').eq(int-1).hide();
				var string='你当前没有可以出的牌';
				showAlert(string);
				pass++;
				if(pass > 2) {
					now_poker = null;
					pass = 1;
					$('.now_poker li').remove();
				}

				startGame(int);
				int = (++int == 3)?0:int;
				return false;
			}else {
				temp_poker = tp.poker;
				vsRule(int+1);
				int=(++int==3)?0:int;
			}
		}
		return int;
	}

	// 设置界面
	function setOff() {
		//点击设置按钮弹出设置框
		$('.ems').click(function(){
			$('.setup').css({
				display:'block',
			});
		});

		//点击关闭按钮关闭设置框
		$('.cancel').click(function(){
			$('.setup').css({
				display:'none',
			});
		});

		//点击选择背景图片
		var bg_src='./tu/back1.png';
		$('.bg_list').on('click','li img',function(){
			$('.bg_list img').attr('class','');
			$(this).attr('class','bg_list_select');
			var index=$(this).attr('data-select');
			bg_src='./tu/back'+index+'.png'
		});

		
		//点击选择背景音乐
		var music_src='./tu/bg1.mp3';	//背景音乐路径
		$('.m_select').click(function(){
			for(var i=0; i<3; i++) {
				$('.m_select').css({
					'background':'',
				});
			}
			$(this).css({
				'background':'#32c532',
			});

			var index=$(this).attr('data-select');

			music_src='./tu/bg'+index+'.mp3'

		});

		var h1=0;	//记录点击的次数
		$('body').on('click','.bgm .on',function(){
			if(h1==0){
				$(this).css({
					'background':'url(./tu/off.png) center no-repeat',
					'background-size':'50%',
				});
				var player = document.querySelector('#Bgvideo');
				player.pause();
			}else if(h1==1){
				$(this).css({
					'background':'url(./tu/on.png) center no-repeat',
					'background-size':'50%',
				});
				var player = document.querySelector('#Bgvideo');
				player.play();
			}
			h1=(++h1==2)?0:h1;
		});

		$('.sure').click(function(){
			console.log('music_src:'+music_src);
			$('.Bgvideo').attr('src',music_src);
			console.log($('.Bgvideo').attr('src'));

			var player = document.querySelector('#Bgvideo');
			player.play();

			$('.content').css({
				'background':'url('+bg_src+') no-repeat',
				'background-size':'100%',
			});
			$('.setup').css({
				display:'none',
			});
		});
	}
	setOff();

	function showAlert(string){
		$('.tips h1').html(string);
		$('.tips').animate({
			opacity: 'show',
			top:'460px'
		},500);
		setTimeout(function(){
			$('.tips').animate({
				opacity: 'toggle',
				top:'100px'
			},500);
		},5000);
	}

	$('.content').on('click', '.win .OK', function(){
		console.log(123);
		$('.win').hide();
		var url = window.location.href;
		window.location.href = url;
	});
});
