const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
  const authorization = req.headers['authorization'];

  try {
    if(!authorization){
      res.status(401).json({message : 'invalid token'})
    }else{
      const accessToken = authorization.split(' ')[1];
      if(isAuthorized(accessToken) === 'jwt expired'){
        res.set('accessToken', remakeToken(req)); //엑세스 토큰 만기시 다시 만들어서 헤더에 담아서 보내기
      }

      const userData = isAuthorized(accessToken);

      const userInfo = await user.findOne({attributes : ['nickname', 'profile', 'vegtype', 'email'], where : { email : userData.email}});

      res.status(200).json({
        message : 'ok',
        nickname : userInfo.dataValues.nickname,
        vegType : userInfo.dataValues.vegtype,
        profileblob : userInfo.dataValues.profile,
        email : userInfo.dataValues.email
      })
    }

  } catch (error) {
     res.status(500).send(error);
  }
};
  