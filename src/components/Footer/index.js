
import React  from "react";


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Certainly! Here's a sentence for an e-commerce context: "Discover
            unique retro-themed adaptogen supplements available for purchase,
            along with stylish air plant holders, exclusively on Indego -
            perfect for your next banjo-inspired Lyft shopping spree."
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a  href="https://www.flipkart.com/helpcentre?otracker=${otracker}_navlinks" target="_blank"
                 className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a href="https://www.flipkartcareers.com/?otracker=undefined_footer_navlinks#!/" target="_blank" className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a href="https://stories.flipkart.com/?otracker=undefined_footer_navlinks" target="_blank" className="text-gray-600 hover:text-gray-800">Stories</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/corporate-information" target="_blank" className="text-gray-600 hover:text-gray-800">Corporate Information</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              GROUP COMPANIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://www.myntra.com/" target="_blank" className="text-gray-600 hover:text-gray-800">Myntra</a>
              </li>
              <li>
                <a href="https://www.cleartrip.com/" target="_blank" className="text-gray-600 hover:text-gray-800">Cleartrip</a>
              </li>
              <li>
                <a href="https://www.shopsy.in/" target="_blank" className="text-gray-600 hover:text-gray-800">Shospy</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HELP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://www.flipkart.com/pages/payments" target="_blank" className="text-gray-600 hover:text-gray-800">Payments</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/pages/shipping" target="_blank" className="text-gray-600 hover:text-gray-800">Shipping</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" target="_blank" className="text-gray-600 hover:text-gray-800">Cancellation & Returns</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" target="_blank" className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CUSTOMER POLICY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://www.flipkart.com/pages/terms?otracker=undefined_footer_navlinks" target="_blank" className="text-gray-600 hover:text-gray-800">Terms Of Use</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/pages/paymentsecurity?otracker=undefined_footer_navlinks" target="_blank" className="text-gray-600 hover:text-gray-800">Security</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/pages/privacypolicy?otracker=undefined_footer_navlinks" target="_blank" className="text-gray-600 hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a href="https://www.flipkart.com/sitemap?otracker=undefined_footer_navlinks" target="_blank" className="text-gray-600 hover:text-gray-800">Sitemap</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 ECommerce —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Dinesh
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://www.facebook.com/" target="_blank" className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://x.com/?lang=en" target="_blank"  className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F" target="_blank" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
