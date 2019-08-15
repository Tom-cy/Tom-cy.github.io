(function (document) {
    $.fn.Drag1 = function () {
        var aLi1 = $(".q1");
        var aLi2 = $(".q2");
        aLi1.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")

            var Answer2 = $("#Answer_2")
            let num1 = Answer2.children('li').children('.selected').attr('index')
            var Answer1 = $("#Answer_1")
            let num2 = Answer1.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre1").attr("src", 'img/nextgo.jpg');
            }

        })
        aLi2.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")
            var Answer2 = $("#Answer_2")
            let num1 = Answer2.children('li').children('.selected').attr('index')
            var Answer1 = $("#Answer_1")
            let num2 = Answer1.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre1").attr("src", 'img/nextgo.jpg');
            }

        })
        $("#pagtion_right1").click(function () {

            var Answer2 = $("#Answer_2")
            let num1 = Answer2.children('li').children('.selected').attr('index')
            var Answer1 = $("#Answer_1")
            let num2 = Answer1.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $(".qa1").css("display", "none")
                $(".qa2").css("display", "block")
                $(".wd_box").css('background-image', 'url(img/dt2_bj2.jpg)')
                $(".q2").Drag2()
            } else {
                // $(".warn_box").html("请完成当前页作答");    
                return
            }
        })
    }
})(document);
(function (document) {
    $.fn.Drag2 = function () {
        var aLi1 = $(".q3");
        var aLi2 = $(".q4");
        aLi1.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")
            var Answer3 = $("#Answer_3")
            let num1 = Answer3.children('li').children('.selected').attr('index')
            var Answer_4 = $("#Answer_4")
            let num2 = Answer_4.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre2").attr("src", 'img/nextgo.jpg');
            }
        })
        aLi2.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")
            var Answer3 = $("#Answer_3")
            let num1 = Answer3.children('li').children('.selected').attr('index')
            var Answer_4 = $("#Answer_4")
            let num2 = Answer_4.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre2").attr("src", 'img/nextgo.jpg');
            }
        })
        $(".pagtion_right2").click(function () {

            var Answer3 = $("#Answer_3")
            let num1 = Answer3.children('li').children('.selected').attr('index')
            var Answer_4 = $("#Answer_4")
            let num2 = Answer_4.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                // return
                $(".qa2").css("display", "none")
                $(".qa3").css("display", "block")
                $(".wd_box").css('background-image', 'url(img/dt3_bj3.jpg)')
                $(".q3").Drag3()
            } else {
                // $(".warn_box").html("请完成当前页作答");   
                return
            }
        })

    }
})(document);
(function (document) {
    $.fn.Drag3 = function () {
        var aLi1 = $(".q5");
        var aLi2 = $(".q6");
        aLi1.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")
            var Answer_6 = $("#Answer_6")
            let num1 = Answer_6.children('li').children('.selected').attr('index')
            var Answer5 = $("#Answer_5")
            let num2 = Answer5.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre").attr("src", 'img/submit.jpg');
            }
        })
        aLi2.find("li").click(function () {
            var thisLi = $(this);
            thisLi.children("img").addClass("selected");
            $(thisLi.siblings()[0]).children("img").removeClass("selected")
            var Answer_6 = $("#Answer_6")
            let num1 = Answer_6.children('li').children('.selected').attr('index')
            var Answer5 = $("#Answer_5")
            let num2 = Answer5.children('li').children('.selected').attr('index')
            if (num1 && num2) {
                $("#img_pre").attr("src", 'img/submit.jpg');
            }

        })

        $(".pagtion_right3").click(function () {
            var Answer_6 = $("#Answer_6")
            let num1 = Answer_6.children('li').children('.selected').attr('index')
            var Answer5 = $("#Answer_5")
            let num2 = Answer5.children('li').children('.selected').attr('index')

            if (num1 && num2) {

                let num1 = $("#Answer_1").children('li').children('.selected').attr('index')
                let num2 = $("#Answer_2").children('li').children('.selected').attr('index')
                let num3 = $("#Answer_3").children('li').children('.selected').attr('index')
                let num4 = $("#Answer_4").children('li').children('.selected').attr('index')
                let num5 = $("#Answer_5").children('li').children('.selected').attr('index')
                let num6 = $("#Answer_6").children('li').children('.selected').attr('index')
                var cun = ''
                if (num1 !== '0') {
                    cun = cun + '1,'
                }
                if (num2 !== '0') {
                    cun = cun + '2,'
                }
                if (num3 !== '0') {
                    cun = cun + '3,'
                }
                if (num4 !== '1') {
                    cun = cun + '4,'
                }
                if (num5 !== '1') {
                    cun = cun + '5,'
                }
                if (num6 !== "0") {
                    cun = cun + '6,'
                }
                if (cun === '') {
                    $(".wd_box").css('display', 'none');
                    $(".rcj_div").css('display', 'block');
                } else {
                    $(".warn").html(cun.substr(0, cun.lastIndexOf(',')))
                    $(".wd_box").css('display', 'none');
                    $(".ct_box").css('display', 'block');
                }
            } else {
                // $(".warn_box").html("请完成当前页作答");   
                return
            }

        })



    }
})(document);