/** @type {import('next-sitemap').IConfig} */

const siteUrl = "http://pocong.xyz/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Google",
        allow: "/",
      },
    ],

    additionalSitemaps:[
        "http://localhost:3000/serversite.xml"
    ]
   
  },
};