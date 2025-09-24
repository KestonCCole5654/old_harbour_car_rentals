const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "weekly", priority: 0.7 },
  { url: "/cars", changefreq: "daily", priority: 0.9 },
  { url: "/my-bookings", changefreq: "weekly", priority: 0.6 },
];

(async () => {
  const stream = new SitemapStream({ hostname: "https://www.shelmurcarrentals.cc" });

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
