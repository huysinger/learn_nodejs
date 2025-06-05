const getHomepage = (req, res) => {
  res.send("Hello cu");
};

const getSamplePage = (req, res) => {
  res.render("sample");
};

module.exports = { getHomepage, getSamplePage };
