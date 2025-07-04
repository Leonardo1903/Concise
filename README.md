# Concise 
A web application and Chrome extension designed to help users quickly summarize articles by providing a URL. It streamlines the process of extracting key information from lengthy articles, making content consumption more efficient and accessible. 

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

- Building responsive web applications with React and TailwindCSS.
- Efficient API data fetching and caching with Redux Toolkit Query.
- Integrating third-party APIs (RapidAPI) for content extraction and summarization.
- Developing Chrome Extensions with React, Vite, and TailwindCSS.

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
**Summary Dashboard**:  
![Summary Dashboard](https://github.com/user-attachments/assets/d89bf135-6935-41d7-8704-318a92b99524)


**Chrome Extension Popup**:  
![Extension Popup](https://github.com/user-attachments/assets/a1e0c01a-5e4b-481b-baab-2572f85dd9d6)



---

## Demo

[Live Demo](https://concise.leonardo1903.me/)

---

## License

MIT
