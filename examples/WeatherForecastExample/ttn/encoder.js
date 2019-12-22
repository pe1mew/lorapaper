function Encoder(object, port) {
  var bytes = [];

  bytes[0] = object.temp || 0;
  bytes[1] = object.humid || 0;
  
  bytes[3] = object.hours || 0;
  bytes[4] = object.minutes || 0;
  
  if(object.rain === undefined) object.rain = [];
  
  bytes[6] = object.rain[0] || 0;
  bytes[7] = object.rain[1] || 0;
  bytes[8] = object.rain[2] || 0;
  bytes[9] = object.rain[3] || 0;
  bytes[10] = object.rain[4] || 0;
  bytes[11] = object.rain[5] || 0;
  bytes[12] = object.rain[6] || 0;
  bytes[13] = object.rain[7] || 0;
  bytes[14] = object.rain[8] || 0;
  bytes[15] = object.rain[9] || 0;
  bytes[16] = object.rain[10] || 0;
  bytes[17] = object.rain[11] || 0;
  
  return bytes;
}
