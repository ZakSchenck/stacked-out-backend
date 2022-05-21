# StackedOUT - Fullstack Application Inspired by LinkedIn (Backend)

If you would like to see the frontend, click this link: https://github.com/ZakSchenck/stacked-out-frontend

## Backend Tools
• PostgreSQL
• Node.js
• Express.js
• Express Router

## More Information
This application is still being updated and maintained. I plan on implementing a comments section to each listing, as well as adding PUT requests.

## CRUD operations used
• GET job listings <br />
```
const getAllJobs = (req, res) => {
  db.query("SELECT * from public.listing", (err, dbRes) => {
    if (err) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};
```
• POST new job listing <br />
```
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
```
• DELETE job listing <br />
```
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
