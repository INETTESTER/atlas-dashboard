import http from 'k6/http';
import { domain, cookie, cookie2 } from './env.js';

export function viewPersonContagious() {
  const url = `${domain}/backend/api/v1/health/view-person-contagious?provname=&distname=&subdistname=&disease=&search=&hoscode=&typearea=`;

  const headers = {
    'Cookie': `auth_token=${cookie2}`,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Safari/537.36'
  };

  const response = http.get(url, {
    headers: headers
  });

  //console.log(response.body);

  return response;
}