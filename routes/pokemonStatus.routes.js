import express from "express"
import createPokemon from "../controllers/pokemonStatus.controller.js"
import pokemonControllers from "../controllers/pokemonStatus.controller.js"

const router = express.Router()

router.post("/",pokemonControllers.createPokemon)
router.get("/",pokemonControllers.getpokemons)
router.put("/pokemon_id",pokemonControllers.changeStatePokemon)

export default router
