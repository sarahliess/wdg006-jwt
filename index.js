import "./db/index.js";
import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import postsRouter from "./routes/postsRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5050;

//middleware that allows us to use the cookies throughout the application
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
