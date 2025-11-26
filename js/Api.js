//Buscando os dados

export default class Api {
  constructor(url) {
    this.url = url;
  }

  async fetchPosts() {
    const res = await fetch(this.url);

    if (!res.ok) {
      throw new Error("Erro ao buscar dados: " + res.status);
    }

    this.data = await res.json();
    return this.data;
  }
}
