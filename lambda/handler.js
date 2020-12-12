'use strict';

module.exports.hello = async event => {
  let today = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: today
      },
      null,
      2
    ),
  };
};
