import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getAIResponse = async (text) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: text }],
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("OpenAI Error:", err);
    return "Sorry, something went wrong.";
  }
};