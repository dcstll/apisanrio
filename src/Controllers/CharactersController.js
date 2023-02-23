const Characters = require("../models/characters")

exports.getCharactersList = async (req, res) => {
  try {
    const result = await Characters.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
}};

exports.postNewCharacter = async (req, res) => {
  try {
    const result = await Characters.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.editOneCharacter = async (req, res) => {
  try{
    const result = await Characters.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if (result) {
      res.status(200).json(result);
      res.status(404).json({ error: 'Character not found' });
    }
  }catch (err){
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.deleteOneCharacter = async (req, res) => {
  try{
    const result = await Characters.findOneAndDelete({_id: req.params.id});
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  }catch (err){
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
