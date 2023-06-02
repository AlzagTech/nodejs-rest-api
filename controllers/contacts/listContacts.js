const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = res.user;
  const { page = 1, limit = 20 } = req.query;

  const skip = (page - 1) * limit;

  if (req.query.favorite) {
    const result = await Contact.find({ favorite: true });
    res.json(result);
  }

  const result = await Contact.find({ owner }, "", { skip, limit });
  res.json(result);
};

module.exports = listContacts;
