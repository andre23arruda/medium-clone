import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Footer from '../components/Footer/Footer'

import api from '../service/api'
import ArticlesCards from '../components/ArticlesCards/ArticlesCards'
import Navbar from '../components/Navbar/Navbar'

import { ArticlesProps } from '../types/Article'


export default function Album({ articles }: ArticlesProps) {
    return (
        <>
        <Head>
            <title>Artigos | Medium Clone</title>
        </Head>

        <Navbar></Navbar>
		<ArticlesCards articles={ articles }></ArticlesCards>

        <Footer></Footer>

        </>
    )
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
    const response = await api.get('?type=blog.Article&fields=published_at,title,tags,feed_thumbnail')
    const articles = await response.data.items

    return {
        props: {
            articles,
        },
		revalidate: 20,
    }
}
