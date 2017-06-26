// JavaScript Document
   var playFocus={
        initFunc:function(obj){//初始化
            this.playObj=$(obj);
            this.getDom();//选取节点，获取宽度高度位置
            this.showBtn();//初始化相关节点宽度高度位置
            this.sliderNav();//播放
        },
        getDom:function(){//选取节点，获取节点样式属性
            this.playBtn=this.playObj.find(".playBtn");//左右控制按钮
            this.loadBtn=this.playObj.find(".imgLoading");//载入等待按钮
            this.btnWidth=this.playBtn.outerWidth();//左右按钮宽度
            this.playBtnTop=(this.playObj.height()-this.playBtn.height())/2;//左右按钮top
            this.sliderFocus=this.playObj.find(".sliderFocus");//滚动可视区
            this.playList=this.playObj.find(".playList");//滚动列表
            this.playDoms=this.playList.find("li");//滚动列表子元素
            this.playNav=this.playObj.find(".playNav");//缩略图列表
            this.playNavHeight=this.playNav.height();//缩略图列表高度
            this.playNavTop=5;//缩略图列表位置
            this.navDom=this.playNav.find("li");//缩略图列表子元素
            this.listLen=this.playDoms.length;//滚动列表子元素个数
            this.listWidth=this.playDoms.width();//每次滚动的宽度
            this.tipFocus=this.playObj.find(".tipFocus");//侧边焦点图容器
            this.focusBack=this.tipFocus.find(".focusBack");//侧边焦点图内部遮罩层
            this.navBack=this.playObj.find(".navBack");//左右控制按钮
            this.prevFocus=this.playObj.find(".prevFocus");//上一张焦点图容器
            this.nextFocus=this.playObj.find(".nextFocus");//下一张焦点图容器
            this.timerId=null;//初始化定时器
            this.delay=4000;//播放间隔
        },
        showBtn:function(){//显示按钮，设置样式，初始化节点
            var _this=this;
            this.playBtn.css("top",this.playBtnTop);//设置左右按钮top
            this.playDoms.css({"position":"absolute","left":0,"zIndex":1}).first().css({"zIndex":2});
            this.playDoms.last().find("img").attr("src", this.playDoms.last().find("img").attr("data-src"));
            this.playDoms.eq(1).find("img").attr("src", this.playDoms.eq(1).find("img").attr("data-src"));
            this.playDoms.last().css({"zIndex":3}).animate({"left":-this.listWidth},function(){$(this).css({"zIndex":1,"left":0})});
            this.playDoms.eq(1).css({"zIndex":4}).animate({"left":this.listWidth},function(){$(this).css({"zIndex":1,"left":0})});
            this.setSideFocus(0);//初始化上一张，下一张图片
            if(this.listLen>1){
                this.playNavPos();//初始化缩略图
                function showBtn(distance){
                    _this.playBtn.each(function(i,items){//左右按钮显示隐藏
                        if($(this).hasClass("prevBtn")){
                            $(this).stop().animate({"left":distance});
                        }else{
                            $(this).stop().animate({"right":distance});
                        }
                    })
                }
                clearInterval(this.timerId);//清除定时器
                this.timerId=setInterval(function(){//开启定时器
                    _this.playBtn.eq(1).trigger("click");
                },_this.delay);

                this.sliderFocus.hover(function(){//鼠标划过滚动区域执行操作
                    clearInterval(_this.timerId);//清除定时器
                    showBtn(_this.btnWidth);//显示左右按钮
                },function(){//鼠标离开滚动区域执行操作
                    clearInterval(_this.timerId);//清除定时器
                    _this.timerId=setInterval(function(){//开启定时器
                        _this.playBtn.eq(1).trigger("click");
                    },_this.delay);
                    showBtn(-_this.btnWidth);//隐藏左右按钮
                });
            }


        },
        sliderNav:function(){
            var _this=this;
            this.navDom.click(function(){//点击缩略图播放图片
                var endNum=_this.playNav.find(".active").index(),curNum=$(this).index();
                if(!_this.playDoms.eq(curNum).is(":animated") && !$(this).hasClass("active")){
                    _this.playSlider(curNum,endNum);
                }
            });
            this.playBtn.each(function(i,items){//点击左右箭头播放图片
                $(this).click(function(){
                    var endNum=_this.playNav.find(".active").index(),curNum=0;
                    if($(this).hasClass("prevBtn")){
                        curNum=(endNum==0?_this.listLen-1:endNum-1);
                    }else{
                        curNum=(endNum==(_this.listLen-1)?0:endNum+1);
                    }
                    if(!_this.playDoms.eq(endNum).is(":animated")) {
                        _this.playSlider(curNum, endNum);
                    }
                });
            })
        },
        setSideFocus:function(curNum){//设置上一张，下一张图片
            var _this=this;
            this.tipFocus.hover(function(){
                _this.focusBack.stop().animate({"opacity":0});
            },function(){
                _this.focusBack.stop().animate({"opacity":0.5});
            });
            var prevdataSrc=(curNum==0?(this.playDoms.last().find("img").attr("src")||this.playDoms.last().find("img").attr("data-src")):(this.playDoms.eq(curNum-1).find("img").attr("src")||this.playDoms.eq(curNum-1).find("img").attr("data-src"))),
                nextdataSrc=(curNum==(this.listLen-1)?(this.playDoms.first().find("img").attr("src")||this.playDoms.first().find("img").attr("data-src")):(this.playDoms.eq(curNum+1).find("img").attr("src")||this.playDoms.eq(curNum+1).find("img").attr("data-src")));
            this.prevFocus.css({"backgroundImage":"url("+prevdataSrc+")"});
            this.nextFocus.css({"backgroundImage":"url("+nextdataSrc+")"});
        },
        playSlider:function(curNum,endNum){
            var _this=this,srcDom=this.playDoms.eq(curNum).find("img[data-src]"),tsrc=srcDom.attr("data-src"),prevNum=0;
            this.navDom.eq(curNum).addClass("active").siblings().removeClass("active");//当前选中状态
            this.navDom.eq(endNum).find(".focusText").animate({"bottom":-this.playNavHeight}).end().find(".focusImage").animate({"top":0});
            this.navDom.eq(curNum).find(".focusText").animate({"bottom":0}).end().find(".focusImage").animate({"top":-this.playNavHeight});
            if(srcDom.length>0 && tsrc!="undefined" && tsrc!=""){srcDom.attr("src",tsrc)}//替换图片src

            if(curNum==this.listLen-1){
                prevNum=0
            }else{
                prevNum=curNum+1
            }

            if(prevNum==endNum){
                if(curNum-1<0){
                    prevNum=this.listLen-1
                }else{
                    prevNum=curNum-1
                }
            }
            this.playDoms.eq(prevNum).find("img").attr("src",this.playDoms.eq(prevNum).find("img").attr("data-src"));
            this.playDoms.eq(endNum).find("img").attr("src",this.playDoms.eq(endNum).find("img").attr("data-src"));
            this.playDoms.eq(curNum).css({"zIndex":2});

            this.playDoms.eq(prevNum).css({"zIndex":3}).animate({"left":-this.listWidth},function(){
                $(this).css({"zIndex":1,"left":0});
            });

            this.playDoms.eq(endNum).css({"zIndex":4}).animate({"left":this.listWidth},function(){
                $(this).css({"zIndex":1,"left":0});
            });

            //$("title").text("后面的："+prevNum+" "+"当前的:"+curNum+" "+"上一张"+endNum);
            this.setSideFocus(curNum);//设置上一张下一张图片背景
        },
        playNavPos:function(){//初始化缩略图列表位置及设置默认高亮的按钮
            this.playNav.animate({"bottom":5});
            this.navBack.animate({"height":90,"bottom":0});
            this.navDom.first().find(".focusText").animate({"bottom":0}).end().find(".focusImage").animate({"top":-this.playNavHeight});
            var desText=$(".focusText .text");
            desText.css({"top":(this.playNavHeight-desText.outerHeight())/2});
        }
}