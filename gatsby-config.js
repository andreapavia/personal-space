const manifestPluginConfig = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: "Andrea Francesco Pavia's Portfolio",
        short_name: "Andrea Francesco Pavia's Portfolio",
        start_url: '/',
        background_color: '#d72638',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
    },
};

const siteMetaData = {
    title: `Andrea's personal space`,
    description: `
  My own showcase and tinkering website.
`,
    author: `@andreapavia`,
    siteUrl: `https://personalspace.gatsbyjs.io/`,
};

const gatsbySourceFileSystem = {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/images`,
    },
};

const gatsbyFontLoader = {
    resolve: `gatsby-omni-font-loader`,
    options: {
        enableListener: true,
        preconnect: [
            `https://fonts.googleapis.com`,
            `https://fonts.gstatic.com`,
        ],
        web: [
            {
                name: `Aboreto`,
                file: `https://fonts.googleapis.com/css2?family=Aboreto&display=swap`,
            },
        ],
    },
};

const gatsbyPluginEslint = {
    resolve: 'gatsby-plugin-eslint',
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: { ...siteMetaData },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        'gatsby-plugin-layout',
        'gatsby-plugin-page-transitions',
        gatsbyFontLoader,
        gatsbySourceFileSystem,
        gatsbyPluginEslint,
        manifestPluginConfig,
    ],
};
