(function(){
	var g;
	function ex1(){
		//g.growl('If the <a href="http://code.google.com/p/kproto/">kProto</a> classes are helpful to you and your development, please consider making a donation. It is much appreciated.<p><form action="https://www.paypal.com/cgi-bin/webscr" method="post" style="float:right;"><input type="hidden" name="cmd" value="_s-xclick"/><input type="hidden" name="hosted_button_id" value="582299"/><input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt=""/></form></p><p>&nbsp;</p>', {sticky: true, header: 'kProto Growler'});
		$("e1").observe("click", function(e){
			g.growl("Simple notice");
		});
		$("e2").observe("click", function(e){
			g.growl("...with header", {header: "Growler Notice"});
		});
		$("e3").observe("click", function(e){
			g.growl("Long lasting notice (20s)", {life: 20});
		});
		$("e4").observe("click", function(e){
			g.growl("Sticky notice", {sticky: true});
		});
	}
	function ex2(){
		$("e5a").observe("click", function(e){
			g.growl("Candy is good", {header: "Candybar Theme", className: "candybar", sticky: true});
		});
		$("e5b").observe("click", function(e){
			g.growl("Visit <a href='http://kproto.googlecode.com' target='_blank'>kProto</a> for more Prototype classes.", {className: "plain"});
		});
		$("e5c").observe("click", function(e){
			g.growl("The funnest iPod ever. Millions of songs. Thousands of movies. Hundreds of games. <a target='_blank' href='http://www.apple.com/ipodtouch/whatsnew.html'>Learn more</a>", {header: "iPod Touch", className: "macosx", sticky: true});
		});
		$("e5d").observe("click", function(e){
			g.growl("This is a test to see how well the theme handles text that is long. It should stretch height-wise.", {header: "At Work Theme", className: "atwork"});
		});
	}
	function ex3(){
		$("e6").observe("click", function(e){
			g.info("Something good happended", {life: 10});
		});
		$("e7").observe("click", function(e){
			g.warn("Take heed", {life: 10});
		});
		$("e8").observe("click", function(e){
			g.error("Something bad happened", {life: 10});
		});
	}
	function ex4(){
		$("e9").observe("click", function(e){
			g.growl("Notice w/Events", {created: function(){
				$("noticeevents").innerHTML += "<div>Notice created...</div>";
			}, destroyed: function(){
				$("noticeevents").innerHTML += "<div>...Notice destroyed</div>";
			}});
		});
	}
	document.observe("dom:loaded", function() {
		g = new Growler({location:"br"});
		$("tb1").addClassName("selected");
		$("tb1b").show();
		$("extabs").observe("click", function(e){
			var elm = e.target;
			if(elm.tagName=="SPAN"){
				$($("extabs").down("span.selected").id+'b').hide();
				$("extabs").down("span.selected").removeClassName("selected");
				$(elm).addClassName("selected");
				$(elm.id+'b').show();
			}
		});
		ex1();
		ex2();
		ex3();
		ex4();
	});
})();
