import styles from '../styles/Home.module.css'
import tw from 'twin.macro'
import { Layout, SideBar } from 'components'

const Home = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Title> Welcome to gaming </Title>
        <SideBar />
      </Layout>
    </div>
  )
}

export default Home

const Title = tw.h1`text-center text-primaryPink-light text-4xl rounded border-gray-200`
