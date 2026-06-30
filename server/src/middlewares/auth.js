function isLoggedIn(req, res, next) {
  try {
    if (req.session.user.userId) {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    res.redirect("/login");
  }
}

module.exports = { isLoggedIn };
