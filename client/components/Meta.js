import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport'
            content='width=device-width, 
            initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <title> MetricQL </title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'MetricQL',
    keywords: 'GraphQL, Open Source, MetricQL, javascript, programming',
    description: 'GraphQL migration tool'
}

export default Meta;