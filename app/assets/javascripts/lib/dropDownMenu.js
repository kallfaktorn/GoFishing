
// items[0] will be displayed as default
function DropDownMenu(x, y, w, h, items, view, context) {

  this.view = view;
  this.context = context;
  
  this.rectangle = new Rectangle(x, y, w, h);
  this.items = items;
  
  this.hover_item = 0;
  
  this.dropDown = true;

  this.backgroundColor = "#888888";
  this.backgroundColorHover = "#AAAAAA";

  self = this;

  var list_item_width = self.rectangle.w;
  var list_item_height = self.rectangle.h;

  this.items[0] = new DropDownItem(0, list_item_width, list_item_height, "Hello world!", "rails.png", self.context);
  this.items[1] = new DropDownItem(1, list_item_width, list_item_height, "Foo Bar Baz", "rails.png", self.context);
  this.items[2] = new DropDownItem(2, list_item_width, list_item_height, "Mattias", "rails.png", self.context);
  
  
  // Initiate the menu_item to the first inpuswap(element, array, index) t item
  this.menu_item = self.items[0];
  this.list_items = new Array();
  
  // The menu is occupied with the first item
  // The rest of the items will be dropdown items
  for(i = 1; i < self.items.length; i++)
  {
    self.list_items[i] = self.items[i];
  }
  
  this.draw = function() {
    
    self.menu_item.draw(self.rectangle.x, self.rectangle.y);
    
    if(self.dropDown == true)
    {
      drawDropDown();
    }
  }

  function drawDropDown() {
    
    var x = self.rectangle.x;
    var y = self.rectangle.y + self.rectangle.h;
    
    for(var list_item in self.list_items)
    {
      self.list_items[list_item].draw(x, y);
      y += self.rectangle.h;
    }
  } 
  
  this.click = function(mousePosition) {
    
    // Menu click
    if(self.menu_item.intersects(mousePosition, self.rectangle.x, self.rectangle.y))
    {
      self.dropDown = flip(self.dropDown);
      
      self.view.draw();
    }
    else 
    {
      if(self.dropDown == true)
      {
        var x = self.rectangle.x;
        var y = self.rectangle.y + self.rectangle.h;

        for(var list_item in self.list_items)
        {
          // List item click
          if(self.list_items[list_item].intersects(mousePosition, x, y))
          {
            var temp = self.list_items[list_item];
            self.list_items[list_item] = self.menu_item;
            self.menu_item = temp;
            
            self.dropDown = flip(self.dropDown);
    
            self.view.draw();
          
            break;
          }
        
          y += self.rectangle.h;
        }
      }
    }
  }
  
  

  function drawFirstItem() {
    
    var x = self.rectangle.x;
    var y = self.rectangle.y;
    
    y += self.canvas2d_stroke_offset;
    
    drawBackground(x + self.frame_size, y, self.rectangle.w - 2 * self.frame_size, self.rectangle.h, self.backgroundColor);
    
    self.items[self.selected_item].draw(x + self.frame_size, y, self.rectangle.w + self.frame_size, self.rectangle.h);
    
    y = y + self.rectangle.h + self.canvas2d_stroke_offset;    
  }  
  
  this.onHover = function(mousePosition) {

    y = self.rectangle.y;
    
    if(self.dropdown == true) 
    {
      
      for(i = 0; i < self.items.length; i++)
      {
      
        var collisionRectangle = new Rectangle(self.rectangle.x - 7, y - 7, self.rectangle.w - 1, self.rectangle.h + 2);
        
        y = y + self.rectangle.h + self.canvas2d_stroke_offset;
        
        if(collisionRectangle.intersects(mousePosition.position))
        {
          if(self.hover_item != self.items[i].index) 
          {
            self.hover_item = self.items[i].index;swap(element, array, index) 
            self.view.redraw();
          }
        }
      }
    }
  }

  function drawBackground(x, y, w, h, backgroundColor) {
    
    self.context.fillStyle = backgroundColor;
    self.context.fillRect(x, y, w, h);
  }

  function drawFrameTop() {

    self.context.lineWidth = self.frame_size;
    
    self.context.beginPath();
    self.context.moveTo(self.rectangle.x, self.rectangle.y);
    self.context.lineTo(self.rectangle.x + self.rectangle.w, self.rectangle.y);
    self.context.closePath();
    self.context.stroke();
  }
  
  function drawFrameBottom(y) {
    
    self.context.lineWidth = self.frame_size;
    
    self.context.beginPath();
    self.context.moveTo(self.rectangle.x, y);
    self.context.lineTo(self.rectangle.x + self.rectangle.w, y);
    self.context.closePath();
    self.context.stroke();
  }
  
  function flip(bool) {
    if(bool == true) return false;
    else return true;
  }
}