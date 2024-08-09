#!/usr/bin/node

const rp = require('request-promise');

const movieId = process.argv[2];
const movieEndpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

async function fetchCharacterName(url) {
  try {
    const body = await rp(url);
    const character = JSON.parse(body);
    console.log(character.name);
  } catch (error) {
    console.error(`Error fetching character data: ${error.message}`);
  }
}

async function main() {
  try {
    const movieBody = await rp(movieEndpoint);
    const movie = JSON.parse(movieBody);
    const characterList = movie.characters;

    for (const characterUrl of characterList) {
      await fetchCharacterName(characterUrl);
    }
  } catch (error) {
    console.error(`Error fetching movie data: ${error.message}`);
  }
}

main();
