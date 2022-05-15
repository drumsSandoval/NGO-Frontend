import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Inicio from 'sections/inicio';
import Nosotros from 'sections/nosotros';
import Blog from 'sections/blog';
import Testimoniales from 'sections/testimoniales';
import { fetchAPI } from "../lib/api";


export default function IndexPage({articles,homepage }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title=" Real asociación de cronistas"
          description="Real asociación de cronistas municipales del estado de Jalisco AC"
        />
        <Inicio />
        <Nosotros />
        <Blog articles={articles} homepage={homepage} />
        <Testimoniales />
      </Layout>
    </ThemeProvider>
  );
}


export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
