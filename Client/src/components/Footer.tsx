import Logo from "@/assets/logo.png";import Logo from "@/assets/logo.png";import Logo from "@/assets/logo.png";



export default function Footer() {

  return (

    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-white dark:bg-[#1a1918]">export default function Footer() {export default function Footer() {

      {/* Main Footer Content */}

      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">  return (  return (

        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">

          {/* Brand Section */}    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-white dark:bg-[#1a1918]">    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-white dark:bg-[#1a1918]">

          <div className="flex justify-start items-center gap-3">

            <img src={Logo} alt="Concise Logo" className="w-24 object-contain" />      {/* Main Footer Content */}      {/* Main Footer Content */}

          </div>

          <div className="text-[rgba(73,66,61,0.90)] dark:text-[rgba(224,222,219,0.80)] text-sm font-medium leading-[18px]">      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">

            AI-powered summarization for smarter reading

          </div>        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">



          {/* Social Media Icons */}          {/* Brand Section */}          {/* Brand Section */}

          <div className="flex justify-start items-start gap-4">

            <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">          <div className="flex justify-start items-center gap-3">          <div className="flex justify-start items-center gap-3">

              <svg className="w-full h-full text-[#49423D] dark:text-[#E0DEDB]" viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z" />            <img            <img

              </svg>

            </a>              src={Logo}              src={Logo}

          </div>

        </div>              alt="Concise Logo"              alt="Concise Logo"



        {/* Navigation Links */}              className="w-24 object-contain"              className="w-24 object-contain"

        <div className="p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">            />            />

            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Product</div>

            <div className="flex flex-col justify-end items-start gap-2">          </div>          </div>

              <a href="#demo" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">Try Demo</a>

              <a href="#features" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">Features</a>          <div className="text-[rgba(73,66,61,0.90)] dark:text-[rgba(224,222,219,0.80)] text-sm font-medium leading-[18px]">          <div className="text-[rgba(73,66,61,0.90)] dark:text-[rgba(224,222,219,0.80)] text-sm font-medium leading-[18px]">

              <a href="#how-it-works" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">How It Works</a>

            </div>            AI-powered summarization for smarter reading            AI-powered summarization for smarter reading

          </div>

          </div>          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">

            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Company</div>

            <div className="flex flex-col justify-center items-start gap-2">

              <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">GitHub</a>          {/* Social Media Icons */}          {/* Social Media Icons */}

            </div>

          </div>          <div className="flex justify-start items-start gap-4">          <div className="flex justify-start items-start gap-4">

        </div>

      </div>            {/* Twitter/X Icon */}            {/* Twitter/X Icon */}



      {/* Bottom Section with Pattern */}            <a href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">            <a href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">

      <div className="w-full h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">

        <div className="absolute inset-0 w-full h-full overflow-hidden">              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">

          <div className="w-full h-full relative">

            {Array.from({ length: 400 }).map((_, i) => (                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <div

                key={i}                  <path                  <path

                className="absolute w-[300px] h-16 border border-[rgba(89,70,60,0.08)] dark:border-[rgba(255,255,255,0.04)]"

                style={{                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"

                  left: `${i * 300 - 600}px`,

                  top: "-120px",                    fill="currentColor"                    fill="currentColor"

                  transform: "rotate(-45deg)",

                  transformOrigin: "top left",                    className="text-[#49423D] dark:text-[#E0DEDB]"                    className="text-[#49423D] dark:text-[#E0DEDB]"

                }}

              />                  />                  />

            ))}

          </div>                </svg>                </svg>

        </div>

      </div>              </div>              </div>

    </footer>

  );            </a>            </a>

}



            {/* LinkedIn Icon */}            {/* LinkedIn Icon */}

            <a href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">            <a href="#" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">

              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path                  <path

                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"

                    fill="currentColor"                    fill="currentColor"

                    className="text-[#49423D] dark:text-[#E0DEDB]"                    className="text-[#49423D] dark:text-[#E0DEDB]"

                  />                  />

                </svg>                </svg>

              </div>              </div>

            </a>            </a>



            {/* GitHub Icon */}            {/* GitHub Icon */}

            <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">            <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">

              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path                  <path

                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z"                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z"

                    fill="currentColor"                    fill="currentColor"

                    className="text-[#49423D] dark:text-[#E0DEDB]"                    className="text-[#49423D] dark:text-[#E0DEDB]"

                  />                  />

                </svg>                </svg>

              </div>              </div>

            </a>            </a>

          </div>          </div>

        </div>        </div>



        {/* Navigation Links */}        {/* Navigation Links */}

        <div className="p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">        <div className="p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">

          {/* Product Column */}          {/* Product Column */}

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">

            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">

              Product              Product

            </div>            </div>

            <div className="flex flex-col justify-end items-start gap-2">            <div className="flex flex-col justify-end items-start gap-2">

              <a href="#demo" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#demo" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Try Demo                Try Demo

              </a>              </a>

              <a href="#features" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#features" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Features                Features

              </a>              </a>

              <a href="#how-it-works" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#how-it-works" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                How It Works                How It Works

              </a>              </a>

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Extension                Extension

              </a>              </a>

            </div>            </div>

          </div>          </div>



          {/* Company Column */}          {/* Company Column */}

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">

            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Company</div>            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Company</div>

            <div className="flex flex-col justify-center items-start gap-2">            <div className="flex flex-col justify-center items-start gap-2">

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                About Us                About Us

              </a>              </a>

              <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                GitHub                GitHub

              </a>              </a>

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Contact                Contact

              </a>              </a>

            </div>            </div>

          </div>          </div>



          {/* Support Column */}          {/* Support Column */}

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">

            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Support</div>            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Support</div>

            <div className="flex flex-col justify-center items-start gap-2">            <div className="flex flex-col justify-center items-center gap-2">

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <div className="self-stretch text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Documentation                Documentation

              </a>              </div>

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <div className="self-stretch text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                API                API

              </a>              </div>

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <div className="self-stretch text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                Privacy Policy                Privacy Policy

              </a>              </div>

              <a href="#" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">              <div className="self-stretch text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">

                FAQ                FAQ

              </a>              </div>

            </div>            </div>

          </div>          </div>

        </div>        </div>

      </div>      </div>



      {/* Bottom Section with Pattern */}      {/* Bottom Section with Pattern */}

      <div className="w-full h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">      <div className="w-full h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">

        <div className="absolute inset-0 w-full h-full overflow-hidden">        <div className="absolute inset-0 w-full h-full overflow-hidden">

          <div className="w-full h-full relative">          <div className="w-full h-full relative">

            {Array.from({ length: 400 }).map((_, i) => (            {Array.from({ length: 400 }).map((_, i) => (

              <div              <div

                key={i}                key={i}

                className="absolute w-[300px] h-16 border border-[rgba(89,70,60,0.08)] dark:border-[rgba(255,255,255,0.04)]"                className="absolute w-[300px] h-16 border border-[rgba(89,70,60,0.08)] dark:border-[rgba(255,255,255,0.04)]"

                style={{                style={{

                  left: `${i * 300 - 600}px`,                  left: `${i * 300 - 600}px`,

                  top: "-120px",                  top: "-120px",

                  transform: "rotate(-45deg)",                  transform: "rotate(-45deg)",

                  transformOrigin: "top left",                  transformOrigin: "top left",

                }}                }}

              />              />

            ))}            ))}

          </div>          </div>

        </div>        </div>

      </div>      </div>

    </footer>    </footer>

  );  );

}}

                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Connect
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://github.com/Leonardo1903/Concise",
                    "_blank"
                  )
                }
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://chrome.google.com/webstore", "_blank")
                }
              >
                <Chrome className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 pt-4">
              Free and open source.
              <br />
              Built with ❤️ for better reading.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <p>© 2025 Concise. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
