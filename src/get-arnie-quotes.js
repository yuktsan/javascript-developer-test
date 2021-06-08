const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return await Promise.all(
      urls.map( async url => await handleRequest(url)))
          .catch(error => console.error(`Error occurs in getArnieQuotes - ${error}`));
};

const handleRequest = async(url) => {
    const respond = await httpGet(url);
    const obj = JSON.parse(respond.body);

    if(respond.status === 200) {
        return {
            "Arnie Quote": obj.message
        };
    }

    return {
        "FAILURE": obj.message
    }
};

module.exports = {
  getArnieQuotes,
};
