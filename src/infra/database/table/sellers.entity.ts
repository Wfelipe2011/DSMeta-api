import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('seller')
export class SellerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  name: string;

  @Column({ nullable: true })
  visits: number;

  @Column({ nullable: true })
  sales: number;

  @Column({ nullable: true })
  total: number;
}
