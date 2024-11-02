# AfroTranslate

**AfroTranslate** is a lightweight language translation and detection package focused on Ethiopian languages, enabling translations from any language to <span style="color:#2596be">**Amharic**</span>, <span style="color:#33A1FF">**Tigrinya**</span>, <span style="color:#FF33A8">**Oromo**</span>, and more. With built-in language detection, it helps bridge communication by supporting diverse Ethiopian languages in a simple, efficient way.


## Installation

To install the package, you can use npm:

```bash
npm install afrotranslate

```
## Importing the Package

You can import the package in your JavaScript project as follows:

```javascript

const { translate, detectLanguage } = require('afrotranslate');

```

## Usage

Here’s how to use the translate and detectLanguage functions:

### Translate Function

```javascript

const translationResult = await translate("Hello, world!", "am");
console.log("Translation:", translationResult.translatedText);
Detect Language Function
javascript
Copy code
const detectedLanguage = await detectLanguage("Bonjour");
console.log("Detected Language:", detectedLanguage);

```

## Example

Here’s a full example that demonstrates how to use the AfroTranslate package:

```javascript

const { translate, detectLanguage } = require('afrotranslate');

async function runExample() {
    try {
        // Translate to Amharic
        const translationResult = await translate(
            "We cannot solve problems with the kind of thinking we employed when we came up with them.",
            "am"
        );
        console.log("Detected Language:", translationResult.detectedLanguage);
        console.log("Translation:", translationResult.translatedText);

        // Detect language
        const detectedLanguage = await detectLanguage("Bonjour");
        console.log("Detected Language from Bonjour:", detectedLanguage);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Run the example function
runExample();


```
## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Check the issues for any open tasks or feature requests. Feel free to submit a pull request for improvements or new features.

## GitHub Repository

Find the source code and more information on GitHub.