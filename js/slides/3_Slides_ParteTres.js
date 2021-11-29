SLIDES.push({
	id: "partetres",
	onstart: function(self){

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-200, width:640, height:500, align:"center",
			text_id:"outro_5"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:440, 
			text_id:"outro_5_btn", size:"long",
			message:"slideshow/next"
		});

	},
	onend: function(self){
		self.remove("text");
		self.remove("button");
	}
});

SLIDES.push({
	onstart: function(self){

		var o = self.objects;

		// Text
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-200, width:640, height:500, align:"center",
			text_id:"outro_6"
		});
		_hide(o.text); _fadeIn(o.text, 100);

		// Photo
		/*self.add({
			id:"img", type:"ImageBox",
			src: "assets/conclusion/truce.jpg",
			x:228, y:90, width:500,
		});
		_hide(o.img); _fadeIn(o.img, 200);*/

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:390, 
			text_id:"outro_6_btn", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button); _fadeIn(o.button, 300);

	},
	onend: function(self){
		self.clear();
	}
});