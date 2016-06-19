var PopinFeedBacks = function() {

};

PopinFeedBacks.prototype.init = function () {
  var self = this;
  self.initVars();
};

PopinFeedBacks.prototype.initVars = function () {
  var self = this;
  this.domElement  = document.getElementById('popin-feedbacks');
  this.contentText = document.getElementById('content-feedbacks');

};
PopinFeedBacks.prototype.initEvents = function () {

};

PopinFeedBacks.prototype.setActive = function () {
  var self = this;
  if (self.domElement.classList){
    self.domElement.classList.add("active");
  }else{
    self.domElement.className += ' ' + 'active';
  }
  setTimeout(self.setInactive.bind(this), 5000);
};
PopinFeedBacks.prototype.setInactive = function () {
  var self = this;

  if (self.domElement.classList){
    self.domElement.classList.remove("active");
  }else{
    self.domElement.className = self.domElement.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};
PopinFeedBacks.prototype.setText = function (text) {
  var self = this;
  self.contentText.innerHTML = text;
};

var popinFeedBacks = new PopinFeedBacks();
popinFeedBacks.init();
