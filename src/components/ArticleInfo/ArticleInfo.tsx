import { formatDate } from '../../utils'
import styles from './styles.module.scss'
import { ArticleProps } from '../../types/Article'


export default function ArticleInfo({ article }: ArticleProps) {
    return (
        <main className={ styles.main } role="main">
            { article.thumbnail ?  (
                <img className="cover"
                    src={ article.thumbnail.meta.download_url }
                    alt={ article.thumbnail.title }
                />
                ):
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: No image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dominantBaseline="middle" textAnchor="middle">No image</text>
                </svg>
            }
            <h1 className="m-5 mb-1 text-justify">{ article.title }</h1>
            <h6 className="mx-5 text-right">Publicado em { formatDate(article.published_at) }</h6>
            <h6 className="mx-5 text-right">Tags:
                { article.tags.map(tag => ` ${ tag }`)}
            </h6>


            <div className="m-5 mt-4" dangerouslySetInnerHTML={{ __html:article.body }}></div>
        </main>
    )
}
