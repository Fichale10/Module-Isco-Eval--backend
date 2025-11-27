 const roleMiddleware = (rolesAllowed = []) => {
  return (req, res, next) => {
    if (!rolesAllowed.includes(req.user.role_id)) {
      return res.status(403).json({ message: "Accès interdit." });
    }
    next();
  };
};

module.exports = roleMiddleware;

