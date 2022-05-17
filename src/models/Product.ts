export interface Product {
	id?: number;
	name: string;
	link: string;
	media: string;
	upvote: number;
	description: string;
	maker: {
		name: string;
		avatar: string;
	};
}
