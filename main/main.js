//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { viewMonk } from '../api/view-monk.js';
import { filterMonk } from '../api/filter-monk.js';
import { heatIndexProvince } from '../api/heat-index-province.js';
import { filterPerson } from '../api/filter-person.js';
import { viewPersonContagious } from '../api/view-person-contagious.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = viewMonk()
  //response = filterMonk()
  //response = heatIndexProvince()
  //response = filterPerson()
  response = viewPersonContagious()
  
  //response_check(response);
  error_check(response);
  sleep(1)
}