
var clock = function(hour,minute){
  // minuteSpot = minute * 6 degrees
  // hourSpot = (hour * 30) + (minuteSpot/60 * 30 degrees)
var minuteSpot = minute * 6;
var hourSpot = (hour * 30) + ((minuteSpot/360) * 30);
var smallDegree =  hourSpot - minuteSpot;
var largeDegree = 360 - smallDegree;
console.log(smallDegree, largeDegree );
};

clock(6,00);
clock(12,00);
clock(12,15);
clock(9,45);
clock(1,59);
