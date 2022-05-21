const db = require("../connection");

const getAllJobs = (req, res) => {
  db.query("SELECT * from public.listing", (err, dbRes) => {
    if (err) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

const createListing = (req, res) => {
  const query =
    "INSERT INTO public.listing (img, employees, company, jobtype, jobtitle, location, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const b = req.body;
  const values = [
    b.img,
    b.employees,
    b.company,
    b.jobtype,
    b.jobtitle,
    b.location,
    b.description,
  ];
  db.query(query, values, (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

const deleteListing = (req, res) => {
  db.query(
    "DELETE from public.listing WHERE public.listing.id = $1",
    [Number(req.params.id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};

module.exports = {
  getAllJobs,
  createListing,
  deleteListing,
};
