import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
 
  let response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.input,
    max_tokens: 300,
    temperature: 0,
  });
  let output=response.data.choices[0].text
   res.status(200).json({"output":output})
  
};

export default generateAction;
