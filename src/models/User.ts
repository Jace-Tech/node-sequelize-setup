import {
  Model,
  Column,
  Table,
  Scopes,
  CreatedAt,
  Default,
  PrimaryKey,
} from "sequelize-typescript";

@Scopes(() => ({
  defaultScope: {
    where: {
      isActive: true,
    },
  },
}))
@Table({ freezeTableName: true })
export class Actor extends Model<Actor> {
  @PrimaryKey
  @Column
  userId!: string; // This will be coming from PI

  @Column
  musicName?: string;

  @Column
  bio?: string;

  @Column
  genre?: string;

  @Column
  pi_username?: string;

  @Column
  profileImage?: string;

  @Column
  coverImage?: string;

  @Default(false)
  @Column
  shadow_ban?: string;

  @Default(true)
  @Column
  isActive?: boolean;

  @CreatedAt
  @Default(Date.now())
  @Column
  dateRegistered!: Date;
}
