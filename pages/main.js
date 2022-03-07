import Head from 'next/head';
import Schema from '../components/Schema'
import Metric from '../components/Metric'

function MainPage () {
  return (
    <div>
        <Head>
            <titile>Main Stuff</titile>
        </Head>
        <h1>add metric logic here</h1>
        <Schema />
        <Metric />
    </div>
  )
}

export default MainPage