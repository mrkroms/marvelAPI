class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=9cc41c7ee9a47ac28d2ddd5d7b8d2112";

  getRecource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , status ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = () => {
    return this.getRecource(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getRecource(
      `${this._apiBase}characters/${id}?&${this._apiKey}`
    );
  };
}

export default MarvelService;
