export default (app) => {
  app.get("/api/get-data", (req, res) =>
    res.status(200).send({
      message: "GET DATA",
    })
  );
};
