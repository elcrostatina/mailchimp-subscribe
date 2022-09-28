import axios from 'axios';

interface GetRequestParams {
  url: string;
  params?: { [key: string]: string };
}

export const get = async <T>(params: GetRequestParams): Promise<T> => {
  const response = await axios.get<T>(params.url, {
    params: params.params,
  });

  return response.data;
};
