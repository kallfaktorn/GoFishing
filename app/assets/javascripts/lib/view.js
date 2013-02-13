	
function View(mousePosition) {

	this.canvas;
	this.context;
	this.mousePosition = mousePosition;
	
  var self = this;

	this.initialize = function() {

		self.canvas = document.getElementById("canvas");
		self.context = canvas.getContext('2d');
		
		self.picture = new Picture("rails.png", 10, 10);

		self.dropDownMenu = new DropDownMenu(4, 4, 120, 20, [], self, self.context);
	}
	
	this.onClick = function() {

	  self.dropDownMenu.click(self.mousePosition);
  }
  
  this.onHover = function() {
    
    self.dropDownMenu.onHover(self.mousePosition);
  }
  
  this.draw = function() {
    
    clear();
    
    self.dropDownMenu.draw();
  }

	function clear() {
	  
		canvas.width = canvas.width;
	}
}