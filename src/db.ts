import { DataSource } from "typeorm";
import { config } from "dotenv";
import entities from "./entities";

config();
console.log(`DB : postgres://postgres:pass@postgres:5432`)
export default new DataSource({
  type: "postgres",
  synchronize: true,
  url: `postgres://postgres:pass@postgres:5432`,
  logging: true,
  // dropSchema:true,
  entities: entities,
  
});
