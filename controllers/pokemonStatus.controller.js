import pokemonStatusModel from "../models/pokemonStatus.model.js";


const createPokemon= async(req,res) => {
    try{
        console.log(req.body)
        const pokemon = new pokemonStatusModel(req.body)
        await pokemon.save()
        return res.status(201).json(pokemon)
    }catch(error){
        return res.status(500)
        .json({"code":500, "message":error.message, "status":false})
    }
}

export default createPokemon
