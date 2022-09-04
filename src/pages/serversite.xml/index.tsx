import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const GetPost = async () => {
  const data = await fetch("http://pocong.xyz/blog", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const siteUrl = "http://pocong.xyz";
  const data: any = await GetPost();
  const fields: ISitemapField[] = data?.map((data: any) => ({
    loc: `${siteUrl}/${data.id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}