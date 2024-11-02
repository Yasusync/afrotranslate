const axios = require('axios');
const langData = require('./lang.json');

const HEADER = {
  'User-Agent': 'AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept-Encoding': 'gzip, deflate'
};

const URL = "https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=es-ES&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e";

// Helper function to get the language name from code
function getLanguageName(code) {
  const lang = langData.find(lang => lang.code === code);
  return lang ? lang.name : code;
}

// Function to send API request
async function sendApiRequest(data) {
  try {
    const response = await axios.post(URL, new URLSearchParams(data), { headers: HEADER });
    return response.data;
  } catch (error) {
    if (error.response) {
      return `HTTP Error: ${error.response.status}`;
    } else if (error.request) {
      return "Error Connecting";
    } else {
      return `Request Error: ${error.message}`;
    }
  }
}

// Translation function
async function translate(text, target = "en", source = "auto") {
  if (!text.trim()) return "Oops: string is empty!";
  
  const data = { sl: source, tl: target, q: text };
  const result = await sendApiRequest(data);

  if (typeof result === 'string') return result;

  const detectedLanguage = getLanguageName(result.src);
  const translatedText = result.sentences.map(sentence => sentence.trans).join("");
  
  return {
    detectedLanguage: detectedLanguage,
    translatedText: translatedText
  };
}

// Language detection function
async function detectLanguage(text) {
  if (!text.trim()) return "Oops: string is empty!";
  
  const data = { sl: 'auto', q: text };
  const result = await sendApiRequest(data);

  if (typeof result === 'string') return result;

  return getLanguageName(result.src);
}

module.exports = { translate, detectLanguage };
