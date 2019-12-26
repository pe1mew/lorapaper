function Encoder(object, port) {
  var bytes = [];

  bytes[0] = 0x01;

  bytes[1] = parseInt(object.temp || 0);
  bytes[2] = parseInt(object.humi || 0);
  bytes[3] = parseInt(object.date || 0);
  bytes[4] = parseInt(object.hour || 0);
  bytes[5] = parseInt(object.mins || 0);
  bytes[6] = parseInt(object.icon || 0);

  var rain = object.rain || [];
  
  bytes[7]  = parseInt(rain[0]  || 0);
  bytes[8]  = parseInt(rain[1]  || 0);
  bytes[9]  = parseInt(rain[2]  || 0);
  bytes[10] = parseInt(rain[3]  || 0);
  bytes[11] = parseInt(rain[4]  || 0);
  
  bytes[12] = 0xff;
  
  return bytes;
}
