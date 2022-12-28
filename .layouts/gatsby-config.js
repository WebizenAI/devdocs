const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Webizen Development Related Documentation.",
  shortName: "WebizenDevDocs",
  description:
    "This repo provides information about the webizen development objectives, considerations and related experimentation!",
  twitterName: "webcivics",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://devdocs.webizen.org",
};
module.exports = {
  siteMetadata,
  pathPrefix: "/",

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.resolve(`./${contentFolder}`),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        sidebarDepth: 0,
        icon: "./static/icon.png",
        sidebarComponents: ["summary", "latest", "tag"],
        contentMaxWidth: 1363,
        searchBody: true,
        // sidebarDefault: "tag",
        // shouldSupportTags: true,
        // defaultColorMode: "night",
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Github",
            url: "https://github.com/webizenai/devdocs/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/webcivics",
          },
        ],
        editUrl:
          "https://github.com/webizenai/devdocs/tree/main/",
        },
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          icon: path.resolve("./static/icon.png"),
        },
      },
    ],
  };
  