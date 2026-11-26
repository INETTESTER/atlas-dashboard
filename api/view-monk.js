import http from 'k6/http';
import { domain, cookie } from './env.js';

export function viewMonk() {
  const url = `${domain}/backend/api/v1/health/view-monk?provname=%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5&distname=&subdistname=&disease=&temple_code=&temple_name=&page=1&limit=10&search=`;

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