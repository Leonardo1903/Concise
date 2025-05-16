# Concise 
A web application and Chrome extension designed to summarize articles by providing a URL. Concise simplifies the process of extracting key information from lengthy articles, making it easier for users to consume content efficiently.

---

## Features

- Summarize articles by entering a URL.
- Save summarized articles locally in the browser.
- Copy URLs and summaries to the clipboard.
- Responsive design for mobile and desktop devices.
- Chrome Extension: Summarize the current page directly from your browser.

---

## Tech Stack

**Client**: React, TailwindCSS, Lucide React  
**Extension**: Vite, React, TailwindCSS, Manifest V3  
**Server**: RapidAPI (Article Extractor and Summarizer API)

---

## Key Learnings

- Building a responsive web application with React and TailwindCSS.
- Using Redux Toolkit Query for fetching and caching API data efficiently.
- Using RapidAPI for article extraction and summarization.
- Creating a Chrome Extension with Vite, React, and TailwindCSS.

---

## Run Locally

### Clone the project

```bash
git clone https://github.com/your-username/concise.git
```

### Go to the project directory

```bash
cd concise
```

## Web App Setup
The Web app is located in the `Main` folder.
### Install dependencies

```bash
cd Main
npm install
```

### Start the server

```bash
npm run dev
```

---

## Chrome Extension Setup

The Chrome extension is located in the `Extension` folder.

### 1. Install Extension Dependencies

```bash
cd Extension
npm install
```

### 2. Start Development (Hot Reload)

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `Extension/dist` folder

### 5. Usage

- Click the Concise extension icon in your browser.
- Click "Summarize This Page" to open the summarizer with the current tab's URL.

---

## Environment Variables

To run this project, you will need to add the following environment variable to your `.env` file:

```env
VITE_RAPID_API_KEY=your_rapid_api_key
```

---

## Screenshots

**Landing Page**:  
![Landing Page](#)  

**Summary Dashboard**:  
![Summary Dashboard](#)

**Chrome Extension Popup**:  
![Extension Popup](#)

---

## Demo

[Live Demo](https://concise-iota.vercel.app/)

---

## License

MIT