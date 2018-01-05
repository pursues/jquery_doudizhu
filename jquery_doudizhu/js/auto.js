/*
* 自动检测
* 参数    
*	now_poker     obj         当前桌面的牌
*	player        obj         下一位玩家的牌
*/
function auto(now_poker,player) {
	if(now_poker == null) {
		var data = {
			'poker': [player.poker[player.poker.length-1]]
		};
		console.log(player.poker[player.poker.length-1]);
		return data;
	}
	console.log('auto.js:  '+now_poker.poker);
	if(now_poker.type == 13) {
		return false;
	}
	// console.log('auto.js =========== player: '+player.poker);
	// console.log('auto.js =========== now_poker: '+now_poker.poker);
	var poker3 = null;
	var pl_num = split(player.poker);
	if(now_poker!=12) {
		for(var i=0; i<=player.poker.length; i++) {
			switch(now_poker.type) {
				case 1://单张
				case 2://对子
				case 7://顺子
				case 3://三张
				case 8://连对
				case 9://三连对
				case 12://炸弹
				case 13://王炸
					var data = found(now_poker.poker,player.poker);
					var res = PK(data.num,now_poker.type);

					// console.log('auto.js ===== type'+now_poker.type);
					// console.log('判断之前的now_poker：'+data.poker);
					// console.log('res 的结果： '+res);
					// console.log('data.index+now_poker.poker.length) : '+data.index+now_poker.poker.length);
					if(data.poker[data.poker.length - 1] == null) {
						return false;
					}else if(!res) {     //判断  判断大小返回的结果是否正确，不正确，则重新调用寻找函数
						// now_poker = data;     //给now_poker重新赋值；
						now_poker.poker = data.poker;
						var data = found(now_poker.poker,player.poker);
					}else {
						var data = {
							'poker': data.poker,
							'res': res
						};
						return data;
					}
				break;

				case 4://三带一
				case 10://三带一飞机
					if(poker3 == null) {
						poker3 = cutOut(now_poker.poker);       	//将三带一里面的三张牌截取出来
						var data = found(poker3.arr,player.poker);		//将截取出来的牌组放到found函数里面进行排查
					}
					
					var res = PK(data.num,4);                       //将从found里面获取到的数组进行判断

					// console.log('三带一    =====   res：'+ res);
					// console.log('data.poker === : '+ data.poker);
					if(data.poker[data.poker.length - 1] == null) {
						return false;
					}else if(!res) {     //判断  判断大小返回的结果是否正确，不正确，则重新调用寻找函数
						// now_poker = data;     //给now_poker重新赋值；
						// now_poker.poker = data.poker;
						// console.log('now_poker.poker:   '+now_poker.poker);
						var data = found(data.poker,player.poker);
					}else {
						for(var i=1; i<=poker3.count; i++) {
							data.poker.push(player.poker[player.poker.length-i]);
						}
						var data = {
							'poker': data.poker,
							'res': res
						};
						// console.log('最后得到的data.poker: '+data.poker);
						return data;
					}
				break;
				case 5://三带一对
				case 11://三带一对飞机
					//将三张牌的截取出来，然后进行判断，判断正确之后从原来的数组之后找出一对对子出来
					if(poker3 == null) {
						poker3 = cutOut(now_poker.poker);       	//将三带一里面的三张牌截取出来
						var data = found(poker3.arr,player.poker);
					}
					var res = PK(data.num,5);

					var double = doublePoker(pl_num.num,player);     //将玩家中所有的对子都拿出来

					if(data.poker[data.poker.length - 1] == null) {
						return false;
					}else if(!res) {     //判断  判断大小返回的结果是否正确，不正确，则重新调用寻找函数
						// now_poker = data;     //给now_poker重新赋值；
						// now_poker.poker = data.poker;
						var data = found(data.poker,player.poker);
					}else {

						//从对子数组中找出一对放进去，需要判断对子不等于三张牌的
						data.poker.push(double[2]);
						data.poker.push(double[3]);
						// console.log('=========================='+data.poker+'==================');
						var data = {
							'poker': data.poker,
							'res': res
						};
						return data;
					}
				break;
				case 6:  //四带二

					//将四张相等的牌拿出来
					var four = Array();
					for(var i=0; i<4; i++) {
						four.push(now_poker.poker[i]);
					}

					// 找出大于这四张牌的数组
					var data = found(four,player.poker);
					//判断是否是相等的四张牌
					var res = PK(data.num,6);
					if(data.poker[data.poker.length - 1] == null) {
						return false;
					}else if(!res) {
						// now_poker.poker = data.poker;
						var data = found(data.poker,player.poker);
					}else {
						for(var i=0; i<player.poker.length; i++) {
							for(var j=0; j<data.num.length; j++) {
								if(data.num[j] != pl_num.num[i]) {
									//判断now_poker和重新找的数组的长度是否相等
									if(data.poker.length < now_poker.poker.length) {
										var data = data.poker.push(player.poker[i]);
									}else {
										var data = {
											'poker': data.poker,
											'res': res
										};
										return data;
									}
								}
								
							}
						}
					}
				break;

				case 7:  //顺子
					var data = found(poker.poker,player.poker);
					var res = PK(data.num,7);
					if(data.poker[data.poker.length - 1] == null) {
						return false;
					}else if(!res) {
						// now_poker.poker = data.poker;
						var data = found(data.poker,player.poker);
					}else {
						var data = {
							'poker': data.poker,
							'res': res
						};
						return data;
					}
				break;
			}
		}
	}else {
		var data = found(now_poker.poker,player.poker);
		var res = PK(data.num,now_poker.type);

		// console.log('auto.js ===== type'+now_poker.type);
		// console.log('判断之前的now_poker：'+data.poker);
		// console.log('res 的结果： '+res);

		if(data.poker[data.poker.length - 1] == null) {
			return false;
		}else if(!res) {     //判断  判断大小返回的结果是否正确，不正确，则重新调用寻找函数
			// now_poker = data;     //给now_poker重新赋值；
			// now_poker.poker = data.poker;
			var data = found(data.poker,player.poker);
		}else {
			var data = {
				'poker': data.poker,
				'res': res
			};
			return data;
		}
	}
		
}

/*
* 找对子
*/
function doublePoker(array,player) {
	var doubleP = Array();
	for(var i=0; i<array.length; i++) {
		if(array[i] == array[i+1] && array[i] != array[i+2] && array[i]<13) {
			doubleP.push(player.poker[i]);
			doubleP.push(player.poker[i+1]);
		}
	}
	// console.log('doublePoker:'+doubleP);
	return doubleP;
}

/*
* 判断大小
* 参数     
*	arr_num     Array        点数数组，进行判断
* 	Int  数值        循环的时候使用
*/
function PK(arr_num,int) {
	// console.log('pk里面的arr_num:' +arr_num);
	for(var i=0; i<arr_num.length; i+=int) {
		switch(int) {
			case 1:
				return true;
			case 2:             //对子
				if(arr_num[i] == arr_num[i+1]) {
					return true;
				}else {
					return false;
				}
			break;

			case 4:              //三带一
			case 5:              //三带一对
			case 9:              //三连对
				var o3 = order(arr_num,9,3);
				if(o3) {
					return true;
				}else {
					return false;
				}
			break;

			case 3:              //对子
			case 8:             //连对
				var o2 = order(arr_num,9,2);
				if(o2) {
					return true;
				}else {
					return false;
				}
			break;
			 
			case 6:        //四张判断
			case 12:        //炸弹
				if(arr_num[i] == arr_num[i+3]) {
					return true;
				}else {
					return false;
				}
			break;
			case 7:
				var o1 = order(arr_num,7,1);
				if(o2) {
					return true;
				}else {
					return false;
				}
			break;

			case 13:             //对子
				if(arr_num[i] == arr_num[i+1] && arr_num[i] == 14) {
					return true;
				}else {
					return false;
				}
			break;
		}
	}
}


/*
* 遍历数组        在玩家牌中找第一个大于桌面牌的值
* 参数
*	
* return data   obj
*/
function found(data_poker,player) {
	// console.log('found  === data_poker:'+data_poker);
	// console.log('found  === player:'+player);
	var np;   //用来存放data_poker的拆分结果
	var pl;   //用来存放player的拆分结果

	np = split(data_poker);    //存放拆分之后的data_poker
	pl = split(player);       //存放拆分之后的player

	var poker = Array();				//用来存放 第一次找到的 大于data_poker的牌组
	var num = Array();			//用来存放 第一次找到的 大于data_poker的点数

	var index = 0;   //下标
	// console.log('返回回来的index： '+index);

	//找到第一个大于data_poker的值
	// for(var i=np.num.length-1; i>=0; i--) {      //遍历now_poker数组
		for(var j=pl.num.length-1; j>=0; j--) {     //遍历player数组
			// console.log('j == '+j);
			if(pl.num[j] > np.num[np.num.length-1]) {            //判断player数组中第一个大于now_poker的元素
				index = j;
				break;
			}
		}
	// }

	// console.log('index + data_poker: '+data_poker.length + index);
	// console.log('pl.num=======================:  '+pl.num)
	//获取 玩家牌组中大于data_poker的点数
	for(var i=0; i<=data_poker.length-1; i++) {
		poker.push(player[index-i]);
		num.push(pl.num[index-i]);
	}
	poker = pokerSort(poker);
	num.sort(function(x,y) {
		return y-x;
	});
	// console.log('end   ======================   data.temp_num:'+poker);
	// console.log('end   ======================    data.temp:'+num);

	var obj = {
		'poker': poker,
		'num': num,
		'index': index
	}
	// console.log('obj:' + obj.poker);
	return obj;
}