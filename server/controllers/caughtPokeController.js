const pokemon = [{id:0, name: 'Pokemon 1', image: 'image'}]
let id = 1

module.exports = {
    getCaughtPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },
    catchPokemon: (req, res) => {
        const {name, image} = req.body
        const newPokemon = {id, name, image}
        pokemon.push(newPokemon)
        id++

        res.status(200).send(pokemon)
    },
    editPokeName: (req, res) => {
        const{poke_id} = req.params
        const {newName} = req.body

        const index = pokemon.findIndex(e => e.id === +poke_id)
        
        if(index === -1){
            return res.status(404).send("Pokemon not found")
        }
        pokemon[index].name = newName
        res.status(200).send(pokemon)
    },
    deletePokemon: (req, res) => {
        const {poke_id} = req.params

        const index = pokemon.findIndex(e => e.id === +poke_id)

        if(index === -1){
            return res.status(404).send("Pokemon not found")
        }
        pokemon.splice(index, 1)
        res.status(200).send(pokemon)
    },
}