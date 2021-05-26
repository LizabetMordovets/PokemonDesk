import config from '../config';



const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query:{
      ...query,
    }
  };

  return url;
};

export default getUrlWithParamsConfig;
