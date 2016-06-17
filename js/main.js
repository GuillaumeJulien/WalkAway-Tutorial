var lights = [];
function isAround(pointA, pointB) {
  var dist =  Math.sqrt(Math.pow((pointB.x - pointA.x),2)+Math.pow((pointB.y - pointA.y),2));
    return dist;
}
