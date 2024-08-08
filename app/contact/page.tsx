import {
  IconEmailOutline,
  IconLocationOutline,
  IconPhone,
} from "@/components/icons";
import MessageForm from "@/components/messageForm";
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
          <MessageForm></MessageForm>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
