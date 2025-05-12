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

const getpokemons = async(req,res)=>{
    try{
        const pokemons=await pokemonStatusModel.find()
        return res.status(200).json(pokemons)
    } catch { 
        return res.status(500)
        .json({"code":500,"message":error.message,"status":false})
    }
}

const changeStatePokemon = async (req,res)=> {
    try {
    const pokemon_id = req.params.pokemon.pokemon_id
    if(req.params.pokemon_id == req.body.pokemon_id){
        const changePokemon = {
        pokemon_id:pokemon_id,
        view:req.body.view,
        catch:req.body.catch,
        in_team:req.body.in_team,
        power_level:req.body.level
        }
         let filter= {pokemon_id:pokemon_id}
    const pokemon = await pokemonStatusModel
    .findOneAndReplace(filter,changePokemon,{new:true})
    return res.status(200).json(pokemon)  
    } else {
        return res.status(400).json(({"code":500,"message":"Bad request : id diferente en el body","status":false}))
    }
    }catch (error){
        return res.status(500)
        .json({"code":500,"message":error.message,"status":false})
    }

}

export default {createPokemon,getpokemons,changeStatePokemon}