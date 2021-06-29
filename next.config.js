module.exports = {
  async redirects() {
    return [
      {
        source: "/submit",
        destination: "https://google.com"
      }
    ];
  }
};
