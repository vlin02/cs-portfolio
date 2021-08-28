// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata, useCategoriesList } from "../hooks";
import Header from "../components/Header";

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <>
      <Header />
      <Layout title={`Categories - ${title}`} description={subtitle}>
        <Sidebar isIndex />
        <Page title="Categories">
          <ul>
            {categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Page>
      </Layout>
    </>
  );
};

export default CategoriesListTemplate;
