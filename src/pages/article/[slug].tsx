import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import Footer from '../../components/Footer/Footer'

import api from '../../service/api'
import Navbar from '../../components/Navbar/Navbar'
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo'
import { ArticleProps } from '../../types/Article'


export default function Article({ article }: ArticleProps) {
    return (
        <>
            <Head>
                <title>{ article.title } | Medium Clone</title>
            </Head>

            <Navbar></Navbar>
            <ArticleInfo article={ article }></ArticleInfo>
            <Footer></Footer>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get(`?type=blog.Article&fields=published_at,title,tags,feed_thumbnail`)
    const articles = await response.data.items
    const paths = articles.map(article => {
        return {
            params: {
                slug: article.id.toString(),
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps<ArticleProps> = async (ctx) => {
    const response = await api.get(`${ ctx.params.slug }/?type=blog.Article&fields=published_at,title,tags,feed_thumbnail`)
    const article = await response.data

    return {
        props: {
            article,
        },
		revalidate: 20,
    }
}

// export const getServerSideProps: GetServerSideProps<ArticleProps> = async (ctx) => {
//     const response = await api.get(`${ ctx.params.slug }/?type=blog.Article&fields=published_at,intro,body,tags,thumbnail,feed_thumbnail`)
//     const article = await response.data
//     console.log(article)

//     return {
//         props: {
//             article,
//         }
//     }
// }