import { Translate } from "@google-cloud/translate/build/src/v2/index.js";

const translate = new Translate();

export const translateText = async (text, targetLang) => {
  try {
    const [translation] = await translate.translate(text, targetLang);
    return translation;
  } catch (err) {
    console.error("Translation Error:", err);
    return text; // fallback
  }
};