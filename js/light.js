var Light = function(id){
    this.id = id;
}
Light.prototype.init = function () {
    this.initVars();
    this.initEvents();
};
Light.prototype.initVars = function () {
    this.domElement = document.getElementById('light-'+this.id);
    this.x = this.domElement.offsetLeft;
    this.y = this.domElement.offsetTop;
};
Light.prototype.initEvents = function () {
   var self = this;
};
Light.prototype.setActive = function () {
  var self = this;
  if (self.domElement.classList){
    self.domElement.classList.add("active");
  }else{
    self.domElement.className += ' ' + 'active';
  }
};
Light.prototype.setInactive = function () {
  self =this;
  if (self.domElement.classList){
    self.domElement.classList.remove("active");
  }else{
    self.domElement.className = self.domElement.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};
