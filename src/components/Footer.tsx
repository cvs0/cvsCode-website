"use client";

import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();

const sections = [
  {
    title: "Pages",
    items: [
      { name: "Home", href: "/" },
      { name: "Docs", href: "/docs" },
      { name: "Download", href: "/download" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Docs",
    items: [
      { name: "Getting Started", href: "/docs/getting-started" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Code Examples", href: "/docs/code-examples" },
      { name: "Syntax", href: "/docs/syntax" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Status", href: "https://status.cvscode.cvs0.xyz" },
      { name: "Packages", href: "https://packages.cvscode.cvs0.xyz" },
      { name: "cvs0", href: "https://cvs0.xyz" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Privacy", href: "/legal/privacy" },
      { name: "Terms", href: "/legal/terms" },
      { name: "Condition", href: "/legal/condition" },
    ],
  },
];

const items = [
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://www.discordapp.com/users/1147380185893716068",
  },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/cvs0_" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/cvs0_" },
  { name: "Github", icon: FaGithub, link: "https://github.com/cvs0" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubscribe(email: string) {
    console.log(email)
    try {
      emailSchema.parse(email);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess("Subscribed successfully");
        setError("");
      } else {
        const data = await res.json();
        setError(data.message || "Subscription failed");
        setSuccess("");
      }

    } catch (e) {
      setError("Invalid email");
      console.log("Invalid email");
    }
  }

  return (
    <div className="w-full mt-24 bg-accent/10 text-black dark:text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-black dark:text-gray-100 uppercase pt-2">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-black dark:text-gray-300 hover:text-blue-500 hover:underline hover:cursor-pointer"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <Input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="p-2 mb-4"
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                handleSubscribe(email);
              }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">&copy; 2024 CVSCode. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <a href={x.link} key={index}>
                <x.icon key={index} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
