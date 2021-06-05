$(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,

    afterLoad: function (anchorLink, index) {
      // 第一页
      if (index == 1) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section1 .title').animate({"top":"13%"},200).animate({"top":"8%"},200).animate({"top":"10%"},200)
        $('.section1 .people').animate({"opacity":1},600)
        $('.section1 .content').css({
          "left":"18.4375rem",
          "transform":"rotate(-714deg)",
          "transition": "0.6s"
        })
        $('.section1 .introduction').animate({"left":"25%"},500)
        $('.section1 .eye').animate({"top":"38.125rem","opacity":1},200)
        $('.section1 .left').css({
          "left":"2.1875rem",
          "transform":"rotate(360deg)",
          "transition": "0.5s",
          "opacity":1
        })
        $('.section1 .right').css({
          "top":"40.625rem",
          "transition": "0.5s",
          "opacity":1
        })
        $('.section1 .lingdai').css({
          "top":"46.25rem",
          "transition": "0.5s",
          "opacity":1
        })
      }

      // 第二页
      if (index == 2) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section2 .top').animate({"top":"0","opacity": 1},600)
        $('.section2 .content').css({
          "left":"0",
          "transform":"rotate(-360deg)",
          "transition": "0.6s",
          "opacity":1
        })
        $('.section2 .text').animate({
          "opacity":"1"
        }, 600).animate({
          "left":"10rem"
        },300).animate({
          "left":"7.5rem"
        },200)
      }

      // 第三页
      if (index == 3 ) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section3 .people').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.8s"
        })
        $('.section3 .title').animate({
          "opacity":1,
          "top":"6.25rem"
        },700)
        $('.section3 .text .dui1').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.4s"
        })
        $('.section3 .text .dui2').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.6s"
        })
        $('.section3 .text .dui3').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.8s"
        })
        $('.section3 .text .t1').animate({
          "opacity":1,
          "left":"0"
        },400)
        $('.section3 .text .t2').animate({
          "opacity":1,
          "left":"0"
        },600)
        $('.section3 .text .t3').animate({
          "opacity":1,
          "left":"0"
        },800)
      }

      // 第四页
      if (index == 4) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section4 .paper img').css({
          "opacity":1,
          "transition":"0.4s",
          "transform":"scale(1,1)"
        })
        $('.section4 .title li').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.6s"
        })
        $('.section4 .content .o').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.5s"
        })
        $('.section4 .content .time').animate({
          "left":"0",
          "opacity":1
        },600)
        $('.section4 .content .name').animate({
          "left":"0",
          "opacity":1
        },800)
        $('.section4 .content .neirong').css({
          "transform":"rotateX(360deg)",
          "opacity":1,
          "transition":"0.9s"
        })
      }

      // 第五页
      if (index == 5) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section5 .paper img').css({
          "opacity":1,
          "transition":"0.4s",
          "transform":"scale(1,1)"
        })
        $('.section5 .title li').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.6s"
        })
        $('.section5 .content1').animate({
          "opacity":1,
          "left":"5rem"
        },600)
        $('.section5 .content2').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.6s",
        })
        $('.section5 .content3').css({
          "opacity":1,
          "transform":"scale(1,1)",
          "transition":"0.6s",
        })
      }

      // 第六页
      if (index == 6) {
        $('.bg').animate({ "opacity": 1 }, 1000)
        $('.section6 .me').animate({
          "left":"8.75rem",
          "opacity": 1
        },500)
        $('.section6 .span_bg').animate({
          "right":"6.875rem",
          "opacity": 1
        },500)
        $('.section6 .erwm').css({
          "transform":"rotate(720deg)",
          "transition":"0.5s",
          "right":"6.875rem",
          "opacity": 1
        })
        $('.section6 .wao').animate({
          "bottom":"1.875rem",
          "opacity": 1
        },500)
      }
    },


    // 离开页面时
    onLeave: function (index) {
      if(index == 1) {
        $('.bg').animate({ "opacity": 0},100)
        $('.section1 .title').animate({"top":"-20%"},100)
        $('.section1 .people').animate({"opacity":0},100)
        $('.section1 .content').css({
          "left":"33.6rem"
        })
        $('.section1 .introduction').animate({"left":"-40%"},100)
        $('.section1 .eye').animate({"top":"0","opacity":0},100)
        $('.section1 .left').css({
          "left":"-2.1875rem",
          "opacity":0
        })
        $('.section1 .right').css({
          "top":"43.625rem",
          "opacity":0
        })
        $('.section1 .lingdai').css({
          "top":"56.25rem",
          "opacity":0
        })
      }

      if (index == 2) {
        $('.bg').animate({ "opacity": 0 }, 100)
        $('.section2 .top').animate({"top":"-25%","opacity": 0},50)
        $('.section2 .content').css({
          "left":"28.2rem",
          "transform":"rotate(360deg)",
          "transition": "0.5s",
          "opacity":0
        })
        $('.section2 .text').animate({
          "left":"-20rem"
        }, 200)
      }

      if (index == 3) {
        $('.bg').animate({ "opacity": 0 }, 100)
        $('.section3 .people').css({
          "opacity":0,
          "transform":"scale(1.5,1.5)",
          "transition":"0.2s"
        })
        $('.section3 .title').animate({
          "opacity":0,
          "top":"0"
        },200)
        $('.section3 .text .dui').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.2s"
        })
        $('.section3 .text .text_content').animate({
          "opacity":0,
          "left":"13.75rem"
        },200)
      }

      if (index == 4) {
        $('.bg').animate({ "opacity": 0 }, 100)
        $('.section4 .title li').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.2s"
        })
        $('.section4 .content .o').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.1s"
        })
        $('.section4 .content .time').animate({
          "left":"-9.375rem",
          "opacity":0
        },200)
        $('.section4 .content .name').animate({
          "left":"-9.375rem",
          "opacity":0
        },0)
        $('.section4 .content .neirong').css({
          "transform":"rotateX(180deg)",
          "opacity":0,
          "transition":"0.2s"
        })
        $('.section4 .paper img').css({
          "opacity":0,
          "transition":"0.2s",
          "transform":"scale(0.3,0.3)"
        })
      }

      if (index == 5) {
        $('.bg').animate({ "opacity": 0 }, 100)
        $('.section5 .paper img').css({
          "opacity":0,
          "transition":"0.2s",
          "transform":"scale(0.3,0.3)"
        })
        $('.section5 .title li').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.2s"
        })
        $('.section5 .content1').animate({
          "opacity":0,
          "left":"-15rem"
        })
        $('.section5 .content2').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.2s",
        })
        $('.section5 .content3').css({
          "opacity":0,
          "transform":"scale(0.1,0.1)",
          "transition":"0.2s",
        })
      }

      if (index == 6) {
        $('.bg').animate({ "opacity": 0 }, 100)
        $('.section6 .me').animate({
          "left":"-8.75rem",
          "opacity": 0
        },200)
        $('.section6 .span_bg').animate({
          "right":"-7.875rem",
          "opacity": 0
        },200)
        $('.section6 .erwm').css({
          "transform":"rotate(720deg)",
          "transition":"0.2s",
          "right":"-6.875rem",
          "opacity": 0
        })
        $('.section6 .wao').animate({
          "bottom":"-3.875rem",
          "opacity": 0
        },200)
      }
    }
  })
})