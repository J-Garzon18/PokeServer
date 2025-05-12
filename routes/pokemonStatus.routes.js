import express from "express"
import createPokemon from "../controllers/pokemonStatus.controller.js"

const router = express.Router()

router.post("/",createPokemon)

export default router
