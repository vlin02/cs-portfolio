// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import { useSiteMetadata } from "../hooks";
import Header from "../components/Header";

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <>
      <Header />
      <Layout title={pageTitle} description={siteSubtitle}>
        <Sidebar isIndex />
        <Page>
          <Feed edges={edges} />
        </Page>
      </Layout>
    </>
  );
};

export const query = graphql`
  query IndexTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            end_month
            end_year
            tags
            category
            socialImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
