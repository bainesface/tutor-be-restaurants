const handlesCustomErrors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

const handles500s = (err, req, res, next) => {
  res.status(500).send('Oh dear, internal server error');
};

module.exports = { handlesCustomErrors, handles500s };
