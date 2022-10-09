import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetailedProject {
	
	@PrimaryGeneratedColumn()
	id!:number;

	@Column('varchar', { length: 50 })
	title!:string|null;

	@Column('varchar', { length: 1500})
	content!:string|null;

        @Column('varchar', {length: 750})
        brief!:string;

	@Column('varchar', { length: 2 })
	lang!:'en'|'pt';

	@Column('jsonb')
	technologies!:string[];

        @Column('varchar', { length: 50 })
        videoUrl!:string;
	
}

