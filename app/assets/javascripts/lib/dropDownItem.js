
function DropDownItem(index, width, height, itemName, imageFileName, context) {

  var self = this;

  this.index = index;
  
  this.width = width;
  this.height = height;
  
  this.itemName = itemName;
  
  this.context = context;
  self.context.font = 'italic 12px Calibri';

  this.image = new Image();
  this.image.src = imageFileName;
  this.image_size = 20;
  this.space_before_image = 80;


  this.backgroundColor = "#888888";
  this.frameColor = "#000000";
  this.textColor = "#000000";
  
  self.context.strokeStyle = self.frameColor;

  this.draw = function(x, y) {
    
    drawBackground(x, y);
    drawFrame(x, y);
    drawFrame(x, y);
    drawFrame(x, y);
    
    drawImage(x, y, self.width, self.height);
    fillText(x, y);
  }
  
  function drawBackground(x, y)
  {
    self.context.fillStyle = self.backgroundColor;
    self.context.fillRect(x, y, self.width, self.height);
  }
  
  function drawFrame(x, y)
  {
    self.context.strokeStyle = self.frameColor;
    context.strokeRect(x, y, self.width, self.height);
  }
  
  this.intersects = function(mousePosition, x, y) {
   
    var rectangle = new Rectangle(x, y, width, height);
    return rectangle.intersects(mousePosition.position);
  }

  function drawImage(x, y, w, h) {
    
    self.context.drawImage(self.image, w - self.image_size, y, h, h);
  }

  function fillText(x, y) {self.context.fillStyle = self.textColor;
    
    var textOffsetX = 4
    var textOffsetY = 14;
    
    self.context.fillStyle = self.textColor;
    self.context.fillText(self.itemName, x + textOffsetX, y + textOffsetY);
  }

}