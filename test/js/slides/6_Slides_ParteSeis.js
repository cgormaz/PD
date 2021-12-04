SLIDES.push({
	id: "parteseis",
	onstart: function(self){

		// Splash in background
		self.add({ id:"bg", type:"Background", color:"#c3ebeb" });
		self.add({ id:"splash", type:"Splash", blush:false });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:160, y:-170, width:640, height:500, align:"center",
			text_id:"outro_14"
		});

		// Button
		self.add({
			id:"button", type:"Button", x:270, y:400, 
			text_id:"outro_14_btn", size:"long",
			message:"slideshow/scratch"
		});

	},
	onend: function(self){
		self.clear();
	}
});