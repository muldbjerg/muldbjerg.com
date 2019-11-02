// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Gridsome",
    plugins: [
        {
            use: "@gridsome/source-wordpress",
            options: {
                baseUrl: "http://127.0.0.1/blog-wp/", // required
                apiBase: "wp-json",
                typeName: "WordPress",
                perPage: 100,
                concurrent: 10
            }
        }
    ],
    templates: {
        WordPressPost: "/:year/:month/:day/:slug"
    }
};
