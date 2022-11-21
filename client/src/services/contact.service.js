import createApiClient from "./api.service";
class ContactService {
  constructor(baseUrl) {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data.documents;
  }
  async create(data) {
    // console.log((await this.api.post("/", data)).data);
    return (await this.api.post("/", data)).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data.documents;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data.documents;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}
export default ContactService;
