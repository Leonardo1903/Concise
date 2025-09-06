# Concise

<div align="center">

**A web application and Chrome extension to summarize any article with a single click.**

Tired of information overload? Concise streamlines your reading by extracting the key points from lengthy articles, making content consumption faster and more efficient. Provide a URL and get a summary in seconds.

<p>
  <img src="https://img.shields.io/github/last-commit/leonardo1903/concise?style=for-the-badge" alt="last commit">
  <img src="https://img.shields.io/github/stars/leonardo1903/concise?style=for-the-badge" alt="stars">
</p>

[**Live Demo**](https://concise.leonardo1903.me/)

</div>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d89bf135-6935-41d7-8704-318a92b99524" alt="Concise App Demo" width="80%">
</p>

---

## 🚀 Core Features

-   **🔗 Instant Summaries**: Just provide a URL to get a concise summary of any online article.
-   **💾 Local History**: Save summarized articles directly in your browser for future reference.
-   **📋 Easy Sharing**: Copy URLs and their summaries to the clipboard with one click.
-   **📱 Fully Responsive**: A seamless experience on both mobile and desktop devices.
-   **🧩 Chrome Extension**: Summarize your current webpage directly from your browser's toolbar for ultimate convenience.

## 🛠️ Tech Stack

| Category    | Technologies                                                                                           |
| :---------- | :----------------------------------------------------------------------------------------------------- |
| **Client** | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white) ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white) ![Lucide](https://img.shields.io/badge/-Lucide-444?logo=lucide) |
| **Extension**| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white) `Manifest V3` |
| **Server** | ![RapidAPI](https://img.shields.io/badge/-RapidAPI-3B3279?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjEuNDM2IDEwLjg2N2MtMS4xMy0uMjY1LTEuNTM1LS40NDQtMS41MzUtMS4xNzdjMC0uNDk5LjQyMi0uOTIzIDEuNDQ2LS45MjNjLjgyMSAwIDEuODEyLjE0IDEuODEyIDEuMzkyYzAgLjU1NS0uMzg3Ljc5My0xLjAwNS45ODJsMS4xOTggMS45OTNoLTIuMDQ4bC0uOTc0LTEuNzM3Yy0uNDQ0LjA1Ni0xLjI1NS4xMTItMi4wMS4xMTJjLTIuNzYzIDAgNC4yMy0xLjU5IDQuMjMtMy45MzZjMC0yLjE4OC0xLjgxMS0zLjU4Mi00LjQ0LTMy4zMzRsMTMuMzg2IDMuNTEzbC0xLjY0NyAyLjc0OGMtMS4zMDQuMjI0LTEuODEyLjQ3Mi0xLjgxMiAxLjI4YzAgLjcxOC42MTUgMS4wMzYgMS41MzQgMS4wMzZjMS4yMjIgMCAxLjgxMi0uNDcgMS44MTItMS42NDdjMC0uODI0LS4zMzItMS4yMjQtLjk0OC0xLjQ0N2wxLjA5MS0yLjEwMWgtMy43MDZsLTEuMDM2IDEuOTM3Yy0uNzAxLjE0LTEuNDQ2LjIxLTEuOTk0LjIxYy0xLjgxMiAwLTMuMTg3LS45Mi0zLjE4Ny0yLjQzM2MwLTEuNTEgMS4xOTYtMi41NDUgMy4zMjUtMi41NDVjMS4wMzYgMCAyLjE1OC4yMjMgMi44NDggMS4yNTNsMS4wMzYtMS42NDdDNy40OCAyLjM0OCA1Ljc2MiAxLjUgMy4zMyAxLjVDMS4yNDIgMS41IDAgMi44MzIgMCA1LjEyNGMwIDIuOTY0IDIuMTEzIDQuMzUxIDUuNDQyIDQuMzUxYzEuMjkxIDAgMS45OTQtLjE2OCAyLjUzOC0uMjUxbC45NDggMS44MTFoMy40OTlsLTEuNDczLTIuMzQ5YzEuMTQzLS4zMzUgMS45OTQtLjgyMSAyLjM0OS0xLjU2M2wxLjk5MyAzLjM1MSIvPjwvc3ZnPg==) (Article Extractor & Summarizer API) |

## 📸 Screenshots

| Summary Dashboard                                                                                                         | Chrome Extension Popup                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/d89bf135-6935-41d7-8704-318a92b99524" alt="Summary Dashboard Screenshot"> | <img src="https://github.com/user-attachments/assets/a1e0c01a-5e4b-481b-baab-2572f85dd9d6" alt="Extension Popup Screenshot"> |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A [RapidAPI](https://rapidapi.com/hub) account to get an API key.

### Environment Variables

Before you begin, you need to set up your environment variables.

1.  Obtain your API key from the [Article Extractor and Summarizer API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) page on RapidAPI.
2.  In **both** the `Main` and `Extension` folders, create a file named `.env`.
3.  Add the following line to each `.env` file:

    ```env
    VITE_RAPID_API_KEY=your_rapid_api_key
    ```

### Local Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/concise.git](https://github.com/your-username/concise.git)
    cd concise
    ```

2.  **Set up the Web Application and Chrome Extension:**

<details>
<summary><strong>🌐 Web App Setup (Main folder)</strong></summary>

1.  Navigate to the web app directory:
    ```bash
    cd Main
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:5173](http://localhost:5173) (or the URL provided) in your browser.

</details>

<details>
<summary><strong>🧩 Chrome Extension Setup (Extension folder)</strong></summary>

1.  Navigate to the extension directory (from the root `concise` folder):
    ```bash
    cd Extension
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development build with hot-reloading:
    ```bash
    npm run dev
    ```
    This will create a `dist` folder that updates automatically as you make changes.

4.  **Load the extension in Chrome:**
    -   Open Chrome and navigate to `chrome://extensions/`.
    -   Enable **Developer mode** using the toggle in the top-right corner.
    -   Click the **"Load unpacked"** button.
    -   Select the `concise/Extension/dist` folder.
    -   Pin the "Concise" extension to your toolbar for easy access!

</details>

## 🌟 Key Learnings

This project was a great opportunity to deepen my skills in:

-   Building modern, responsive web applications with **React** and **TailwindCSS**.
-   Managing complex state and efficient API data fetching with **Redux Toolkit Query**.
-   Integrating and managing third-party APIs like **RapidAPI**.
-   Developing **Chrome Extensions** from scratch using React, Vite, and Manifest V3.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvement or want to fix a bug, please feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
