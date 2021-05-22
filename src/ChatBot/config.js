import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from "./LinkList";

import LearningOptions from './LearningOptions';

const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm an AirBus Employee. What do you want to know?", {widget: "learningOptions",})],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
        widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Welcome to AirBus",
              url:
                "https://www.airbus.com/",
              id: 1,
            },
            {
              text: "Commercial Aircraft",
              url:
                "https://www.airbus.com/aircraft.html",
              id: 2,
            },
            {
              text: "Helicopters",
              url: "https://www.airbus.com/helicopters.html",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "foundationLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "AirBus Foundation",
              url:
                "https://www.airbus.com/company/sustainability/airbus-foundation/discovery-space.html",
              id: 1,
            },
            {
              text: "Shopping at AirBus",
              url:
                "https://www.airbus-shop.com/en/",
              id: 2,
            },
            {
              text: "Career at AirBus",
              url: "https://www.airbus.com/careers.html",
              id: 3,
            },
          ],
        },
      },
],
}

export default config