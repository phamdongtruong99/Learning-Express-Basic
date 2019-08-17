module.exports.postCreate = (req, res, next) => {
  const { name, phone } = req.body;
  const errors = [];
  if (!name || !phone) {
    errors.push('Name && phone is required.!');
  }
  if (errors.length) {
    res.render('users/create', {
      errors: errors,
      values: req.body,
    });
    return;
  }
  next();
};
