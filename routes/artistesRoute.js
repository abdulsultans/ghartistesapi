const express = require("express");
const protect = require("../middlewares/authMiddlewares")

const {
  createArtiste,
  getAllArtistes,
  getSingleArtiste,
  updateArtiste,
  deleteArtiste,
} = require("../controllers/artistesController");

const router = express.Router();

router.route("/").post(protect, createArtiste).get(protect, getAllArtistes);
router
  .route("/:_id")
  .get(protect, getSingleArtiste)
  .put(protect, updateArtiste)
  .delete(protect, deleteArtiste);

module.exports = router;
