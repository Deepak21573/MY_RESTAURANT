import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ["POST"],
    credentials: true,
  })
);
// app.use(
//   cors()
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);


dbConnection();

app.use(errorMiddleware);

export default app;