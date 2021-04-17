const Artiste = require("../models/artisteSchema");

// Add a new Artiste to the database
const createArtiste = async (req, res) => {
  const newArtiste = new Artiste({
    name: req.body.name,
    label: req.body.label,
    email: req.body.email,
    dob: req.body.dob,
    region: req.body.region,
  });

  await newArtiste.save();
  res.status(202).json(newArtiste);
};

//GET all Artistes on the database

const getAllArtistes = async (req, res) => {
  const Artistes = await Artiste.find();
  res.json(Artistes);
};

//Get A Artiste
const getSingleArtiste = async (req, res) => {
  const Artiste = await Artiste.findById(req.params._id);
  res.json(Artiste);
};

// Update a Artiste

const updateArtiste = async (req, res) => {
  const foundArtiste = await Artiste.findById(req.params._id);

  const { name, label, email, dob, region } = req.body;

  if (foundArtiste) {
    foundArtiste.name = name;
    foundArtiste.label = label;
    foundArtiste.email = email;
    foundArtiste.dob = dob;
    foundArtiste.region = region;

    const updatedArtiste = await foundArtiste.save();
    res.json({ updatedArtiste });
  }
};

//Delete A Artiste

const deleteArtiste = async (req, res) => {
  const foundArtiste = await Artiste.findById(req.params._id);
  if (foundArtiste) {
    foundArtiste.remove();
    res.json({ msg: `${foundArtiste.name} Artiste deleted!`});
  } else {
    res.status(404).json({ error: "Artiste not found!" });
  }
};

module.exports = {
  createArtiste,
  getAllArtistes,
  getSingleArtiste,
  updateArtiste,
  deleteArtiste,
};
