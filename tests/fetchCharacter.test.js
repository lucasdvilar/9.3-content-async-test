require('../mocks/fetchSimulator');
const character = require('../mocks/character');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('testing fetchCharacter', () => {
  it('wonder woman?', async () => {
    const char = await fetchCharacter('720');
    expect(char.name).toBe('Wonder Woman');
  });

  it('no parameter', async () => {
    const fail = await fetchCharacter();
    expect(fail).toEqual(new Error('You must provide an url'));
  })

  it('missing parameter', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
  });

  it('checks the endpoint of fetch', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});