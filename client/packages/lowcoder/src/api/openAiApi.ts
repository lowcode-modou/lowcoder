import axios, { AxiosResponse } from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3008",
  timeout: 60 * 1000,
});

export class OpenAiApi {
  static generateSQL({
    query,
    openAIApiKey,
  }: {
    query: string;
    openAIApiKey: string;
  }): Promise<AxiosResponse<{ text: string }>> {
    return instance.post("/low-code/generate-sql", { query, openAIApiKey });
  }
}
