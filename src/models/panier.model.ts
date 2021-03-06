import { IPanier } from './../interfaces/IPanier';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';

   @Table(
	   {
		   tableName: "panier",
		   timestamps: true
	   }
   )
   export default class Panier extends Model implements IPanier{

		@AutoIncrement
		@PrimaryKey
		@Column
		id: number;

		@AllowNull(false)
		@NotEmpty
		@Column
		idUser: number;

		@AllowNull(true)
		@Column
		nom: string;

		@AllowNull(false)
		@NotEmpty
		@Column
		dateCreation: Date;

		@AllowNull(true)
		@Column
		dateMiseAJour: Date;

		@AllowNull(true)
		@Column
		isFavori: Boolean;
   }