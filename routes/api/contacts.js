const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  validatePatchBody,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addContactSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validatePatchBody(schemas.addUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
