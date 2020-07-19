import { IPanier_Produit } from './IPanier_Produit';
import { ICommande } from './ICommande';
export interface IProduit{
	id?: number;
	idCommerce: number;
	idCategorie: number;
	nom: string;
	description: string;
	prix: number;
	stock: number;
	commission: number;
	isAvailable: boolean;

	
	Panier_Produit?: IPanier_Produit;
	Commandes?: Array<ICommande>;

}