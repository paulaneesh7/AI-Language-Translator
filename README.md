## PolyConverse

PolyConverse is a cutting-edge AI-based language translation application designed to bridge the gap between different languages, fostering seamless communication across the globe. Whether you're traveling, conducting business, or simply exploring new cultures, PolyConverse empowers you to effortlessly translate text from one language to another, based on your choice, ensuring you never miss out on meaningful interactions.


## Tech Stack 🚀
- Nextjs (Frontend & Backend)
- Tailwind CSS (Styling)
- Google Gemini API (Translation)
- Vercel (Deployment)

## Features
- Translate text from one language to another.
- Supports major languages **(with more incoming in future updates)**.
- Voice input for easy translation.
- Text to Speech translation for both the source and target texts.
- File upload for translation. **(soon)**
- Copy translated text to clipboard.
- More features soon...

## Getting Started 🛠️

First, clone the repository:

```
git clone https://github.com/paulaneesh7/AI-Language-Translator.git
```

Next, install the dependencies:

```
npm install
```

Before running the development server, you need to create a `.env` file in the root directory and add the following environment variables:

```
GOOGLE_GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
```

Finally, run the development server:

```
npm run dev
```

## Endpoint
We only have one endpoint `/api/translate` which is a POST request that accepts the sourceText and targetLanguage as the request body and returns the translated text.

## Contribution 🤝
PolyConverse is an open-source project and we welcome contributions from the community. If you have any feature requests, bug reports, or suggestions, feel free to raise an issue or submit a pull request.