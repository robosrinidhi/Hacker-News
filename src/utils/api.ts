import axios from "axios";
import { BASE_API_URL } from "../constants";
import { News } from "../types";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";

export const fetchTopNewsId = async () => {
  return await pipe(
    TE.tryCatch(
      () => axios.get<number[]>(`${BASE_API_URL}/topstories.json`),
      (reason) => new Error(`${reason}`)
    ),
    TE.map((response) => response.data)
  )();
};

export const fetchNews = async (id: number) => {
  return await pipe(
    TE.tryCatch(
      () => axios.get<News>(`${BASE_API_URL}/item/${id}.json`),
      (response) => new Error(`${response}`)
    ),
    TE.map((response) => response.data)
  )();
};
