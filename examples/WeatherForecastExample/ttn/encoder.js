function Encoder(object, port) {
  var bytes = [];

  bytes[0]  = parseInt(object.temp || 0);
  bytes[2]  = parseInt(object.humi || 0);
  bytes[4]  = parseInt(object.date || 0);
  bytes[6]  = parseInt(object.hour || 0);
  bytes[8]  = parseInt(object.mins || 0);
  bytes[10] = parseInt(object.icon || 0);

  var rain = object.rain || [];
  
  bytes[12] = parseInt(rain[0]  || 0);
  bytes[14] = parseInt(rain[1]  || 0);
  bytes[16] = parseInt(rain[2]  || 0);
  bytes[18] = parseInt(rain[3]  || 0);
  bytes[20] = parseInt(rain[4]  || 0);
  bytes[22] = parseInt(rain[5]  || 0);
  bytes[24] = parseInt(rain[6]  || 0);
  bytes[26] = parseInt(rain[7]  || 0);
  bytes[28] = parseInt(rain[8]  || 0);
  bytes[30] = parseInt(rain[9]  || 0);
  bytes[32] = parseInt(rain[10] || 0);
  bytes[34] = parseInt(rain[11] || 0);
  
  return bytes;
}
