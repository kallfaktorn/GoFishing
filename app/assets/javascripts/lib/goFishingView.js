
function GoFishingView() {
  
  var self = this;

	var events = new Events();
	events.initialize();
	
	var mousePosition = new MousePosition();

	var view = new View(mousePosition);
	view.initialize();

  view.draw();

  function addEventListenerMouseMove() {
    view.canvas.addEventListener('mousemove', function (e) {
      
      mousePosition.update(e);
      
      view.onHover();

    }, false);
  }
  
  function addEventListenerMouseDown() {
    canvas.addEventListener('mousedown', function (e) {
    
      view.onClick();
    
    }, false);
  }
  
  addEventListenerMouseMove();
  addEventListenerMouseDown();
}