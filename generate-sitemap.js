const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/cars", changefreq: "daily", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  // 👉 Add all important pages of your site here
];

(async () => {
  const stream = new SitemapStream({ hostname: "https://grantscarrentals.lat" });

  links.forEach(link => stream.write(link));
  stream.end();

  streamToPromise(stream)
    .then((data) => {
      // Ensure the client/public directory exists
      if (!fs.existsSync("./client/public")) {
        fs.mkdirSync("./client/public");
      }
      fs.writeFileSync("./client/public/sitemap.xml", data.toString());
      console.log("✅ Sitemap created at /client/public/sitemap.xml");
    })
    .catch((err) => {
      console.error("❌ Error generating sitemap:", err);
    });
})();
