//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                    //
//                              𝗔𝗞𝗜 𝗠𝗗 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                    //
//                                       Ｖ：1.0                                                       //
//
//
//                                  
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝗔𝗞𝗜 𝗠𝗗 𝗑ᴾᴿᴼ
//  * @version      : 1.0
//  * @author       : akila udara
//  * @youtube      : https://youtube.com/@aki_780?si=QKLbzZLv5KUCUThi
//  * @description  : ©𝗔𝗞𝗜 𝗠𝗗 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by akila udara.
//*
//*
//Base by akila udara
//GitHub: @akimdbot
//WhatsApp: +94728356328
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@aki_780?si=QKLbzZLv5KUCUThi
//   * Created By GitHub: akimdbot
//   * Credit To akila udara
//   * © 2025 © 𝗔𝗞𝗜 𝗠𝗗 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AKI-V1-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBuR3dpTUViMU5IQVRWdS9zaVlYdFRiTDFNaVo5bkIxQi9lZzIzOGMwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlhqUndCT0lZV3FHT21nS0NkMklORUhoK1VkM0tYaUdySTBLcFY1VzhEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTUJBVTlLWkxSM01qdEEySWRSVzN2M0xDRXBpYU1TUW1JOWpNUlNNSlZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUlBJWHY0akVvUGRDdmlNMnI3RE5vZHhFRVg1dlVGN2NWbVRFQmtXb1FJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBRGdOVGN2MmNLcE90dWRHQm1aTWVZdWpVMkV0RXpxWmJDVVhlc1h0VTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdTbE53ZUk1QkR5TTZuME01VzNXTlM3U0Y1cnlTY25ZWHFZQ3JDSUt4Unc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdJSXpuekpjSGJJN2pBelFhdjJLSG9mMGhXVHU0YS96UmpBNE5YUFJWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemdZbXp2VXl5cW81QVJRcVJIQStSYkM4T2k2Wmo2UWNYNG13WGtwUmJYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MVllZc25CdFJJZXE0V2ZoSzN2ZWlVREtMbXdoL2tKME5QRnp0Y2FBd01WdTdrWkU4bUcyOEd4VXNwNStHd3k2MXFXUmhRMmszL3lGRTBJVi9EekJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJLNWVqWnhyS1h1VmhtSVdidGltdGJvNDRtVUFZak53dFlwSW9MbWw1TTBJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAxNzY1OTEyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOEE2RDZCREQ3RTIyRUFDRDRGNDlCQURDRjc0QkQ5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NDEyMzE5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXdWlqektUclRNUzZ2MFpKd19LRkZnIiwicGhvbmVJZCI6IjlkZDIxZjZkLTA5MDMtNDA4NS1hYTZhLTkyM2UwZGZlMWE2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4a01nSTI1a3J3MzV6YjZxNGZuSThwVWxHZ2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2t0emNpYnRQQlROQnZMaG9FNHEwQlQ2RGlFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZHV0FBR0xUIiwibWUiOnsiaWQiOiI5MTcwMTc2NTkxMjQ6MzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTE4NTIzNjM5NTYyNzY6MzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLeTF3TUVIRUkzcXlNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqTWUxMWVreHBVd3QxYitXWWVwdFhvU1NBeEgzeWRWVUNkclBnaW8wZHhnPSIsImFjY291bnRTaWduYXR1cmUiOiJCOGpQMGNZd041bVRtL2VXVkhQYUV0bk5aQ3JEcktpT2hoNHdESmJVWFBtR3VNbi9GbkQwcFhMdmNsRUtZdGdXZ3lRS2t3K2JVU3ZUYjhDL0dRMEFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTDNkVmphOW8xcWFWWDJHeFd4TGR4RlZzSEtjL1hqdnNOTlU5SkREOWdlSWlqYzJzb2JmVmpkcDVCR0RqR1FSTHJCRU5zTUJObUNKempiWWhCS0VKRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMTc2NTkxMjQ6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXpIdGRYcE1hVk1MZFcvbG1IcWJWNkVrZ01SOThuVlZBbmF6NElxTkhjWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NDEyMzE1LCJsYXN0UHJvcEhhc2giOiJDNGZKTiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWpOIn0=",
SUDO: process.env.SUDO || ["94728356328","94728356328"],
PORT: process.env.PORT || "4000",
FOOTER: process.env.FOOTER || "> 𝗔𝗞𝗜_𝗠𝗗 XPRO\n> Developed by Mr. akila\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n🌟 Premium Version | Advanced Features | Secure & Reliable 🌟\n© 2025 𝗔𝗞𝗜 𝗠𝗗 XPRO. All rights reserved.",
};
