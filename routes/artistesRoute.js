const express = require("express");

const {
  createArtiste,
  getAllArtistes,
  getSingleArtiste,
  updateArtiste,
  deleteArtiste,
} = require("../controllers/artistesController");

const router = express.Router();

router.route("/").post(createArtiste).get( getAllArtistes);
router
  .route("/:_id")
  .get(getSingleArtiste)
  .put(updateArtiste)
  .delete(deleteArtiste);

module.exports = router;
