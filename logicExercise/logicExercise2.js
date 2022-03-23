/* (Inglés) Your task in this exercise is as follows: Take the following selection of 70
English Pokemon names (extracted from Wikipedia's list of Pokemon), and generate
the/a sequence with the highest possible number of Pokemon names where the
subsequent name starts with the final letter of the preceding name. No Pokemon
name is to be repeated.
Pokemon list:
audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon
cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig
gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune
landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine
nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz
registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon
simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix
wailord wartortle whismur wingull yamask */
const pokemon =
  'audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask'

const copyPokemon = pokemon.split(' ')

let currentPokemon = []
let maxPokemon = []

for (let i = 0; i < copyPokemon.length; i++) {
  const element = copyPokemon[i]
  for (let j = 0; j < copyPokemon.length; j++) {
    const element2 = copyPokemon[j]
    if (element && element2) {
      if (element.charAt(element.length - 1) === element2.charAt(0)) {
        currentPokemon.push(element2)
      }
    }
  }
  if (currentPokemon.length > maxPokemon.length) {
    maxPokemon = currentPokemon
  }
  currentPokemon = []
}

console.log(maxPokemon)
