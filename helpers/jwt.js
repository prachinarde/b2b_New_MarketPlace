const { expressjwt: expressJwt } = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
      
    }).unless({
        path: [
           {url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS']},
           {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
           {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}






module.exports = authJwt