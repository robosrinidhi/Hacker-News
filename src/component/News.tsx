import React, { useEffect, useState } from "react";
import { fetchTopNewsId } from "../utils/api";
import NewsItem from "./NewsItem";
import styles from "../styles/News.module.css";
import { pipe } from "fp-ts/lib/function";
import * as Either from "fp-ts/lib/Either";
const News = () => {
  const [topNewsId, setTopNewsId] = useState([] as number[]);

  useEffect(() => {
    fetchTopNewsId()
      .then((e) =>
        pipe(
          e,
          Either.getOrElse(() => {
            return [] as number[];
          })
        )
      )
      .then(setTopNewsId);
  }, []);
  // console.log(topNewsId);
  return (
    <div className={styles.newsCon}>
      <div className={styles.news}>
        {topNewsId.map((newsId, index) => (
          <NewsItem key={newsId} id={newsId} index={index} />
        ))}
      </div>
    </div>
  );
};

export default News;
