import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/styles.css'

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}