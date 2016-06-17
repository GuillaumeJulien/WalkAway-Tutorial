var Viseur = function(){

};

Viseur.prototype.init = function () {
    this.initVars();
    this.initEvents();

};

Viseur.prototype.initVars = function () {
    this.viseurel = document.getElementById('viseur');
};

Viseur.prototype.initEvents = function () {
   var self = this;
  document.body.onmousemove = function(e) {
    self.viseurel.style.top = e.clientY+"px";
    self.viseurel.style.left = e.clientX+"px";
  };
};

viseur = new Viseur();
