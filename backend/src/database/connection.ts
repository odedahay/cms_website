import { Sequelize } from 'sequelize-typescript';



export const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'cms_blog',
    models: [__dirname + '/../models'],

});

