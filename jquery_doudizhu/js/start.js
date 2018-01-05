	
	//设置不播放音乐
	function damen(){
		// $('.msg').css('display','block');
		// setTimeout(function(){
		// 	$('.msg').css('display','none');
		// },3000);
		var isPlaying = false;
		var player = document.querySelector('#Firstvideo');
		//返回文档中匹配指定的一个元素
		if(isPlaying) {
			player.pause();
			player.src = '';
		//当没点击时为音乐暂停
		}else{
			player.src = './tu/ruchang.mp3';
			player.play();
		}
		//点击后音乐开始
		$('#leng').css({'animation': 'loads 3s'});
		//按钮属性隐藏
		$('#anniu').hide();
		//背景图隐藏
		$('.damen_1').css({'animation-play-state':'running'});
		$('.damen_2').css({'animation-play-state':'running'});
		//更改CSS样式
		setTimeout(function(){
			$('#img').hide();
			$('.damen').hide();
				//设置3秒后
			var player = document.querySelector('#Bgvideo');
				//令背景音乐开始
			if(isPlaying) {
				player.pause();
				player.src = '';
			}else{
				player.src = './tu/bg1.mp3';
				player.play();
			}
		},3000);
	}