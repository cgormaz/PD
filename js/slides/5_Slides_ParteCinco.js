SLIDES.push({
	id: "partecinco",
	onstart: function(self){

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_10"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:480, 
			text_id:"outro_10_btn", size:"long",
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

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_11"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:480, 
			text_id:"outro_11_btn", size:"long",
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

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-250, width:640, height:500, align:"center",
			text_id:"outro_12"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:480, 
			text_id:"outro_12_btn", size:"long",
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
			text_id:"outro_13"
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
			text_id:"outro_13_btn", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button); _fadeIn(o.button, 300);

	},
	onend: function(self){
		self.clear();
	}
});