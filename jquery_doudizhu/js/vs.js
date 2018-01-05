/*
*判断是否可以打出，分两大部分，一为牌型一样时，另一为牌型不一样时
*new_data就是在调用checkvS这个函数的传进来的牌面上的牌
*/

function checkVS(data, now_data){
	// console.log('first-data:'+data);
	// console.log('first-now_data:'+now_data);
	if (now_data == null) {
		// console.log('===============null===================');
		return true;
	}

	// console.log('data.type:'+data.type);
	// console.log('now_data.type:'+now_data.type);
	// console.log('now_data.length:'+now_data.poker.length);
	// console.log('now_data.poker:'+now_data.poker)												;

	if (data.type == now_data.type){										//牌型一样时

		// console.log('====================type======================');
		

		/*牌型一样时又分两种情况，一为长度一样，另一为长度不一样*/
		if(data.poker.length != now_data.poker.length) {							//长度不一样时
			// console.log('data-length:'+data.poker.length);
			// console.log('now_data-length:'+now_data.poker.length);

			// console.log('type ==================== error');

			return false;
		}else {													//长度一样时

			if (data.poker.length == 1 && data.num == 14 && now_data.num == 14) {			//出的牌为单张，且为王，场面牌也为王时

				// console.log('================== 大小王PK ==================');

				if (data.flower > now_data.flower) {							//选择的牌为大王

					// console.log('data-flower:'+data.flower);

					return true;
				} else {											//选择的牌为小王

					// console.log('flower ==================== error');

					return false;
				}
			}//大小王判断结束

			if (data.num > now_data.num) {								//牌型一样且长度也一样时，只需比较关键值大小即可

				// console.log('data-num:'+data.num);

				return true;
			} else {

				// console.log('num biger or smaller =================== error');

				return false;
			}
		}
	} else {														//牌型不一样时
		// console.log('else');
		if (data.type > 11 && now_data.type != 13){								//选择的牌型为王炸和炸弹且场面牌不为王炸

			// console.log('======================= 出炸弹 ========================');

			return true;
		} else {

			// console.log('=========================== 出炸弹 false ==============================');

			return false;
		}
	}
}
