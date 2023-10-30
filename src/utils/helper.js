const handleError = (error, reject) => {
  // UNAUTHENTICATED
  if (error.code === 16) {
    document.dispatchEvent(new CustomEvent('go-login'));
  }
  return reject({
    code: error.code,
    message: error.message
  });
};

// jspb.Map.prototype.loadFromArray_ = function() {
//   for (var i = 0; i < this.arr_.length; i++) {
//     var record = this.arr_[i];
//     var key = record[0];
//     var value = record[1];
//     this.map_[key.toString()] = new jspb.Map.Entry_(key, value);
//   }
//   this.arrClean = true;
// };
const loadFromArray = (unmappedArrArr) => {
  const resp = {};
  for (let i = 0; i < unmappedArrArr.length; i++) {
    const record = unmappedArrArr[i];
    const key = record[0];
    resp[key] = record[1];
  }
  return resp;
};

export { handleError, loadFromArray };
