import express from "express";
import cors from "cors";
import { ProductsRouter } from "./routes/products.js";

const app = express();
const PORT = 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", ProductsRouter());

app.listen(PORT, () => {
  console.log(`server listening on the port http://localhost:${PORT}`);
});
