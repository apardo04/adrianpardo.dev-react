import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Batman_Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?(p|b)>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Batman_Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Batman_Post;