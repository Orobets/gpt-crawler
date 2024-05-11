import { Config } from "./src/config";

const baseUrl = "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/";
const prefix = "client/kendra-ranking/";

export const defaultConfig: Config = {
  url: `${baseUrl}${prefix}`,
  match: `${baseUrl}${prefix}**`,
  maxPagesToCrawl: 10000,
  outputFileName: prefix.split("/").reverse().join("-") + ".json",
  maxTokens: 2000000,
};
