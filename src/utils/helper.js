const handleError = (error, reject) => {
  // UNAUTHENTICATED
  if (error.code === 16) {
    localStorage.removeItem('yartu-token');
    document.dispatchEvent(new CustomEvent('go-login'));
  }
  return reject({
    code: error.code,
    message: error.message
  });
};

export { handleError };
