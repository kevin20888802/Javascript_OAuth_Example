const fs = require('fs');
const http = require('http');
const https = require('https');
const { getUserInfo } = require("../getUserInfo");

const configPath = './configOAuth.json';
const tokenEndpoint = '/realms/{realm}/protocol/openid-connect/token';

function getToken() {
  return new Promise((resolve, reject) => {
    fs.readFile(configPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const config = JSON.parse(data);
      console.log(config);
      const httpModule = config.http === 'https' ? https : http;

      const options = {
        hostname: config.hostname,
        port: config.port,
        path: tokenEndpoint.replace('{realm}', config.realm),
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      const postData = `client_id=${config.client_id}&client_secret=${config.client_secret}&grant_type=client_credentials`;

      const req = httpModule.request(options, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          if (res.statusCode === 200) {
            const tokenResponse = JSON.parse(responseBody);
            resolve(tokenResponse.access_token);
          } else {
            reject(new Error(`Failed to obtain token. Status code: ${res.statusCode}`));
          }
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      req.write(postData);
      req.end();
    });
  });
}


module.exports = (req ,res) => {
    // 使用 getToken 函数获取令牌
    getToken()
    .then((token) => {
        //console.log('Token:', token);
        // 在此处使用获取到的令牌进行需要授权的操作
        return getUserInfo(token);
    })
    .then((userInfo) => {
        console.log('User Info:', userInfo);
        // 在此处处理获取到的用户信息
        res.send(userInfo);
    })
    .catch((err) => {
        console.error('Failed to obtain token:', err);
        res.send("cannot get token")
    });

}