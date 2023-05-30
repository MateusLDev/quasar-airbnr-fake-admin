import axios from 'axios';
const baseURL = 'https://sys-dev.searchandstay.com/api/admin/house_rules';

const api = axios.create({
  headers: {
    Authorization:
      'Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8',
  },
});

const getData = async (id?: number) => {
  return id ? await api.get(`${baseURL}/${id}`) : await api.get(`${baseURL}`);
};

const postData = async (params: any) => {
  return await api.post(`${baseURL}`, { params: { params } });
};

const putData = async (params: any, id: number) => {
  return await api.post(`${baseURL}/${id}`, { params: { params } });
};

const deleteData = async (id: number) => {
  return await api.delete(`${baseURL}/${id}`);
};

export default async function Api(method: string, id?: number, params?: any) {
  let response;

  if (method === 'get') {
    response = await getData(id);
  }

  if (method === 'post') {
    response = await postData(params);
  }

  if (method === 'put') {
    response = await putData(params, id as number);
  }

  if (method === 'delete') {
    response = await deleteData(id as number);
  }

  return response;
}
