import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const datasourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [join(__dirname, '/src/**/*.entity.{ts,js}')],
  migrations: ['./src/migrations/*.ts'],
  migrationsRun: JSON.parse(process.env.MIGRATIONS_RUN),
  synchronize: JSON.parse(process.env.SYNCHRONIZE),
  logging: false,
};

export const datasource = new DataSource(datasourceOptions);
