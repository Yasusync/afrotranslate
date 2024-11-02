const { translate, detectLanguage } = require('../src/translate');

test('Translate text to Amharic', async () => {
  const result = await translate("Hello, how are you?", "am");
  expect(result).toHaveProperty('detectedLanguage', "English");
  expect(result).toHaveProperty('translatedText');
});

test('Detect language of given text', async () => {
  const language = await detectLanguage("Bonjour");
  expect(language).toBe("French");
});

test('Handle empty text for detection', async () => {
  const language = await detectLanguage("");
  expect(language).toBe("Oops: string is empty!");
});
