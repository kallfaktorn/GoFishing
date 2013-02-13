function Rectangle(x, y, w, h) {
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	var self = this;
	
	this.intersects = function(point) {
	  
		if(point.x < self.x) return false;
		if(point.x > (self.x + self.w)) return false;
		if(point.y < self.y) return false;
		if(point.y > (self.y + self.h)) return false;

		return true;
	}
}