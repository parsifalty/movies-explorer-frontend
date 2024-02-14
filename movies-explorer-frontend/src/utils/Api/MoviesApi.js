class MoviesApi {
  constructor(options) {
    this.url = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject;
  }

  _request(url, options) {
    return fetch(`${this.url}${url}`, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request("/");
  }
}

const apiMovies = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default apiMovies;
