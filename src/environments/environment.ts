// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {env} from './.env';


export const environment = {
  production: false,
  api: env.server + '/api',
  api_token_auth: env.server + '/api-token-auth/',
  api_token_refresh: env.server + '/api-token-refresh/'
};
