function Decoder(bytes, port) {
  var decoded = {
    counter: bytes[2],
    battery: (bytes[5] << 8 | bytes[6])/100
  };
  return decoded;
}
