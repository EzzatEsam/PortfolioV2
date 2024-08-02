import {
  IconEmailOutline,
  IconLocationOutline,
  IconPhone,
} from "@/components/icons";
import { MyData } from "@/data/data";
import React from "react";

const ContactsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
        Contact Me
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            My Information
          </h2>
          <div className="flex items-center space-x-4">
            <IconEmailOutline></IconEmailOutline>
            <p className="text-gray-700 dark:text-gray-300">
              {MyData.links.myEmail}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <IconPhone></IconPhone>
            <p className="text-gray-700 dark:text-gray-300">{MyData.myPhone}</p>
          </div>
          <div className="flex items-center space-x-4">
            <IconLocationOutline></IconLocationOutline>
            <p className="text-gray-700 dark:text-gray-300">{MyData.myAddr}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Send me a Message
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
