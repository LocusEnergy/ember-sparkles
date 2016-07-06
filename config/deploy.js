module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-sparkles',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
