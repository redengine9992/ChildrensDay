$(function(){
	
	var this1 = "";
	var x = 0
	var color = ['#fb0948','#f209fb','#0303fb','#03befb','#03fb32','#f8fb03','#fbb203'];
	var bacol = ["247,99,191,","247,89,191,","247,79,191,","247,69,191,","247,59,191,","247,49,191,","247,39,191,"]

	var liyong = "JXU2NzRFJXU1MkM3"
	var name = [
		"JXU2NUJEJXU3MzJFJXU4MkYx","JXU5RUM0JXU3OUNCJXU3MUQ1","JXU2Nzk3JXU3NDVDJXU3NDND","JXU2NzRFJXU5OTk5JXU4MkIx","JXU2NzRFJXU3RkUwJXU3MUQ1",
		"JXU2Nzk3JXU2NjdBJXU2MTY3","JXU1RjIwJXU2MjExJXU2RTkw","JXU5RUM0JXU3OThGJXU4MjJB","JXU2NzRFJXU1QjUwJXU2REI1","JXU2NzRFJXU0RkNBJXU5NTBC",
		"JXU2NzRFJXU1QzBGJXU3NDJB","JXU2NzRFJXU4MjEyJXU3NDJB","JXU5N0U2JXU5NzU5JXU4NDBE","JXU2NzRFJXU1OTgyJXU2NzA4","JXU2NzRFJXU4MEIyJXU2Nzcw",
		"JXU1RTlFJXU3OEE3JXU3Mzg5","JXU1MjE4JXU1RTdGJXU1RTcz","MTMldTU5RDA=","JXU1NDY4JXU4MjZG","JXU2NzRFJXU3MjM1"
	]
	//20
	var ukuqma = [
			"NDA5NTA0OTQ=",'ODQ5OTAzOTQ=','NzU2NTcyOTQ=','MDM0ODczOTQ=','NjEyOTA3OTQ=',
			"NTExMDg5OTQ=",'MDUxOTUzOTQ=','ODA1NTAyOTQ=','Mjk1MzIyOTQ=','Nzk5NTAyOTQ=',

			"NzA1MDIwOTQ=",'NzA4Mzk3OTQ=','NjQ0MDY0OTQ=','MzgwNDcyOTQ=','NTgxNjY0OTQ=',
			"MTY0NDEwOTQ=",'MjE3MjI0OTQ=','NzYzMjM5OTQ=','MDczMDMzOTQ=','NjMyODg3OTQ='
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
