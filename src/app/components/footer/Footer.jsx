import React from "react";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-300 to-blue-300"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-rose-200 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-orange-200 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      <footer className="relative footer sm:footer-horizontal text-slate-800 p-12 z-10">
        <aside className="group">
          {/* Enhanced Logo with hover effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative size-20 text-slate-800 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>

          {/* Enhanced text with better typography */}
          <div className="space-y-2 max-w-md">
            <p className="font-bold text-lg bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              © Nakprasith School Wat Bangchangnua Foundation
            </p>
            <p className="font-semibold text-base opacity-90">
              © Nakprasith Business Administration Technological College
            </p>
            <p className="text-sm opacity-80 italic">Main Site at NBAC</p>
            <div className="mt-4 p-3 bg-white/30 rounded-lg backdrop-blur-sm border border-white/40">
              <p className="text-sm font-medium">
                🚀 Power & Develop By :{" "}
                <span className="font-bold text-slate-900">Thanapon</span>
              </p>
            </div>
          </div>
        </aside>

        <nav className="space-y-6">
          <h6 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Connect With Us
          </h6>

          {/* Enhanced social icons with hover effects */}
          <div className="flex gap-6">
            {/* Twitter */}
            <a className="group relative p-3 bg-white/40 rounded-xl backdrop-blur-sm border border-white/50 hover:bg-blue-500 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="relative fill-current text-slate-800 group-hover:text-white transition-colors duration-300"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>

            {/* tiktok */}
            <a className="group relative p-3 bg-white/40 rounded-xl backdrop-blur-sm border border-white/50 hover:bg-red-500 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              className="w-6 h-6 relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a className="group relative p-3 bg-white/40 rounded-xl backdrop-blur-sm border border-white/50 hover:bg-blue-600 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="relative fill-current text-slate-800 group-hover:text-white transition-colors duration-300"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>

          {/* Additional interactive element */}
          <div className="mt-6 p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/60 transition-all duration-300">
            <p className="text-sm font-medium text-slate-800">
              🌟 Follow us for latest updates and educational content!
            </p>
          </div>
        </nav>
      </footer>

      {/* Bottom gradient border */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-orange-500"></div>
    </div>
  );
};

export default Footer;
