import React, { useEffect, useState } from "react";
import { NewsItemProps, News } from "../types";
import styles from "../styles/NewsItem.module.css";
import { fetchNews } from "../utils/api";
import { pipe } from "fp-ts/lib/function";
import * as Either from "fp-ts/lib/Either";

const NewsItem = ({ id, index }: NewsItemProps) => {
  const [news, setNews] = useState({} as News);

  useEffect(() => {
    fetchNews(id)
      .then((e) =>
        pipe(
          e,
          Either.getOrElse(() => {
            return {} as News;
          })
        )
      )
      .then(setNews);
  }, [id]);

  return (
    <div className={styles.newsCon}>
      <div>
        <a
          className={styles.tag}
          href={
            news.url ? news.url : `https://news.ycombinator.com/item?id=${id}`
          }
          target="_blank"
          rel="noreferrer"
        >
          {index + 1}. {news.title}
        </a>
      </div>
      <div>
        <span>
          {news.score} points by {news.by}
        </span>
        <span> | </span>

        <span>
          <a
            className={styles.tag}
            href={`https://news.ycombinator.com/item?id=${id}`}
            target="_blank"
            rel="noreferrer"
          >
            comments
          </a>
        </span>
      </div>
    </div>
  );
};

export default NewsItem;
