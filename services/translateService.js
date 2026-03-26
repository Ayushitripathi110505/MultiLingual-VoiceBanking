import { Translate } from "@google-cloud/translate";

const translate = new Translate();

export const translateText = async (text, targetLang) => {
  const [translation] = await translate.translate(text, targetLang);
  return translation;
};