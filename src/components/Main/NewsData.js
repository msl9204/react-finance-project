const request = require("request");

request(
    "https://finnhub.io/api/v1/news?category=general&token=bq8njs7rh5rc96c0jpt0",
    { json: true },
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body.url);
        console.log(body.explanation);
    }
);
