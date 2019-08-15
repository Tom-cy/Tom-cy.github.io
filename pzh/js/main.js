



$(function(){



    var    mousedown = "mousedown ";//鼠标按下

    var    mousemove = "mousemove ";//鼠标移动

    var    mouseup = "mouseup ";//鼠标抬起

    var  mouseout = "mouseout ";//鼠标移除

    var  mouse='PC';



	var GC = new Object();

	GC.ls_audio3 = document.getElementById("ls_audio3");

	GC.ls_audio3.src = './media/1.mp3';

	GC.ls_audio3.pause();

	GC.ls_audio3.addEventListener('ended', function () {

		setTimeout(function () {GC.ls_audio3.play(); }, 10);

	}, false);

	// GC.ls_audio3.play();





    if (document.hasOwnProperty("ontouchstart") || 'ontouchstart' in window) {

        mousedown = "touchstart ";//手指按下

        mousemove = "touchmove ";//手指移动

        mouseup = "touchend ";//手指抬起

        mouseout = "touchcancel ";//手指移除

        mouse = 'YD';

    }







    $('.ls_audioDiv').on(mouseup,function(){

        var url = "";

        var key = $('.ls_audioDiv').data('ls_key');

        if(key==1){

            GC.ls_audio3.play();

            GC.ls_audio_bool =true;

            url = "./img/music_on.png";

            $('.ls_audioDiv').data().ls_key =0;

        }else if(key==0){

            GC.ls_audio3.pause();

            GC.ls_audio_bool =false;

            $('.ls_audioDiv').data().ls_key =1;

            url = "./img/music.png";

        }

        $('.ls_audioDiv>img').attr("src", url);
    });

    function audioAutoPlay(id){

        var audio = document.getElementById(id),

            play = function(){

                // audio.play();

                document.removeEventListener("touchstart",play, false);

            };

        // audio.play();

        document.addEventListener("WeixinJSBridgeReady", function () {//微信

            play();

        }, false);

        document.addEventListener('YixinJSBridgeReady', function() {//易信

            play();

        }, false);

        document.addEventListener("touchstart",play, false);

    }

    audioAutoPlay('ls_audio3');



});
