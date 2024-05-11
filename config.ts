import { Config } from "./src/config";

const baseUrl = "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest";
const prefix = "";

export const defaultConfig: Config = {
  url: `${baseUrl}${prefix}`,
  match: `${baseUrl}${prefix}**`,
  maxPagesToCrawl: 10000,
  outputFileName: "aws.json",
  maxTokens: 2000000,
};
