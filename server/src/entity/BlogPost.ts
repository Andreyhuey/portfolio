import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authorName: string;

  @Column("longtext", { nullable: true }) // Base64 author image
  authorPicture?: string;

  @Column()
  title: string;

  @Column("longtext") // Allows multiple paragraphs
  content: string;

  @Column("longtext", { nullable: true }) // Base64 post image
  postImage?: string;

  @CreateDateColumn()
  createdAt: Date;
}
