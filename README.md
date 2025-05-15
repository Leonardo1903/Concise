# Concise  
A web application to summarize articles by providing a URL.

---

## Features

- Summarize articles by entering a URL.
- Save summarized articles locally in the browser.
- Copy URLs and summaries to the clipboard.
- Responsive design for mobile and desktop devices.

---

## Tech Stack

**Client**: React, TailwindCSS, Lucide React  
**Server**: RapidAPI (Article Extractor and Summarizer API)

---

## Key Learnings

- Building a responsive web application with React and TailwindCSS.
- Using Redux Toolkit Query for fetching and caching API data efficiently.
- Using RapidAPI for article extraction and summarization.


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

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm run dev
```

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

---

## Demo

[Live Demo](https://concise.vercel.app/)

---

## License

MIT