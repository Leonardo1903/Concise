import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start bg-white dark:bg-[#1a1918]">

      {/* Main Footer Content */}

      {/* Main Footer Content */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="flex justify-start items-center gap-3">
            <img src={Logo} alt="Concise Logo" className="w-24 object-contain" />
          </div>
          <div className="text-[rgba(73,66,61,0.90)] dark:text-[rgba(224,222,219,0.80)] text-sm font-medium leading-[18px]">
            AI-powered summarization for smarter reading
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">
              <svg className="w-full h-full text-[#49423D] dark:text-[#E0DEDB]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Product</div>
            <div className="flex flex-col justify-end items-start gap-2">
              <a href="#demo" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">Try Demo</a>
              <a href="#features" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">How It Works</a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] dark:text-[rgba(224,222,219,0.50)] text-sm font-medium leading-5">Company</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <a href="https://github.com/Leonardo1903/Concise" target="_blank" rel="noopener noreferrer" className="text-[#49423D] dark:text-[#E0DEDB] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] dark:hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="w-full h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(89,70,60,0.08)] dark:border-[rgba(255,255,255,0.04)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
