const config = require("./stuff/config").config;

module.exports = {
  async redirects() {
    return [
      {
        source: "/submit",
        destination: config.submitStudyUrl,
        permanent: false,
      },
    ];
  },
};
