import http from 'k6/http';
import { domain, cookie } from './env.js';

export function heatIndexProvince() {
  const url = `${domain}/backend/api/v1/health/heat-index-province`;

  const headers = {
    'Cookie': `auth_token=${cookie}`,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36'
  };

  const response = http.get(url, {
    headers: headers
  });

  //console.log(response.body);

  return response;
}