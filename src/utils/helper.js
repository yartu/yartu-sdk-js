const handleError = (error) => {
  if (error.code === 100) {
    localStorage.removeItem('yartu-token');
  }
  return reject({
    code: error.code,
    message: error.message
  });
};

export { handleError };
