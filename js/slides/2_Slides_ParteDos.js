SLIDES.push({
	id: "partedos",
	onstart: function(self){

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_3"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:440, 
			text_id:"outro_3_btn", size:"long",
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
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_4"
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
			text_id:"outro_4_btn", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button); _fadeIn(o.button, 300);
		
		// Button2
		self.add({
			id:"button2", type:"Button", x:270, y:480, 
			text_id:"outro_4_btn2", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button2); _fadeIn(o.button2, 500);

	},
	onend: function(self){
		self.clear();
	}
});