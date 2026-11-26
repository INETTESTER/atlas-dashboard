import http from 'k6/http';
import { domain, cookie } from './env.js';

export function filterPerson() {
  const url = `${domain}/backend/api/v1/health/filter-person?provname=&distname=&subdistname=&disease=&temple_code=&temple_name=&search=&category_groups_name=&type=&hos_code=`;

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