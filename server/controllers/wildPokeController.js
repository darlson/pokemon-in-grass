const axios = require('axios')


module.exports = {
    getThreeRandomPokemon: (req, res) => {
        const wildPokeArray = []
        const rand1 = Math.ceil(Math.random() * 151)
        const rand2 = Math.ceil(Math.random() * 151)
        const rand3 = Math.ceil(Math.random() * 151)
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

        axios.get(baseUrl + rand1).then((response1) => {
            wildPokeArray.push(response1.data)

            axios.get(baseUrl + rand2).then(response2 => {
                wildPokeArray.push(response2.data)

                axios.get(baseUrl + rand3).then(response3 => {
                    wildPokeArray.push(response3.data)

                    res.status(200).send(wildPokeArray)
                })
            })
        })
    }
}