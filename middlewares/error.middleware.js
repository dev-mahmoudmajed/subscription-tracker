// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    error.status = err.status || 500;
    console.log(err);

    //Mongoose bad objectid
    if (err.name === "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //Mongoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate field value";
            error = new Error(message);
      error.statusCode = 400;
    }
    
    //Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 400;
      }
      res.status(error.statusCode).json({
        success:false,
        status: 'error',
        message: error.message
      })
  } catch (error) {
    next(error);
  }
};

//create subscription -> middleware (check for renewal date) -> middleware (check for errors) -> next ->controller
export default (err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};