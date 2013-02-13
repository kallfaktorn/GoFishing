
function Picture(fileName, x, y) {
  
  this.rectangle = new Rectangle(x, y, 50, 50);
	
	this.image = new Image();
  this.image.src = fileName;

	var self = this;

	this.setPosition = function(point) {
	  
		self.rectangle.x = point.x;
		self.rectangle.y = point.y;
	}
	
	this.draw = function(context) {

	  if(self.rectangle.w == null || self.rectangle.h == null) {
	    context.drawImage(self.image, self.rectangle.x, self.rectangle.y);
	  }
	  else {
	    context.drawImage(self.image, self.rectangle.x, self.rectangle.y, self.rectangle.w, self.rectangle.h);
	  }
  }

	this.intersects = function(point) {

		if(point.x < self.rectangle.x) return false;
		if(point.x > (self.rectangle.x + self.rectangle.w)) return false;
		if(point.y < self.rectangle.y) return false;
		if(point.y > (self.rectangle.y + self.rectangle.h)) return false;

		return true;
	}
}