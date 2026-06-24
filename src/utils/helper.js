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

const toByte = (size, type) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const index = sizes.indexOf(type);
  return Number.parseInt(size, 10) * 1024 ** index;
};

const loadFromArray = (unmappedArray) => {
  const resp = {};
  for (const record of unmappedArray) {
    const key = record[0];
    resp[key] = record[1];
  }
  return resp;
};

// create unique device id
const getDeviceId = () => {
  try {
    let deviceId = window.localStorage.getItem('yartu-device-id');
    if (!deviceId) {
      deviceId =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem('yartu-device-id', deviceId);
    }
    return deviceId;
  } catch {
    // fallback
    return typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
};

export { handleError, loadFromArray, toByte, getDeviceId };
