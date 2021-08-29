// @flow strict
import React from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { withPrefix, Link } from "gatsby";
import type { Edges } from "../../types";
import styles from "./Feed.module.scss";

type Props = {
  edges: Edges,
};

const rank = (edge) => {
  return edge.node.frontmatter.end_year * 12 + edge.node.frontmatter.end_month;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Feed = ({ edges }: Props) => {
  const present_edges = edges
    .filter((e) => e.node.frontmatter.end_year === 0)
    .sort((e1, e2) => {
      if(e1.node.frontmatter.end_month < e2.node.frontmatter.end_month) return 1
      return -1
    })
    .map((e) => ({
      ...e,
      time: "in progress 🚧",
    }))

  const old_edges = edges
    .filter((e) => e.node.frontmatter.end_year !== 0)
    .sort((e1, e2) => {
      if(rank(e1) < rank(e2)) return 1
      return -1
    })
    .map((e) => ({
      ...e,
      time: `${months[e.node.frontmatter.end_month - 1]} ${
        e.node.frontmatter.end_year
      }`,
    }));

  const all_edges = present_edges.concat(old_edges);

  return (
    <div className={styles["feed"]}>
      {all_edges.map((edge) => (
        <div className={styles["feed__item"]} key={edge.node.fields.slug}>
          <div className={styles["item"]}>
            <div>
              <div className={styles["feed__item-meta"]}>
                <time className={styles["feed__item-meta-time"]}>
                  {edge.time}
                </time>
                <span className={styles["feed__item-meta-divider"]} />
                <span className={styles["feed__item-meta-category"]}>
                  <Link
                    to={edge.node.fields.categorySlug}
                    className={styles["feed__item-meta-category-link"]}
                  >
                    {edge.node.frontmatter.category}
                  </Link>
                </span>
              </div>
              <h2 className={styles["feed__item-title"]}>
                {edge.node.frontmatter.title}
              </h2>
            </div>
            <Zoom>
              <img
                src={withPrefix(edge.node.frontmatter.socialImage?.publicURL)}
                className={styles["image"]}
              />
            </Zoom>
          </div>
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
