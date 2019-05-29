//submit button alerts
function notificationEn() {
  alert("Successfully Recorded");
}
function notificationTr() {
  alert("Başarıyla Gönderildi");
}

//lenguage selector
$(document).ready(function(){
	$("div:lang(tr)").hide();
  	$("#changeLangEn").click(function(){
    	$("div:lang(tr)").hide();
    	$("div:lang(en)").show();
  });
  	$("#changeLangTr").click(function(){
    	$("div:lang(en)").hide();
    	$("div:lang(tr)").show();
  });
});