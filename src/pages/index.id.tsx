import Hero from "id/komponen/hero/Hero";
import ArtikelTerbaru from "id/komponen/artikel/ArtikelTerbaru";
import ProyekTerbaru from "id/komponen/proyek/ProyekTerbaru";
import Head from "next/head";
import { Artikel, Proyek } from "../../.contentlayer/generated";
import { getAllArtikel, getAllProyek } from "id/utils/contents";
import Link from '.././id/komponen/Link'

const Beranda = ({ artikel, proyek }: { artikel: Artikel[]; proyek: Proyek[] }) => {
  return (
    <>
      <Head>
        <title>Beranda - pocong.xyz</title>
        <meta
          name="description"
          content="A personal blog to showcase proyek and some articles in Wed Development fields"
        />
      </Head>
      <Hero />
      <div className="py-4" />
      <TerbaruProyek proyek={proyek} />
      <div className="font-mono mt-6 flex justify-end text-base font-medium leading-6">
            <Link
              href="/proyek"
              className="text-background-color hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              aria-label="all artikel"
            >
              All Proyek &rarr;
            </Link>
          </div>

      <ArtikelTerbaru artikel={artikel} />
      <div className="font-mono mt-6 flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-background-color hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              aria-label="all artikel"
            >
              All Artikel &rarr;
            </Link>
          </div>
    </> 
  );
};

export default Beranda;

export async function getStaticProps() {
  const artikel = getAllArtikel();
  const proyek = getAllProyek();
  return {
    props: {
      artikel,
      proyek,
    },
  };
}
