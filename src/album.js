export default function album() {
  return { // vou retornar os métodos que eu quero
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`), // estou chamando um id, então ele vai chamar o this.request passando a url
    getAlbums: ids => this.request(`${this.apiURL}/albums?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks`),
  };
}
