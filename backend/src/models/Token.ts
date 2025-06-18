import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User";


@Table
export class Token extends Model<Token> {

    @Column
    token?: string;

    @ForeignKey(() => User)
    @Column
    userId?: number;

    @BelongsTo(() => User)
    user?: User;

    @Column({
       type: DataType.ENUM('activation', 'reset'),
    })
    type?: 'activation' | 'reset';

    

}