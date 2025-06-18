import { Table, Model, Column, ForeignKey} from "sequelize-typescript";
import { Tag } from "./Tag";
import { Post } from "./Post";


@Table
export class PostTag extends Model<PostTag> {

    @ForeignKey(() => Post)
    @Column
    postId?: number;

    @ForeignKey(() => Tag)
    @Column
    tagId?: number;

}