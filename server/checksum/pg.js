'use strict';
var PAYTM_STAG_URL = 'https://pguat.paytm.com';
var PAYTM_PROD_URL = 'https://secure.paytm.in';
var MID = 'QUIZNO74969684583240';
var PAYTM_ENVIORMENT = 'PROD';   // PROD FOR PRODUCTION
var PAYTM_MERCHANT_KEY = 'JIcQJglw#ETVm6gi';
var WEBSITE = 'WEBPROD';
var CHANNEL_ID =  'WEB'; 
var INDUSTRY_TYPE_ID = 'Retail109';
var PAYTM_FINAL_URL = 'https://securegw.paytm.in/theia/processTransaction';
// if (PAYTM_ENVIORMENT== 'TEST') {
//   PAYTM_FINAL_URL = 'https://securegw-stage.paytm.in/theia/processTransaction';
// }else{
//   PAYTM_FINAL_URL = 'https://securegw.paytm.in/theia/processTransaction';
// }

module.exports = {
  MID : MID,
  PAYTM_MERCHANT_KEY :PAYTM_MERCHANT_KEY,
  PAYTM_FINAL_URL :PAYTM_FINAL_URL,
  WEBSITE: WEBSITE,
  CHANNEL_ID: CHANNEL_ID,
  INDUSTRY_TYPE_ID: INDUSTRY_TYPE_ID
  
};
