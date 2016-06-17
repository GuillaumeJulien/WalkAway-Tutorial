var Viseur = function(){

};

Viseur.prototype.init = function () {
    this.initVars();
    this.initEvents();

};

Viseur.prototype.initVars = function () {
    self = this;
    this.viseurel = document.getElementById('viseur');
    this.domElementPopin = document.getElementById('popin-tuto')
    var numOfLight = document.getElementsByClassName('light').length;
    for (var i=1; i < numOfLight; i++ ) {
        var light = new Light(i);
        light.init();
        lights.push(light);
    }
};

Viseur.prototype.initEvents = function () {
   var self = this;
  document.body.onmousemove = function(e) {
    self.viseurel.style.left = e.clientX-50+"px";
    self.viseurel.style.top = e.clientY-50+"px";

    self.domElementPopin.style.top = e.clientY-190+"px";
    self.domElementPopin.style.left = e.clientX+200+"px";

    self.x =  self.viseurel.offsetLeft;
    self.y = self.viseurel.offsetTop;
    for(var light in lights){
      if (isAround(lights[light],self)<= 85) {
        lights[light].setActive();
      }else {
        lights[light].setInactive();
      }
    }
  };
};

viseur = new Viseur();
