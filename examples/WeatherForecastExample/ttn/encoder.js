function Encoder(object, port) {
  var bytes = [];

  bytes[0] = parseInt(object.temp || 0);
  bytes[1] = parseInt(object.humi || 0);
  bytes[2] = parseInt(object.date || 0);
  bytes[3] = parseInt(object.hour || 0);
  bytes[4] = parseInt(object.mins || 0);
  bytes[5] = parseInt(object.icon || 0);

  var rain = object.rain || [];
  
  bytes[6]  = parseInt(rain[0]  || 0);
  bytes[7]  = parseInt(rain[1]  || 0);
  bytes[8]  = parseInt(rain[2]  || 0);
  bytes[9]  = parseInt(rain[3]  || 0);
  bytes[10] = parseInt(rain[4]  || 0);
  bytes[11] = parseInt(rain[5]  || 0);
  bytes[12] = parseInt(rain[6]  || 0);
  bytes[13] = parseInt(rain[7]  || 0);
  bytes[14] = parseInt(rain[8]  || 0);
  bytes[15] = parseInt(rain[9]  || 0);
  bytes[16] = parseInt(rain[10] || 0);
  bytes[17] = parseInt(rain[11] || 0);
  
  return bytes;
}
