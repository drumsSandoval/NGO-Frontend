import {useRouter} from 'next/router';
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinIcon, LinkedinShareButton,  } from 'react-share';

import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Conference = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);
  const router = useRouter();
  const baserUrl = `https://example.com`;

  return (
    <ThemeProvider theme={theme}>
        <Layout categories={categories.data}>

        <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={imageUrl}
            data-srcset={imageUrl}
            data-uk-img
        >
            <h1>{article.attributes.title}</h1>
        </div>
        <div className="uk-section">
            <div className="uk-container uk-container-small">
            <ReactMarkdown children={article.attributes.content} />
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                {article.attributes.author.data.attributes.picture && (
                    <img
                    src={getStrapiMedia(
                        article.attributes.author.data.attributes.picture
                    )}
                    alt={
                        article.attributes.author.data.attributes.picture.data
                        .attributes.alternativeText
                    }
                    style={{
                        position: "static",
                        borderRadius: "20%",
                        height: 60,
                    }}
                    />
                )}
                </div>
                <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                    By {article.attributes.author.data.attributes.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">
                    {article.attributes.published_at}
                    </Moment>
                </p>
                </div>
            </div>
            </div>
            <div style={{marginTop:50}}>
              <FacebookShareButton
                url={`${baserUrl}/${router.asPath}`}     //eg. https://www.example.com
                quotes={"Eo"}  //"Your Quotes"
                hashtag={"#4eoeo"} // #hashTag
              >
                <FacebookIcon />
              </FacebookShareButton>    
              <TwitterShareButton
                url={`${baserUrl}/${router.asPath}`}     //eg. https://www.example.com
                quotes={"Eo"}  //"Your Quotes"
                hashtag={"#4eoeo"} // #hashTag
              >
                <TwitterIcon />
              </TwitterShareButton>    
              <LinkedinShareButton
                url={`${baserUrl}/${router.asPath}`}     //eg. https://www.example.com
                quotes={"Eo"}  //"Your Quotes"
                hashtag={"#4eoeo"} // #hashTag
              >
                <LinkedinIcon />
              </LinkedinShareButton>    
            </div>
        </div>
        </Layout>
    </ThemeProvider>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Conference;