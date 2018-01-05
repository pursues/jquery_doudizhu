//打牌的规则,传进来玩家选中的牌的数组

/*
* 检测牌型
* 参数 poker_arr	Array
* return  false or Array
* 牌型不正确返回 false
* 牌型正确返回对象，
*	对象中包括 传进来的数组，牌的牌型，牌的点数（用来做关键值），牌的花色（只有单张牌的情况，大小王判断）
* 
* 规则：（每个数字代表一种规则）
*	1、单张；2、对子；3、三张；
*	4、三带一；5、三带一对；6、四带二；
* 	7、单张顺子；8、双连对；9、三连对；
*	10、三带一飞机；11、三带一对飞机；
*	12、炸弹；13、王炸
*
*牌数：（每个牌数所涉及的规则，后面的数字为对应的规则）
*	1、单张 —— 1
*	2、对子、王炸 —— 2,13
*	3、三张 —— 3
*	4、三带一，炸弹 —— 4,12
*	5、三代一对，单张顺子 —— 5,7
*	6、四带二，单张顺子，双连对，三连对 —— 6,7,8，9
*	7、单张顺子 —— 7
*	8、单张顺子，双连对，三带一飞机 —— 7,8,10
*	9、单张顺子，三连对 —— 7,9
*	10、单张顺子，双连对，三带一对飞机 —— 7,8,11
*	11、单张顺子 —— 7
*	12、单张顺子，双连对，三连对，三带一飞机 —— 7,8,9,10
*	14、双连对 —— 8
*	15、三连对，三带一对飞机 —— 9,11
*	16、双连对，三带一飞机 —— 8,10
*	18、双连对，三连对 —— 8,9
*	20、双连对，三带一飞机，三带一对飞机 —— 8,10,11
*
*	单张的顺子最少要5张牌，最多只能到12张牌
*	13张，17张牌的时候，没有规则匹配
*	三带一对的还要判断三张之外的两张是否相等
*	单张的顺子，最大只能到 'A' ,最小为 '3'
*/
function rules(poker_arr) {
	// console.log('c长度：  '+poker_arr.length);
	var arr;  //定义临时变量

	//给牌重新排序
	poker_arr = pokerSort(poker_arr);
	console.log('排序之后的poker_arr:'+poker_arr);
	
	//调用拆分函数
	arr = split(poker_arr);

	if(poker_arr.length == 0) {  				//判断传进来的数组是否为空

		return false;  //给data赋值

	}else if(poker_arr.length == 1) { 			//判断传进来的数组长度是否为 1

		//data的值变为二为数组，里面的值分别为传进来的数组，很牌的牌型
		var data = {
				'poker': poker_arr,
				'type': 1,                  //单张牌
				'num': arr.num[0],          //用来做判断的点数
				'flower': arr.flower[0]   //花色
			};
		return data;

	}else if(poker_arr.length == 2) {  			//判断传进来的数组长度是否为 2

		//进行王炸判断
		if(arr.num[0]==14 && arr.num[0]==arr.num[1]) {
			console.log('王炸：'+poker_arr);
			console.log('arr-num:'+arr.num);
			//data重新赋值
			var data = {
					'poker': poker_arr,
					'type': 13,            //王炸
					'num': arr.num[0]      //点数
				};
			return data;
		}else if(arr.num[0] == arr.num[1]) {   //判断是否为对子
			console.log('对子：'+poker_arr);
			console.log('arr-num:'+arr.num);
			//data重新赋值
			var data = {
					'poker': poker_arr,
					'type': 2,             //对子
					'num': arr.num[0]     //点数
				}; 
			return data;
		}else {
			//data重新赋值
			return false;
		}

	}else if(poker_arr.length == 3) {  			//判断传进来的数组长度是否为 3

		//判断三张牌是否都相等
		if(arr.num[0] != arr.num[1] || arr.num[1] != arr.num[2]) {
			return false;
		}else {
			//data重新赋值
			var data = {
					'poker': poker_arr,
					'type': 3,           //三张牌
					'num': arr.num[0]    //点数
				};
			return data;
		}

	}else if(poker_arr.length == 4) {           //判断传进来的数组长度是否为 4

		if(arr.num[0]==arr.num[3]) {  //判断是不是炸弹
			var data = {
					'poker': poker_arr,
					'type': 12,          //炸弹
					'num': arr.num[0]    //点数
				};
			return data;
		}else {
			console.log('规则判断');
			var plane1 = plane(poker_arr, 10);                //获取飞机的排序，判断 3带1
			console.log('dangqiandadadfkjlds: '+ plane1);
			console.log('dangqiandadadfkjlds: '+ plane1.arr );
			if(plane1) {
				var data = {
					'poker': plane1.arr,
					'type': 4,          //三带一
					'num': plane1.num[0]   //点数
				};
				console.log('dangqiandadadfkjlds: '+ plane1.arr );
				return data;
			}else {
				console.log('plane1  return false');
				return false;
			}
		}
		 

	}else if(poker_arr.length == 5) {           //判断传进来的数组长度是否为 5
		var plane2 = plane(poker_arr,11);
		console.log('三代二：plane:'+plane2);

		if(plane2){  //先判断是不是三带二

			var data = {
				'poker': plane2.arr,
				'type': 5,           //三带二
				'num': plane2.num[0]
			};
			return data;
		}else {
			//调用判断是否为顺子的函数
			var res = order(arr.num,7,1);
			if(res) {
				console.log('res1:'+res);
				var data = {
					'poker': poker_arr,
					'type': 7,         //顺子
					'num': arr.num[0]   //返回最大的点数
				};
				return data;
			}else {
				console.log('res:'+res);
				return false;
			}
		}

	}else if(poker_arr.length == 6) {   		//判断传进来的数组长度是否为 6

		if(arr.num[0]==arr.num[3] || arr.num[1]==arr.num[4] || arr.num[2]==arr.num[5]) {
			var temp = Array();
			for(var i=0; i<poker_arr.length-1; i++) {  //获取四张牌的第一张牌的下标
				if(arr.num[i] != arr.num[i+1]) {
					k = i;
					break;
				}
			}
			for(var i=0; i<4; i++) {  //将四张牌提取出来
				temp.push(poker_arr[k]);
				poker_arr.splice(k,1);
			}

			var data = {
				'poker': temp.concat(poker_arr),    //重新拼接
				'type': 6,         //四带二
				'num': arr.num[3]   //返回最大的点数
			};
			return data;
		}else {
			var res1 = order(arr.num,7,1);            //保存顺子返回的结果，true or false
			var res2 = order(arr.num,8,2);            //保存连对返回的结果，true or false
			var res3 = order(arr.num,9,3);            //保存三连对返回的结果，true or false

			// console.log('res1 == '+res1);
			// console.log('res2 == '+res2);
			// console.log('res3 == '+res3);

			if(res1) {
			// console.log('res1 == '+res1);

				var data = {
					'poker': poker_arr,
					'type': 7,         //顺子
					'num': arr.num[0]   //返回最大的点数
				};
				return data;
			}else if(res2) {
			// console.log('res2 == '+res2);
				var data = {
					'poker': poker_arr,
					'type': 8,         //连对
					'num': arr.num[0]   //返回最大的点数
				};
				return data;
			}else if(res3) {
			// console.log('res3 == '+res3);
				var data = {
					'poker': poker_arr,
					'type': 9,         //三连对
					'num': arr.num[0]   //返回最大的点数
				};
				return data;
			}else {
			// console.log('error == ');
				return false;
			}
		}

	}else if(poker_arr.length == 7) {  		 	//判断传进来的数组长度是否为 7

		//因为7张牌的情况只有一种，顺子
		var res = order(arr.num,7);    //获取顺子的排序
		if(res) {
			var data = {
				'poker': poker_arr,
				'type': 7,         //顺子
				'num': arr.num[0]   //返回最大的点数
			};
			return data;
		}else {
			return false;  //返回false
		}

	}else if(poker_arr.length == 8) {   		//判断传进来的数组长度是否为 8
		var plane1 = plane(poker_arr, 10);             //调用plane函数，判断是不是飞机
		var order1 = order(arr.num,7,1);			  //调用order函数，判断是不是顺子
		var order2 = order(arr.num,8,2);            //调用order函数，判断是不是连对

		console.log('丹赛尔：  '+plane1.arr);
		console.log('四个连对：'+order2);
		console.log('8张顺子：'+order1);
		if(plane1) {
			var data = {
				'poker': plane1.arr,
				'type': 10,                 //三带一飞机
				'num': plane1.num[0]           //用来判断的关键值
			};
			return data;
		}else if(order1) {
			console.log('2');
			var data = {
				'poker': poker_arr,
				'type': 7,                 //顺子
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order2) {
			console.log('3');
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else {
			console.log('plane1:'+plane1);
			return false;
		}

	}else if(poker_arr.length == 9) {			//判断传进来的数组长度是否为 9

		var order1 = order(arr.num,7,1);		//调用order函数，判断是不是顺子
		var order3 = order(arr.num,9,3);		//调用order函数，判断是不是三连对

		if(order1) {
			var data = {
				'poker': poker_arr,
				'type': 7,                 //顺子
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order3) {
			var data = {
				'poker': poker_arr,
				'type': 9,                 //三连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}

	}else if(poker_arr.length == 10) { 			//判断传进来的数组长度是否为 10

		var order1 = order(arr.num,7,1);			//调用order函数，判断是不是顺子
		var order2 = order(arr.num,8,2);			//调用order函数，判断是不是连对
		var plane2 = plane(poker_arr,11);			//调用plane函数，判断是不是飞机

		if(order1) {
			var data = {
				'poker': poker_arr,
				'type': 7,                 //顺子
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(plane2) {
			var data = {
				'poker': plane2.arr,
				'type': 11,                 //三带一对飞机
				'num': plane2.num[0]           //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 11) {			//判断传进来的数组长度是否为 11

		var order1 = order(arr.num, 7,1);
		if(order1) {
			var data = {
				'poker': poker_arr,
				'type': 7,                 //顺子
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 12) {			//判断传进来的数组长度是否为 12

		var order1 = order(arr.num,7,1);		//调用order函数，判断是不是顺子
		var order2 = order(arr.num,8,2);		//调用order函数，判断是不是连对
		var order3 = order(arr.num,9,3);		//调用order函数，判断是不是三连对
		var plane1 = plane(poker_arr,10);		//调用plane函数，判断是不是飞机

		if(order1) {
			var data = {
				'poker': poker_arr,
				'type': 7,                 //顺子
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order3) {
			var data = {
				'poker': plane1.arr,
				'type': 9,                 //三连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(plane1) {
			var data = {
				'poker': poker_arr,
				'type': 10,                 //三带一对飞机
				'num': plane1.num[0]           //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 14) {			//判断传进来的数组长度是否为 14

		var order2 = order(arr.num,8,2);		//调用order函数，判断是不是连对
		if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 15) {			//判断传进来的数组长度是否为 15

		var order3 = order(arr.num,9,3);		//调用order函数，判断是不是三连对
		var plane2 = plane(poker_arr,11);		//调用plane函数，判断是不是飞机

		if(order3) {
			var data = {
				'poker': poker_arr,
				'type': 9,                 //三连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(plane2) {
			var data = {
				'poker': plane2.arr,
				'type': 11,                 //三带一对飞机
				'num': plane2.num[0]           //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 16) {			//判断传进来的数组长度是否为 16

		var order2 = order(arr.num,8,2);		//调用order函数，判断是不是连对
		var plane1 = plane(poker_arr,10);		//调用plane函数，判断是不是飞机

		if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(plane1) {
			var data = {
				'poker': plane1.arr,
				'type': 10,                 //三带一对飞机
				'num': plane1.num[0]           //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 18) {			//判断传进来的数组长度是否为 18

		var order2 = order(arr.num,8,2);		//调用order函数，判断是不是连对
		var order3 = order(arr.num,9,3);		//调用order函数，判断是不是三连对

		if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(order3) {
			var data = {
				'poker': poker_arr,
				'type': 9,                 //三连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}else if(poker_arr.length == 20) {			//判断传进来的数组长度是否为 20

		var order2 = order(arr.num,8,2);		//调用order函数，判断是不是连对
		var plane1 = plane(poker_arr,10);		//调用plane函数，判断是不是飞机
		var plane2 = plane(poker_arr,11);		//调用plane函数，判断是不是飞机

		if(order2) {
			var data = {
				'poker': poker_arr,
				'type': 8,                 //连对
				'num': arr.num[0]          //用来判断的关键值
			};
			return data;
		}else if(plane1) {
			var data = {
				'poker': plane1.arr,           //plane函数返回回来的对象的属性
				'type': 10,                 //三带一飞机
				'num': plane1.num[0]           //用来判断的关键值
			};
			return data;
		}else if(plane2) {
			var data = {
				'poker': plane2.arr,
				'type': 11,                 //三带一对飞机
				'num': plane2.num[0]           //用来判断的关键值
			};
			return data;
		}else {
			return false;
		}

	}

}
//rule end

/*
* 飞机
* 参数
*	poker_arr    Array    数组，最开始传进来的数组，没有拆分过的
* 	data         int     牌型，10：三带一飞机；11：三带一对飞机； 
* return poker    对象
* 	arr     重新排序之后的数组
*	result    判断的结果   true or false
*/

function plane(poker_arr,data) {
	var result;  //用来保存true or false
	
	var arr = cutOut(poker_arr);    		//获取 截取函数返回的对象
	var arr1 = arr.arr;             		//保存 截取到的三连对的牌组
	var arr_other = arr.arr_remain; 		//保存 截取到的剩下的牌组
	var temp_arr = arr.arr_num;     		//保存 截取到的三连对的点数
	var temp_other = arr.num_remain;		//保存 截取到的剩下的点数
	var k = arr.count;  					//用来保存总共有多少个三张牌

	console.log('temp—other： '+temp_other);

	//调用顺子函数，判断拿出来的三张牌的数组可以不可以成为一个三连对
	//如果牌型正确，拿出来的刚好是一个三连对
	var length = poker_arr.length;
	switch(k) {
		case 1:
			if(length==4 || length==5) {
				result = order(temp_arr,9,3);
			}else {
				return false;
			}
		break;
		case 2:
			if(length==8 || length==10) {
				console.log('length:'+length);
				result = order(temp_arr,9,3);
			}else {
				return false;
			}
		break;
		case 3:
			if(length==12 || length==15) {
				result = order(temp_arr,9,3);
			}else {
				return false;
			}
		break;
		case 4:
			if(length==16 || length==20) {
				result = order(temp_arr,9,3);
			}else {
				return false;
			}
		break;
		case 5:
			if(length==20) {
				result = order(temp_arr,9,3);
			}else {
				return false;
			}
		break;
	} 

	console.log('plane    ==== result ：'+result);
	poker_arr = arr1.concat(arr_other);

	switch(data) {
		case 10:
			if(result) {
				//重新给poker对象赋值
				poker = {
					'arr': arr1.concat(arr_other),
					'num': temp_arr,
					'result': result
				};
				return poker;
			}else {
				return false;
			}
		break;
		case 11:
			if(result) {
				for(var i=0; i<poker_arr.length-1; i+=2) {
					//判断剩下的poker_arr中的牌，是不是都是对子
					if(parseInt(temp_other[i]) != parseInt(temp_other[i+1])) {
						console.log('相等判断');
						return false;                  //返回poker对象
					}else {
						poker = {
							'arr': arr1.concat(arr_other),
							'num': temp_arr,
							'result': result
						};
						return poker;
					} 
				}
			}else {
				return false;
			}
		break;
	} 
	
}

/*
* 飞机截取函数
* 参数
*	poker_arr    Array      //当前桌面的牌

*/
function cutOut(poker_arr) {
	var k = 0;  //用来保存总共有多少个三张牌
	var index;  //用来存放第一个三张牌的下标值

	var temp = split(poker_arr);    //获取拆分后的对象
	var temp_arr = Array();         //用来保存所有三张牌的点数

	var arr1 = Array();   //临时数组，存放截取出来的三张牌的牌组

	for(var i=0; i<poker_arr.length-1; i++) {
		if(temp.num[i] == temp.num[i+2]) {
			k++;                            //统计传进来的牌组有多少个三张牌
			if(k==1) {                      //保存第一个三张牌的第一张牌的下标
				index = i;
			}
		}
	}

	for(var i=index; i<poker_arr.length; i++) {
		if(i == (index+(k*3))) {
			break;
		}else {
			arr1.push(poker_arr[i]);    //将 k 组三张牌都拿出来，放到一个新数组里面
			temp_arr.push(temp.num[i]);   //将 k 组三张牌的点数都拿出来，放到一个新数组里面
		}
		
	}
	
	var arr_other = Array();   //用来保存剩下的其他牌
	var temp_other = Array();   //用来保存剩下的其他点数
	var m = 0;

	//将剩下的牌从poker_arr中获取出来
	for(var i=0; i<poker_arr.length; i++) {

		switch(index) {
			case 0:
				i = index + (k*3);
				index++;
				m = 1;
			break;
			default:
				m=0;
				if(i != index) {
					arr_other.push(poker_arr[i]);
					temp_other.push(parseInt(temp.num[i]));
				}else {
					index++;
				}
			break;
		}
		if(m==1) {
			arr_other.push(poker_arr[i]);
			temp_other.push(parseInt(temp.num[i]));
		}
	}

	var data = {
		'arr': arr1,                  //截取到的三连对牌组
		'arr_remain': arr_other,      //截取完剩下的牌
		'arr_num': temp_arr,          //截取到的三连对的点数
		'num_remain': temp_other,     //截取完剩下的点数
		'count': k                    //有多少对三张牌的
	};
	return data;
}

/*
* 顺子,连对，三连对
* 参数 
*	poker_arr    Array
*	data         int  牌型，7代表：顺子；8代表：连对；9代表：三连对
*   int 		 int  数值，用来循环的自增
* return true or false
* 返回值 
*	当传入来的数组为顺子时，返回true，否则返回false
*/
function order(poker_arr,data,int) {
	var result = true;
	// console.log('order_arr: '+poker_arr);
	for(var i=0; i<poker_arr.length-1; i+=int) {
		if(poker_arr[i]<13) {

			switch(data) {
				case 7:
					// console.log('data:'+data); 
					if(poker_arr[i] != (poker_arr[i+1]+1)) { //判断相邻的两张牌相不相等，最大的牌是否在3到A的范围内
						result = false;
						break;
					}
				break;
				case 8:
					// console.log('data:'+data);
					// console.log('result:'+result);
					if(poker_arr[i]!=poker_arr[i+1]) {
						if(poker_arr[i+1]!=(poker_arr[i+2]+1)) {
							result = false;
							break;
						}
					}
				break;
				case 9:
					// console.log('data:'+data);
					// console.log('长度：'+poker_arr.length);
					//判断相隔两张牌的两张牌相不相等，最大的牌是否在3到A的范围内
					if(poker_arr.length == 3) {
						console.log('长度3');
						if(poker_arr[i]!=poker_arr[i+2]) {
							console.log('panduan');
							result = false;
							break;
						}
					}else {
						// console.log('data==9；长度：=='+poker_arr.length);
						if(poker_arr[i]!=poker_arr[i+2]) {
							if(poker_arr[i]!=(poker_arr[i+3]+1)) {
								result = false;
								break;
							}
						}
					}
				break;
			}
		}else {
			if(poker_arr.length == 3) {
				if(poker_arr[i] == poker_arr[i+2]) {
					result = true;
					break;
				}else {
					result = false;
					break;
				}
			}else {
				result = false;
				break;
			}
		}
	}
	// console.log('order-result:'+result);
	return result;
}

/*
* 拆分牌的点数和花色
* 参数 poker_arr   Array
* return temp 
* 返回temp对象，分别有代表点数的属性和代表花色的属性
*/
function split(poker_arr) {
	// console.log('rules.js ======= now_poker:'+poker_arr);
	var temp = {'num':[],'flower':[]};
	for(var i=0; i<poker_arr.length; i++){
		var arr = poker_arr[i].split('_');
		temp.num.push(parseInt(arr[0]));
		temp.flower.push(parseInt(arr[1]));
	}
	return temp;
}

//排序
function pokerSort(data_arr){
	//sort()返回的值为负值，数组元素位置不动。返回值为正值时，则两个元素位置调换
	data_arr.sort(function(x,y){
		var x_arr=x.split('_');	//使用_字符分割，x_arr[0]=>点数，x_arr[1]=>花色
		var y_arr=y.split('_');	//使用_字符分割，x_arr[0]=>点数，x_arr[1]=>花色

		if(x_arr[0]!=y_arr[0]){
			//如果张牌的点不相等则使用点数进行排序
			return y_arr[0]-x_arr[0];
		}else{
			//否则相等的话使用花色进行排序
			return y_arr[1]-x_arr[1];
		}
	});
	return data_arr;
}