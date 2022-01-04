exports.defaultHandler = (err, req, res, next) => {
  const data = req.body.data;
  try {
    const [statusCode, message, conflict] = err.message.split('~');
    const errorData = {
      message: 'An error occured',
      data: {
        message: message,
        conflict: conflict,
        value: data[conflict] || (conflict === 'endpoint' ? req.url : ''),
      },
    };
    res.status(+statusCode).json(errorData);
  } catch {
    const errorData = {
      message: 'An error occured',
      data: {
        message: 'Internal Server Error',
        conflict: 'server',
        value: '',
      },
    };
    res.status(500).json(errorData);
  }
};

exports.endPointNotFound = (req, res, next) => {
  throw new Error('404~Endpoint not found~endpoint');
};
