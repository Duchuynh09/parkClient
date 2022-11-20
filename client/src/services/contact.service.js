import createApiClient from "./api.service";
class ContactService {
  constructor(baseUrl) {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data.documents;
  }
  async create(data) {
    console.log(data);
    await this.api.post("/", data)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    return (await this.api.post("/", data)).data.documents;
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
