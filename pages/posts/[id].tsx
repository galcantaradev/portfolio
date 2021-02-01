import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout, SectionTitle } from '../../components';
import { apolloClient } from '../../lib';
import { Post } from '../../types';
import { toPaths } from '../../utils';

interface Props {
  post: Post;
}

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
    }
  }
`;

const POST_BY_ID_QUERY = gql`
  query Post($id: String!) {
    post: postById(id: $id) {
      post {
        id
        title
        description
        markdown
        updoot
        readTime
      }
    }
  }
`;

const PostDetails = ({ post }: Props) => {
  return (
    <Layout>
      <SectionTitle>{post.title}</SectionTitle>
      <small>{post.description}</small>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: POSTS_QUERY
  });

  const paths = toPaths<Post>(data.posts);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: POST_BY_ID_QUERY,
    variables: {
      id: params.id
    }
  });

  return {
    props: {
      post: data.post.post
    }
  };
};

export default PostDetails;