/*-by Beyond-*/
var thunder_Install_Url="http://mobile.xunlei.com/";
var popHTML='\
<div class="pop_layer" id="d-download">\
  <div class="pop_box">\
    <a href="javascript:void(0)" title="\u5173\u95ed" class="p_clo" id="d-download-close"><img src="http://img.kuai.xunlei.com/res-2014/img/clo.png" alt="\u5173\u95ed"></a>\
    <div class="pop_cont">\
      <p class="p_tips">\u6682\u4e0d\u652f\u6301\u591a\u4efb\u52a1\u4e0b\u8f7d\uff0c\u8bf7\u9010\u4e2a\u70b9\u51fb\u4e0b\u8f7d</p>\
      <div class="download_way" id="d-download-btns">\
        <a href="#" title="\u4e0b\u8f7d\u8d44\u6e90" class="dl_src" target="_self"><span><img src="http://img.kuai.xunlei.com/res-2014/img/ico_dl.png"></span><em>\u4e0b\u8f7d\u8d44\u6e90</em><i>\u0028\u6211\u5df2\u5b89\u88c5\u624b\u96f7\u0029</i></a>\
        <a href="'+thunder_Install_Url+'" target="_blank" title="\u4e0b\u8f7d\u624b\u96f7" class="dl_sl"><span><img src="http://img.kuai.xunlei.com/res-2014/img/ico_xl.png"></span><em>\u4e0b\u8f7d\u624b\u96f7</em><i>\u0028\u6211\u672a\u5b89\u88c5\u624b\u96f7\u0029</i></a>\
      </div>\
    </div>\
  </div>\
</div>\
';
jQuery(function(){
	if(jQuery(".down_list").length>0){jQuery("body").append(popHTML)};
	jQuery(".down_list ul li a").click(function(event){
		event.stopPropagation();
		jQuery(".dl_src").attr("href",jQuery(this).attr("thunderhref"));
		jQuery("#d-download").fadeIn();
	});
	jQuery(".p_clo").click(function(){jQuery("#d-download").fadeOut()});
	var text=jQuery(".description").text();
	if(text.length>300){
		jQuery(".description").html(text.substring(0,300)+"......");
		jQuery(".more_des").show();
	}
	jQuery(".more_des").toggle(function(){
		jQuery(".description").text(text);
		jQuery(this).text("[\u9690\u85cf\u6536\u8d77]");
	},function(){
		jQuery(".description").text(text.substring(0,300)+"......");
		jQuery(this).text("[\u5c55\u5f00\u66f4\u591a]");
	});
	jQuery(".open-nav2").click(function(){
		jQuery(".list-nav").toggle("fast");
	});
})