function MousePosition() {

    this.position = new Position(0, 0);
    this.offset = new Position(7, 7);

    this.update = function(e) {
        if(e.offsetX) {
            this.position.x = e.offsetX;
            this.position.y = e.offsetY;
            
            this.position.x += this.offset.x;
            this.position.y += this.offset.y;
        }
        else if(e.layerX) {
            this.position.x = e.layerX;
            this.position.y = e.layerY;
        }

        var tmp = getAbsolutePosition(canvas);
        this.position.x = this.position.x - tmp.x;
        this.position.y = this.position.y - tmp.y;
    }

	function getAbsolutePosition(element) {
		var r = { x: element.offsetLeft, y: element.offsetTop };
		if (element.offsetParent) {
			var tmp = getAbsolutePosition(element.offsetParent);
			r.x += tmp.x;
			r.y += tmp.y;
		}
		return r;
	}
}