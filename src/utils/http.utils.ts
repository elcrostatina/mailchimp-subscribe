import axios from 'axios';

interface GetRequestParams {
  url: string;
  params?: Record<any, any>;
}

export const get = async <T>(params: GetRequestParams): Promise<T> => {
  const response = await axios.get<T>(params.url, {
    params: params.params,
  });

  return response.data;
};
