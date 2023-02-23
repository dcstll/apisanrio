const express = require("express");
const router = express.Router();
const CharacterController = require("../Controllers/CharactersController")

router.get("/Characters", CharacterController.getCharactersList);

router.post("/newCharacter", CharacterController.postNewCharacter)

router.put("/Character/:id", CharacterController.editOneCharacter);

router.delete("/RemoveCharacter/:id", CharacterController.deleteOneCharacter);


module.exports = router;
