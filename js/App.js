// Controlando a tabela

import Api from "./Api.js";

export default class App extends Api {
  constructor(url, tableBodySelector) {
    super(url);
    this.tbody = document.querySelector(tableBodySelector);
  }

  async init() {
    const posts = await this.fetchPosts();
    this.renderTable(posts);
    this.initializeDataTable();
  }

  renderTable(posts) {
    this.tbody.innerHTML = posts
      .map(post => {
        return `
          <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.userId}</td>
            <td>${post.id}@email.com</td>
            <td>${post.id % 2 === 0 ? "Male" : "Female"}</td>
          </tr>
        `;
      })
      .join("");
  }

  initializeDataTable() {
    new DataTable("#myDataTableJS"); // usando DataTables
  }
}
