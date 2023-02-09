// npm i --save sqlite3 / mysql2

import "reflect-metadata"
import { DataSource } from "typeorm"

export const Database = new DataSource({
    type: "sqlite",
    database: "./app.db",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/db/model/*{.js,.ts}"],
    //migrations: [__dirname + "/db/migration/*{.js,.ts}"],
    //subscribers: [__dirname + "/db/subscribers/*{.js,.ts}"],
})