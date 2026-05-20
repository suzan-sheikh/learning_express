import express, {
  type Application,
  type Request,
  type Response,
} from "express";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Root Route Response",
    Author: "EccTechBD",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.status(200).json({
    message: "User Create Success",
    body: { name, email },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
