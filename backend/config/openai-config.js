const OpenAI = require("openai");

exports.openai = () => {
  const config = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORAGANIZATION_ID,
  });
  return config;
};
