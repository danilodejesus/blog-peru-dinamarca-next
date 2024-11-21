import HomeBanner from '../app/components/home/HomeBanner.jsx';
import ListPosts from '../app/components/ListPost.jsx';
import Layout from '../app/containers/Layout.jsx';

function Home() {
  return (
    <div className="home">
      <Layout>
        <HomeBanner />
        <ListPosts />
      </Layout>
    </div>
  );
}

export default Home