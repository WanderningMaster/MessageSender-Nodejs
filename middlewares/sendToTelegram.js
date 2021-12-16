const {TOKEN, chatId} = require('../config.json');
const {fetch} = require('undici');

module.exports = sendMessage = async (req, res, next) => {
  const data = req.body;
  const uri = Object.keys(data)
    .map(key => key + ': ' + data[key] + '\n')
    .join('');

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${uri}`;
  console.log(url);

  const response = await fetch(encodeURI(url));
    if(response.status !== 200){
      res.json({data: 'error'});
    }
    else{
      req.url = url;
      next();
    }
}
