
import { Column, PrimaryGeneratedColumn, Entity, BaseEntity} from "typeorm";

@Entity()
export class RoleObject extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number;
}