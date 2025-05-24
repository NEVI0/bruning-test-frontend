import type {
  HttpProviderAbstract,
  HttpProviderOptions,
  HttpProviderPayload,
} from '~~/domain/providers';

export default class FetchHttpProvider implements HttpProviderAbstract {
  public get: HttpProviderAbstract['get'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(url, {
      ...(options && { ...options }),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    return response as T;
  };

  public post: HttpProviderAbstract['post'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(url, {
      ...(options && { ...options }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();
    return response as T;
  };

  public put: HttpProviderAbstract['put'] = async <T>(
    url: string,
    body: HttpProviderPayload,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(url, {
      ...(options && { ...options }),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();
    return response as T;
  };

  public delete: HttpProviderAbstract['delete'] = async <T>(
    url: string,
    options?: HttpProviderOptions
  ) => {
    const request = await fetch(url, {
      ...(options && { ...options }),
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    return response as T;
  };
}
