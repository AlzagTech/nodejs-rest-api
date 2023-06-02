const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { _id } = res.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json();
};

module.exports = logout;
