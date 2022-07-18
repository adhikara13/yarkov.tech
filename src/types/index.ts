export type ArticleType = {
	title: string;
	author: string;
	tags: Array<string>;
	published_at: number;
};

export type ProjectType = {
	icon: string;
	name: string;
	year: string;
	description: string;
	sourceUrl?: string | undefined;
	articleUrl?: string | undefined;
	demoUrl?: string | undefined;
};

export type SkillsType = {
	title: string;
	list: Array<{ icon?: string | undefined; name: string }>;
};
