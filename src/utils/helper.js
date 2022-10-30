const handleError = (error, reject) => {
  if (error.code === 100) {
    localStorage.removeItem('yartu-token');
    document.dispatchEvent(new CustomEvent('go-login'));
  }
  return reject({
    code: error.code,
    message: error.message
  });
};

export { handleError };
