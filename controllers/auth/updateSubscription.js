const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id } = res.user;
  const { subscription } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      subscription: subscription,
    },
    {
      new: true,
    }
  );

  console.log(updatedUser);

  res.status(200).json({
    user: {
      email: updatedUser.email,
      subscription: updatedUser.subscription,
    },
  });
};

module.exports = updateSubscription;
