import http from 'k6/http';
import { domain, cookie } from './env.js';

export function filterMonk() {
  const url = `${domain}/backend/api/v1/health/filter-monk?provname=ชลบุรี&distname=&subdistname=&disease=&temple_code=&temple_name=&search=`;

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