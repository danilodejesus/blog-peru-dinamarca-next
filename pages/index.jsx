import HomeBanner from '../app/components/home/HomeBanner.jsx';
import ListPosts from '../app/components/ListPost.jsx';
import Layout from '../app/containers/Layout.jsx';

function Home() {
  return (
    <Layout>
      <HomeBanner />
      <ListPosts />
    </Layout>
  );
}

export default Home