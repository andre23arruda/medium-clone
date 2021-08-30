type Article = {
    id: number,
    meta: {},
    title: string,
    published_at: string,
    intro: string,
    body: string,
    tags: string[],
    thumbnail: {
        id: number,
        meta: {
            download_url: string
        },
        title: string
    },
    feed_thumbnail: {
		url: string
		width: number,
		height: number,
		alt: string
    }
}

type ArticleProps = {
    article: Article
}

interface ArticlesProps {
    articles: Article[]
}

export type { Article, ArticleProps, ArticlesProps }