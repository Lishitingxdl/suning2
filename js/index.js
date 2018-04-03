//banner
{
	let imgs=document.querySelectorAll(".banner_img img");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector(".banner_item");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.dir(img[0])
	pagers.forEach(function (ele,index) {
		ele.onclick=function () {
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);

	// setInterval(function(){    //开启播放、清除播放功能
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){       //判断边界
			n=0;
		}
		if(n<0){                  //判断n<0
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		}
	banner.onmouseenter=function(){           //鼠标进入暂停
		clearInterval(t);                     //清除自动
	}
	banner.onmouseleave=function(){			  //鼠标进入开始
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag) {
			flag=false;
			move();
		}
	};
	prev.onclick=function(){
		n-=2;
		if(flag) {
			flag=false;
			move();
		}
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}
//nav
{
	let lis=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	lis.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//onscroll事件
{
	let topbar=document.querySelector("#topbar");
	let leftbar=document.querySelector("#leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>700){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>1800){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
}
//左侧top
{
	let totop=document.querySelector(".leftbar_top");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){  
			st-=200;      //固定速度
			if(st<0){
				st=0;
				clearInterval(t); //把当前时间函数停止
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}
//右侧top
{
	let totop1=document.querySelector(".totop");
	totop1.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){  
			st-=200;      //固定速度
			if(st<0){
				st=0;
				clearInterval(t); //把当前时间函数停止
			}
			document.documentElement.scrollTop=st;
		},25);
	}
}
//楼层
{
	let tips=document.querySelectorAll(".leftbar_1");
	let containers=document.querySelectorAll(".container");
	let flag=true;
	tips.forEach(function(ele,index) {		//遍历  当前点击元素
		ele.onclick=function(){	
		flag=false;	
			let ot=containers[index].offsetTop-140;		//对应楼层距离文档顶部的值
			//document.documentElement.scrollTop=ot;

			//let speed=(ot-document.documentElement.scrollTop)/8
			let now=document.documentElement.scrollTop   //当前滚动高度
			let speed=(ot-now)/10;		//速度
			let time=0;
			let t=setInterval(function(){
				time+=20;
				now+=speed;
				flag=true;

				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;  //把当前值赋给scrollTop
			},20)
		}
	});
	//监测滚动时是否超过楼层高度
	window.addEventListener("scroll", function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<containers.length;i++){    //遍历下每个楼层
			if(st>containers[i].offsetTop-140){    //判断是否大于楼层高度
				// obj.classList.remove("active");
				// tips[i].classList.add("active");
				// obj=tips[i];
				for(let i=0;i<tips.length;i++){     //循环
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}
			
		}
	})
}
//大惠聚
{
        const prev=document.querySelector(".dahuiju_prev");
        const next=document.querySelector(".dahuiju_next");
        const inner=document.querySelector(".dajuhui_inner");
        let n=1;
        let flag=true;
        next.onclick=function(){
            if(flag){
                flag=false;
                n++;
                inner.style.transition="all 0.5s";
                inner.style.marginLeft=-1000*n+"px";
            }
        };
        prev.onclick=function(){
            if(flag){
                flag=false;
                n--;
                inner.style.transition="all 0.5s";
                inner.style.marginLeft=-1000*n+"px";
            }
        };
        inner.addEventListener("transitionend",function(){
            flag=true;
            if(n===4){
                inner.style.transition="none";
                inner.style.marginLeft="-1000px";
                n=1;
            }
            if(n===0){
                inner.style.transition="none";
                inner.style.marginLeft="-3000px";
                n=3;
            }
        })
}

//排行榜




//banner左侧
// {
//     $(".banner_nav1")
//         .mouseenter(function () {
//             let index = $(this).index(".banner_nav1");
//             $(".menu").eq(index).show();
//         })
//         .mouseleave(function () {
//             let index = $(this).index(".banner_nav1");
//             $(".menu").eq(index).hide();
//         })
// }