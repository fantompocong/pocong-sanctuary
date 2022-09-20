import Intro from "components/intro/Intro";
import ThreeRecentPosts from "components/posts/ThreeRecentPosts";
import RecentProjects from "components/projects/RecentProjects";
import Head from "next/head";
import { Post, Project } from "../../.contentlayer/generated";
import { getAllPosts, getAllProjects } from "utils/contents";
import Link from '.././components/Link'

const Home = ({ posts, projects }: { posts: Post[]; projects: Project[] }) => {
  return (
    <>
      <Head>
        <title>Home - pocong.xyz</title>
        <meta
          name="description"
          content="A personal blog to showcase my learning process. I currently learning about cryptocurrency and blockchain technology and its relation to art. As part of my learning process, I have launched several projects."
        />
      </Head>
      <Intro />
      <div className="py-4" />
      <RecentProjects projects={projects} />
      <div className="font-mono mt-6 flex justify-end text-base font-medium leading-6">
            <Link
              href="/projects"
              className="text-background-color hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Projects &rarr;
            </Link>
          </div>

      <ThreeRecentPosts posts={posts} />
      <div className="font-mono mt-6 flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-background-color hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
    </> 
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  return {
    props: {
      posts,
      projects,
    },
  };
}
