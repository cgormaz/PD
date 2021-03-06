SLIDES.push({
	id: "oneoff",
	onstart: function(self){

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_1"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:440, 
			text_id:"outro_1_btn", size:"long",
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
			text_id:"outro_2"
		});
		_hide(o.text); _fadeIn(o.text, 100);


		// Button
		self.add({
			id:"button", type:"Button", x:270, y:390, 
			text_id:"outro_2_btn", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button); _fadeIn(o.button, 300);
		
		// Button2
		self.add({
			id:"button2", type:"Button", x:270, y:480, 
			text_id:"outro_2_btn2", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button2); _fadeIn(o.button2, 500);

	},
	onend: function(self){
		self.clear();
	}
});