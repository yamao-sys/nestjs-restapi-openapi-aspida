import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1bxrhgq } from './auth/sign_in';
import type { Methods as Methods_1escmss } from './auth/sign_up';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth/sign_in';
  const PATH1 = '/auth/sign_up';
  const POST = 'POST';

  return {
    auth: {
      sign_in: {
        /**
         * Login.
         * @returns Succeed in Login.
         */
        post: (option: {
          body: Methods_1bxrhgq['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1bxrhgq['post']['resBody'],
            BasicHeaders,
            Methods_1bxrhgq['post']['status']
          >(prefix, PATH0, POST, option).text(),
        /**
         * Login.
         * @returns Succeed in Login.
         */
        $post: (option: {
          body: Methods_1bxrhgq['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1bxrhgq['post']['resBody'],
            BasicHeaders,
            Methods_1bxrhgq['post']['status']
          >(prefix, PATH0, POST, option)
            .text()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      sign_up: {
        /**
         * Create user.
         * @returns Created User.
         */
        post: (option: {
          body: Methods_1escmss['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1escmss['post']['resBody'],
            BasicHeaders,
            Methods_1escmss['post']['status']
          >(prefix, PATH1, POST, option).json(),
        /**
         * Create user.
         * @returns Created User.
         */
        $post: (option: {
          body: Methods_1escmss['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1escmss['post']['resBody'],
            BasicHeaders,
            Methods_1escmss['post']['status']
          >(prefix, PATH1, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
