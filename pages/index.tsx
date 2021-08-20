import styles from '../styles/Home.module.css'
import tw from 'twin.macro'
import { Layout } from 'components/Layout'

const Home = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <title>PixelOpedia</title>
        <Title> PixelOpedia </Title>
        <SubTitle>Coming soon...</SubTitle>
      </Layout>
    </div>
  )
}

export default Home

const Title = tw.h1`text-center  text-cyberPink-light text-4xl`

const SubTitle = tw.h2`text-center text-orange-500 text-2xl`
