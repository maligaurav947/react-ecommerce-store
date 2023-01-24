import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" class="flex items-center mb-4 sm:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3649/3649281.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            React Ecommerce Store
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://maligaurav947.github.io/Portfolio/"
              class="mr-4 hover:underline md:mr-6 "
            >
              About ME
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <Link>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </Link>
          </li>
          <li>
            <Link className="mr-4 hover:underline md:mr-6" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://github.com/maligaurav947"
          target={"_blank"}
          class="hover:underline"
        >
          GABBAR
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
