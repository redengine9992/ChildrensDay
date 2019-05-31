$(function(){
	
	var this1 = "";
	var x = 0
	var color = ['#fb0948','#f209fb','#0303fb','#03befb','#03fb32','#f8fb03','#fbb203'];
	var bacol = ["247,99,191,","247,89,191,","247,79,191,","247,69,191,","247,59,191,","247,49,191,","247,39,191,"]

	var liyong = "JXU2NzRFJXU1MkM3"
	var name = [
		"JXU1NTEwJXU1MjUxJXU5OTk5","JXU2NzRFJXU2NjBFJXU3RkUw","JXU4MkNGJXU1OTU1JXU1Qjg3","JXU1RjIwJXU3Mzg5JXU0RTNE","JXU5MEQxJXU3QTBCJXU1QzlB",
		"JXU2NzMxJXU1NkZEJXU5Rjk5","JXU0RjU1JXU5NzUzJXU5ODk2","JXU4NDk5JXU4MkIzJXU4Mjcz","JXU2NzRFJXU5NkVBJXU3M0Iy","JXU2NzRFJXU2QzM4JXU4MERD",
		"JXU5NjQ2JXU2MkRCJXU1QkND","JXU1RUQ2JXU4RkYwJXU1NDA5JXU1MTc1","JXU4M0FCJXU2QzM4JXU2NTg3","JXU2RjU4JXU3OTNDJXU2MjEw","JXU4MkNGJXU2RDc3JXU1RkQ3",
		"JXU1MjE4JXU1RkQ3JXU5RTRG","JXU5MDkzJXU0RjFGJXU1MDY1","JXU5QjRGJXU1OTQ3JXU5RTRG","JXU5NjQ4JXU4OUMyJXU2QjYz","JXU2NzRFJXU4RkRDJXU5OERF",
		"JXU5NjQ4JXU1QzU1JXU4RDIy","JXU2QjI3JXU4RDI0JXU2NTg3","JXU1RTlFJXU1MUU0JXU3NDND","JXU2Qzg4JXU2N0NGJXU5NzE2","JXU5Rjk5JXU5ODk2JXU2NTg3",
		"JXU1QzBGJXU4MkIz","JXU3MzhCJXU5NjMz","JXU5MEI5JXU1Qjgx","JXU2NzRFJXU1RkUw","JXU3RjU3JXU1MTc1","JXU3RjU3JXU1NjA5JXU2MTY3"
		//31
	]
	var ukuqma = [
			"OTk1MTg2OTQ=",'NTE1MDA1OTQ=','MDU3NDYwOTQ=','NDM0MTQ3OTQ=','ODg4ODQ5OTQ=',
			"MTc4NjcyOTQ=",'NzMzNzYyOTQ=','NjQxNzM2OTQ=','MjAwMzMwOTQ=','NzQ0MzY5OTQ=',

			"MjMzOTk5OTQ=",'MjMwMjgxOTQ=','MzQ5MDAwOTQ=','NDc1MjMxOTQ=','Mzk0NjMzOTQ=',
		
			"MDQ0NjU5OTQ",'NzczNzgzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ',
			
			"MDQ0NjU5OTQ",'NzczNzgzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ',
			"MDQ0NjU5OTQ",'NzczNzgzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ','NzU3MDYzOTQ',
			'NzU3MDYzOTQ'
	]

			setInterval(function(){
//				var x = Math.floor(Math.random()*(6+1)+0)
			x++;
			$('.yypb').css('color',color[x])
			$('.nwpw').css('background',"rgba("+bacol[x]+0.5+")")
			if(x>=6){
				x=0
			}
			},800)
			$('.draw').click(function() {
				var name1 = $('#name1').val()
				if(name1 == "") {
					$('#name1').attr('placeholder', "请先输入名字再领取！")
					$('.draw').css('color','red')
					times()
				} else {
					if(name1==decode64(liyong)){
						$('#name1').val("")
						$('#name1').attr('placeholder',"恭喜您发现彩蛋，但"+decode64(liyong)+"没有巧乐兹！")
						$('.ihawaw').show()
						$('#name1').focus(function(){
							hint()
						})
						setTimeout(function(){
							$(window).scrollTop(250)
						},1000)
					}else{
						var bmmtkg = localStorage.getItem("name");
						console.log(bmmtkg)
						$.each(name, function(index, rss) {
							
							if(bmmtkg==null){
								if(name1 == decode64(rss)) {
									localStorage.setItem("name", name1);
									//
									this1 = index;
									localStorage.setItem("index", index)
									$('#name1').val("恭喜您！您的兑奖码为：" + decode64(ukuqma[index]))
									ghqw();
									return false;
								}else{
									qayk();
									$('#name1').focus(function(){
										hint();
									})
									times();
								}
								
							}else if(name1==bmmtkg){
								var index_ = localStorage.getItem("index");
								this1 = index;
								$('#name1').val("恭喜您！您的兑奖码为：" + decode64(ukuqma[index_]))
									ghqw();
									return false;
							}else{
								if(name1 == decode64(rss)) {
									
									$('#name1').val("")
									$('#name1').attr('placeholder',"一个用户只能领获取一次！")
									return false;
								}else{
									qayk();
									$('#name1').focus(function(){
										hint();
									})
									times();
								}
								
							}
						});
					}
				}
			})
			//计时
			function times(){
				setInterval(function(){
					$('.draw').css('color','#000000')
				},1000)
			}
			//输入框提示
			function hint(){
				$('#name1').val("")
				$('#name1').attr('placeholder',"请输入名字领取支付宝红包口令！")
				$('#name1').css('color','#000000')
				$('.ihawaw').slideUp(1000)
			}
			//名字正确
			function ghqw(){
				$('.draw').remove()
				$('.tjrm').css('display', 'block')
				setTimeout(function() {
					$('.dgyt').slideDown(2000)
				}, 0)
				$('#name1').attr('disabled', "disabled")
				
			}
			//名字错误
			function qayk(){
				$('.draw').css('color','red')
				$('#name1').val("换一个名字再试试吧！")
				$('#name1').css('color','red')
			}
			//复制
			console.log(this1)
			var clipboard = new Clipboard('.tjrm', {
					text: function() {
								return decode64(ukuqma[this1]);
						}
						});
						//			复制成功
			clipboard.on('success', function(e) {
				console.log(e)
				layer.open({

					content: "您的兑奖码为："+decode64(ukuqma[this1])+'，已帮您复制好了，打开支付宝→红包→输入口令即可领取红包！快去试试吧！！',
//					btn: '前往微信',
//					skin: 'footer',
					style: 'color:#D92142; font-size:19px;',
					yes: function(index) {
						console.log(index)

					}
				});
			});
//			复制失败
			clipboard.on('error', function(e) {

				layer.open({
					content: '您的浏览器不支持自动复制，长按复制红包口令吧！ ',
//					btn: '前往微信',
//					skin: 'footer',
					style: 'color:#333; font-size:19px;line-height:25px;',
					yes: function(index) {
						
						layer.close(index);
					}
				});
			});

			//好的
			$('.vbr').click(function(){
				$('.xupw').hide();
				$('.xupw2').show()
//				$('.boxdd').show()
				$('.xupw2>.xupw_box>.lkj').html("要犒劳一下一直努力的自己");
				$('.xupw2>.xupw_box>.vbr2').html("对！")
				
			})
			//不吃
			$('.gikt').click(function(){
				$('.xupw2').show()
				$('.xupw').hide();
				$('.xupw2>.xupw_box>.lkj').html("不犒劳一下自己，说不过去吧！")
				$('.xupw2>.xupw_box>.vbr2').html("emmm")
			})
			//好的2
			$('.vbr2').click(function(){
				$('.boxdd').show();
				$('.xupw2').hide()
			})
			
			
			
			
})
