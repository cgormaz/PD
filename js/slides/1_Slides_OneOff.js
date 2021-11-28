SLIDES.push({
	id: "oneoff",
	onstart: function(self){

		// Splash in background
		self.add({ id:"splash", type:"Splash", blush:true });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:10, width:640, height:500, align:"center",
			text_id:"outro_1"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:304, y:466, 
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
			x:160, y:10, width:640, height:500, align:"center",
			text_id:"outro_2"
		});
		_hide(o.text); _fadeIn(o.text, 100);

		// Photo
		/*self.add({
			id:"img", type:"ImageBox",
			src: "assets/conclusion/truce.jpg",
			x:228, y:90, width:500,
		});
		_hide(o.img); _fadeIn(o.img, 200);*/

		/*// Text 2
		self.add({
			id:"text2", type:"TextBox",
			x:228, y:402, width:500,
			align:"center", color:"#aaa", size:14,
			text_id:"outro_2_credits"
		});
		_hide(o.text2); _fadeIn(o.text2, 200);*/

		// Button
		self.add({
			id:"button", type:"Button", x:304, y:466, 
			text_id:"outro_2_btn", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button); _fadeIn(o.button, 300);
		
		// Button2
		self.add({
			id:"button2", type:"Button", x:304, y:586, 
			text_id:"outro_2_btn2", size:"long",
			message:"slideshow/scratch"
		});
		_hide(o.button2); _fadeIn(o.button2, 500);

	},
	onend: function(self){
		self.clear();
	}
});