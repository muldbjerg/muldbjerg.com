// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Muldbjerg",
  siteUrl: "https://muldbjerg.com/",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://blog.pixelab.dk/", // required
        apiBase: "wp-json",
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10,
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-92276519-1",
      },
    },
    { use: "@gridsome/plugin-sitemap" },
  ],
  templates: {
    WordPressPost: "/blog/:slug",
    WordPressCategory: "/category/:slug",
  },
};
