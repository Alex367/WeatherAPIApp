export default async function handler(req, res) {
  if (req.method === "GET") {
    const { slug } = req.query;

    let url;
    if (slug[1] === "search") {
      url = `https://${process.env.RESOURCE_URL}/search.json?q=${slug[0]}`;
    } else if (slug[1] === "forecast") {
      url = `https://${process.env.RESOURCE_URL}/forecast.json?q=${slug[0]}&days=3`;
    } else {
      res.status(400).json({ message: "Something went wrong" });
      return;
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.RESOURCE_URL,
      },
    };
    let result;
    try {
      const response = await fetch(url, options);
      result = await response.json();
    } catch (error) {
      res.status(400).json({ message: "Something went wrong" });
      return;
    }

    res.status(200).json({ message: "OK", result });
  }
}
