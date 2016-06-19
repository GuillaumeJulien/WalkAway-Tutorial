var Light = function(id){
    this.id = id;
}
Light.prototype.init = function () {
    this.initVars();
    this.initEvents();
};
Light.prototype.initVars = function () {
    this.toggled = false;
    this.domElement = document.getElementById('light-'+this.id);
    this.popinEl= document.getElementById('popin-tuto');
    this.x = this.domElement.offsetLeft;
    this.y = this.domElement.offsetTop;

};
Light.prototype.initEvents = function () {
};

Light.prototype.setActive = function () {
  var self = this;
  if(!self.toggled){
    if (self.domElement.classList){
      self.domElement.classList.add("active");
    }else{
      self.domElement.className += ' ' + 'active';
    }
    self.setActivePopin();
    setTimeout(self.setInactivePopin.bind(this), 3000);
  }
  setTimeout(function () {
    self.toggled = false;
  }, 5000);
  return self;
};

Light.prototype.setInactive = function () {
  self =this;
  if (self.domElement.classList){
    self.domElement.classList.remove("active");
  }else{
    self.domElement.className = self.domElement.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

Light.prototype.setActivePopin = function () {
  var self = this;
  if (self.popinEl.classList){
    self.popinEl.classList.add("active");
  }else{
    self.popinEl.className += ' ' + 'active';
  }
};

Light.prototype.setInactivePopin = function () {
  var self = this;
  self.toggled = true;
  if (self.popinEl.classList){
    self.popinEl.classList.remove("active");
  }else{
    self.popinEl.className = self.popinEl.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};
