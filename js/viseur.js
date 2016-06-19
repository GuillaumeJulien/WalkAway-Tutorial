var Viseur = function(){

};

Viseur.prototype.init = function () {
    this.initVars();
    this.initEvents();

};

Viseur.prototype.initVars = function () {
    self = this;
    this.viseurel = document.getElementById('viseur');
    this.domElementPopin = document.getElementById('popin-tuto');
    this.innerCircle = document.getElementById('inner-circle');
    this.outterCircle = document.getElementById('outter-circle');
    this.activeLight = {};
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
      if (isAround(lights[light],self)<= 120) {
        self.activeLight = lights[light].setActive();
      }else {
        lights[light].setInactive();

      }
    }
  };
  document.addEventListener('mousedown', self.setActive.bind(this), true);
  document.addEventListener('mouseup', self.setInactive.bind(this), true);
};

Viseur.prototype.setActive = function () {
  var self = this;
  if (self.innerCircle.classList && self.outterCircle.classList){
    self.innerCircle.classList.add("active");
    self.outterCircle.classList.add("active");
  }else{
    self.innerCircle.className += ' ' + 'active';
    self.outterCircle.className += ' ' + 'active';
  }
  if(self.activeLight.domElement.classList){
    self.activeLight.domElement.classList.add("analize");
  }else{
      self.activeLight.domElement.className += ' ' + 'analize';
  }
};
Viseur.prototype.setInactive = function () {
  var self = this;
  if (self.innerCircle.classList && self.outterCircle.classList.remove ){
    self.innerCircle.classList.remove("active");
    self.outterCircle.classList.remove("active");
  }else{
    self.innerCircle.className = self.viseurel.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    self.outterCircle.className = self.viseurel.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  if(self.activeLight.domElement.classList){
    self.activeLight.domElement.classList.remove("analize");
  }else{
    self.activeLight.domElement.className =  self.domElement.className.replace(new RegExp('(^|\\b)' + "active".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

viseur = new Viseur();
