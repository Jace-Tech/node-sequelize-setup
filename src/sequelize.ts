import {Sequelize} from 'sequelize-typescript';
import ENV from './configs/env';


export const sequelize = new Sequelize({
  host: ENV.DB_HOST,
  password: ENV.DB_PASSWORD,
  username: ENV.DB_USERNAME,
  database: ENV.DB_NAME,
  dialect: 'mysql',
  models: [__dirname + '/**/*.model.ts']
});
