import { formatDate } from '../../utils'
import Link from 'next/link'

import styles from './styles.module.scss'
import { ArticlesProps } from '../../types/Article'


export default function ArticlesCards({ articles }: ArticlesProps) {
    return (
        <main className={ styles.main } role="main">

            <section className="p-5 jumbotron text-center">
                <div className="container">
                    <h1>Artigos publicados</h1>
                    <p className="lead text-muted">Aqui estão alguns artigos publicados pela galera</p>
                </div>
            </section>

            <div className="album pb-5 bg-light">
                <div className="container">

                    <div className="row">

                        { articles.map(article => {
                            return (
								<Link key={ article.id } href={`/article/${ article.id }`}>
									<div className="col-md-4 col-lg-3">
										<div className={`${ styles.card } card mb-4 shadow-sm`}>
											{ article.feed_thumbnail ?  (
												<img
													src={ article.feed_thumbnail.url }
													alt=""
												/>
											):
												<svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: No image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
													<rect width="100%" height="100%" fill="#55595c"></rect>
													<text x="50%" y="50%" fill="#eceeef" dominantBaseline="middle" textAnchor="middle">No image</text>
												</svg>
											}

											<div className="card-body">
												<p className="card-text text-justify">
													{ article.title }

												</p>

												<span>
													Publicado em: { formatDate(article.published_at) }
												</span>
											</div>


											<div className="d-flex justify-content-center">
												{ article.tags.map(tag => (
													<span key={ tag } className={ styles.tag }>{ tag }</span>
												))}
											</div>

										</div>
									</div>
								</Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </main>
    )
}
