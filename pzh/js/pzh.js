$(function(){
    $(".cy_btn,.cy_btn2,.cy_btn3").click(function(){
        $(".sy_con,.wcy_box,.gz_box").hide();
        $(".swiper1").show();
        var mySwiper = new Swiper('.swiper1', {
            speed: 300,
            autoplay: false,
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });
//    点击填写信息按钮
    $(".tx_btn").click(function(){
        $(".yzj_wtx_box").hide();
        $(".uf_form").show();
    });
    //规则弹层
    $("#gz_btn").click(function () {
        $(".gz_box").show();
    });
    $(".gz_back_home").click(function () {
        $(".gz_box").hide();
    });
//    关闭中奖弹窗
    $(".ycy_wzj_close").click(function(){
        $(".ycy_wzj_box").hide();
    });
    //分享弹层
    $(".fx_btn").click(function () {
        $(".fxts_box").show();
    });
    $(".fxts_box").click(function () {
        $(this).hide();
    });
    //	获取openId,token
    var url = window.location.href;
    var code = '', openId = '', token = '';
    function getUrlParam(url, name) {
        return new Promise(function (resolve, reject) {
            var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
            var matcher = pattern.exec(url);
            var items = null;
            if (null != matcher) {
                try {
                    items = decodeURIComponent(decodeURIComponent(matcher[1]));
                } catch (e) {
                    try {
                        items = decodeURIComponent(matcher[1]);
                    } catch (e) {
                        items = matcher[1];
                    }
                }
            }
            code = items;
            var res = {
                status: 200
            };
            resolve(res);
        });
    }
    getUrlParam(url, "code").then(function (res) {
        if (res.status == 200) {
            $.ajax({
                type: "POST",
                url: "http://pzhfather.huangys.com/pzhhb/father/login.do",
                data: 'code=' + code,
                success: function (msg) {
                    if (msg.state == 2) {
                        openId = msg.openid;
                        token = msg.token;
                    }
                }
            });
        }
    });
    //	查看中奖
    $("#cx_btn").click(function () {
        searchPrize();
    });
//    查看中奖接口
    var searchPrize=function(){
        $.ajax({
            type: "POST",
            url: "http://pzhfather.huangys.com/pzhhb/father/show.do",
            data: "openid=" + openId + "&token=" + token,
            success: function (msg) {
                if (msg.state == 2) {
                    //登录未参加活动
                    if (msg.status == 0) {
                        $(".wcy_box").show();
                    }
                    //已参加活动未中奖
                    else if (msg.status == 1) {
                        $(".ycy_wzj_box").show();
                    }
                    //已参加活动中奖
                    else if (msg.status == 2) {
                        if (msg.userInfo == 'yes') {
                            $("#userName").html("收货信息：&nbsp;&nbsp;" + msg.data.userName + "&nbsp;&nbsp;" + msg.data.mobilePhone);
                            $("#userIdCard").html("身份证号码：" + msg.data.idCard);
                            $("#userAddress").html(msg.data.adress);
                            if (msg.type == 1) {
                                $("#yPrize-img").attr("src", "http://pzhfather.huangys.com/img/yjp04.png");
                                $(".yzj_ytx_box").show();
                            } else if (msg.type == 2) {
                                $("#yPrize-img").attr("src", "http://pzhfather.huangys.com/img/yjp03.png");
                                $(".yzj_ytx_box").show();
                            } else if (msg.type == 3) {
                                $("#yPrize-img").attr("src", "http://pzhfather.huangys.com/img/yjp02.png");
                                $(".yzj_ytx_box").show();
                            } else if (msg.type == 4) {
                                $("#yPrize-img").attr("src", "http://pzhfather.huangys.com/img/yjp01.png");
                                $(".yzj_ytx_box").show();
                            }
                        } else {
                            //弹出填写用户信息页面
                            $(".uf_form").show();
                        }
                    }
                } else {
                    alert(msg.msg);
                }
            },
            error: function () {
                alert('服务器错误，稍后重试');
            }
        });
    };
    //	点击抽奖
    var isCJ=true;
    $(".choujiang_btn").click(function () {
        if(isCJ){
            isCJ=false;
            $.ajax({
                type: "POST",
                url: "http://pzhfather.huangys.com/pzhhb/father/check.do",
                data: "openid=" + openId + "&token=" + token,
                dataType: "json",
                beforeSend: function () {
                    $(".cj_div").show();
                },
                success: function (msg) {
                    if (msg.state == 4){
                        $(".cj_div").hide();
                        $(".second_box").show();
                    }
                    else if (msg.state == 2) {
                        setTimeout(function(){
                            $(".cj_div").hide();
                            isCJ=true;
                            //已参加活动未中奖
                            if (msg.data.status == 1) {
                                $(".ycy_wzj_box").show();
                            }
                            //已参加活动中奖
                            else if (msg.data.status == 2) {
                                if (msg.data.type == 1) {
                                    $(".prize-img").attr("src", "http://pzhfather.huangys.com/img/wjp04.png");
                                    $(".yzj_wtx_box").show();
                                } else if (msg.data.type == 2) {
                                    $(".prize-img").attr("src", "http://pzhfather.huangys.com/img/wjp03.png");
                                    $(".yzj_wtx_box").show();
                                } else if (msg.data.type == 3) {
                                    $(".prize-img").attr("src", "http://pzhfather.huangys.com/img/wjp02.png");
                                    $(".yzj_wtx_box").show();
                                } else if (msg.data.type == 4) {
                                    $(".prize-img").attr("src", "http://pzhfather.huangys.com/img/wjp01.png");
                                    $(".yzj_wtx_box").show();
                                }
                            }
                        },4000);
                    } else {
                        alert(msg.msg);
                    }
                },
                error: function () {
                    $(".cj_div").hide();
                    isCJ=true;
                    alert('服务器错误，稍后重试');
                }
            });
        }

    });

    //	用户填写中奖信息
    var name='',mobilePhone=null,adress='',idCard=null;
    // 验证姓名
    function isChinaName(name) {
        var pattern = /^[\u4E00-\u9FA5]{2,4}$/;
        return pattern.test(name);
    }

    // 验证身份证
    function isCardNo(card) {
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return pattern.test(card);
    }

    // 验证手机号
    function isPhoneNo(phone) {
        var pattern = /^1[3,4,5,8,7]\d(?!(\d)\\1{7})\d{8}/;
        return pattern.test(phone);
    }

    /*用户名判断*/
    function userName(inputid) {
        $(inputid).blur(function () {
            if ($.trim($(inputid).val()).length == 0) {
                alert("姓名不能为空！");
            } else {
                if (isChinaName($.trim($(inputid).val())) == false) {
                    alert("姓名不合法！");
                }else{
                    name=$(this).val();
                }
            }
        });
    }
    userName('#name');
    /*身份证判断*/
    function userID(inputid) {
        $(inputid).blur(function () {
            if ($.trim($(inputid).val()).length == 0) {
                alert("身份证号码不能为空！");
            } else {
                if (isCardNo($.trim($(inputid).val())) == false) {
                    alert("身份证号码不正确！");
                }else{
                    idCard=$(this).val();
                }
            }
        });
    }
    userID('#identity');

    /*手机号判断*/
    function userTel(inputid) {
        $(inputid).blur(function () {
            if ($.trim($(inputid).val()).length == 0) {
                alert("手机号不能为空！");
            } else {
                if (isPhoneNo($.trim($(inputid).val())) == false) {
                    alert("手机号码不正确！");
                }else{
                    mobilePhone=$(this).val();
                }
            }
        });
    }
    userTel('#telephone');

    $("#submit-btn").click(function (envent) {
        adress=$("#province  option:selected").text()+$("#city  option:selected").text()+$("#town  option:selected").text()+$("#street").val();
        if(name==''||mobilePhone==''||adress==''||idCard==''){
            alert("有未填项，请填完整！")
        }else{
            $.ajax({
                type: "POST",
                data: "openid=" + openId + "&token=" + token + "&userName=" + name + "&mobilePhone=" + mobilePhone + "&adress=" + adress + "&idCard=" + idCard,
                url: "http://pzhfather.huangys.com/pzhhb/father/answer.do",
                dataType: "json",
                success: function (data) {
                    $(".uf_form,.yzj_wtx_box").hide();
                    searchPrize();
                }
            });
        }
    });
    //分享功能

    function wxfx(){
        var form_data = {'url':window.location.href.split('#')[0]};
        $.ajax({
            url:"http://pzhfather.huangys.com/pzhhb/pzh/getWeixinSign.do",
            type:"post",
            data:form_data,
            dataType:"json",
            success:function(result){
                console.log(result)
//              alert(window.location.href)
                timestamp = result.timeStamp;
                nonceStr = result.noncestr;
                signature = result.signature;
                wx.config({
                    debug: false,
                    appId:result.appID,
                    timestamp:result.timeStamp,
                    nonceStr:result.noncestr,
                    signature:result.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                    ]
                });
                wx.ready(function(){
                    wx.onMenuShareTimeline({
                        title: '片仔癀送健康', // 分享标题
                        desc: '片仔癀携手东南卫视打造《你好爸爸》暖心礼送健康', // 分享描述
                        link: window.location.href,// 分享链接
                        imgUrl:'http://pzhfather.huangys.com/img/fx_title.png', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            //alert("xxxxxx");
                            var form_data = {"buttonName":'分享朋友圈',"source":window.location.href};
                        },
                        cancel: function (){
                            // 用户取消分享后执行的回调函数
                            //alert("-------");
                        }
                    });
                    //分享给朋友
                    wx.onMenuShareAppMessage({
                        title: '片仔癀送健康',// 分享标题
                        desc: '片仔癀携手东南卫视打造《你好爸爸》暖心礼送健康', // 分享描述
                        link: window.location.href,// 分享链接
                        imgUrl:'http://pzhfather.huangys.com/img/fx_title.png', // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            var form_data = {"buttonName":'分享朋友',"source":window.location.href};
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
            }
        });
    }
    wxfx();
});
