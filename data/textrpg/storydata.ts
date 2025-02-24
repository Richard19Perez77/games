export interface StoryPage {
  id: string;
  text: string;
  choices: { text: string; nextId: string }[];
}

export const storyData = [
  {
    id: "start",
    text: "You wake up in a dark forest. The first thing you notice is you are wearing a light colored gown and are a girl. As you start to think 'what is this?', you hear a voice from inside speaking to you. 'What would you like to help you survive? A book, a tool, or an innate sense?'",
    choices: [
      { text: "A Book to read!", nextId: "book" },
      { text: "A Tool to use!", nextId: "tool" },
      { text: "An innate sense to have!", nextId: "sense" },
    ],
  },
  {
    id: "book",
    text: "You are given a book, it is a reference guide for staying alive. This could really be useful! You read the book, but only half the pages are written in it. In the last page with words it says... as you learn more you will get more information, but you must traverse the forest and experience life to learn more...",
    choices: [
      { text: "Start walking the forest...", nextId: "walking1" },
      { text: "Re-read the book...", nextId: "readbook0" },
      { text: "Go to sleep...", nextId: "sleep1" },
    ],
  },
  {
    id: "tool",
    text: "Excellent choice, man has used tools for millenia, this time instead of you having to make a common tool, I will give you a tool that can change your world and hone your own abilities. From gaining strength to learning how to solve complex problems, you can make creative use of this tool. You find this tool at your feet and it almost looks like scissors but instead of blades there is a jagged clamp and the handle reverses to a single hold, while the blades can join to form a single rod.",
    choices: [
      { text: "Practice using the tool around you", nextId: "toolpractice1" },
      { text: "Start walking the forest", nextId: "walking1" },
      { text: "Look around you", nextId: "look1" },
    ],
  },
  {
    id: "sense",
    text: "It's normal to see, hear and have senses, but I'll give you more than what you know. You will now have the good sense to understand at an innate level your surroundings. You will have an ability to know what's next or how to do things for your best chance at leaving the forest with life experiences that will carry you through in life afterwards and also you can share this with other's.",
    choices: [
      { text: "Start walking the forest", nextId: "walking1" },
      { text: "Start a meditation session", nextId: "sense1" },
      { text: "Ask about your purpose in life", nextId: "purpose1" },
    ],
  },
  {
    id: "readbook0",
    text: "You read the book again having learned from it once...",
    choices: [],
  },
  {
    id: "walking1",
    text: "You begin the walk of the forest...",
    choices: [],
  },
  {
    id: "sense1",
    text: "You think inside, and begin to close your mind to your surroundings...",
    choices: [],
  },
  {
    id: "purpose1",
    text: "You ask to the void where the voice was heard, what is my purpose in this strange world of choices...",
    choices: [],
  },
  {
    id: "sleep1",
    text: "In this world, it's dark and late and sleep is a good thing to keep rested...",
    choices: [],
  },
  {
    id: "look1",
    text: "The forest is dark but you can start looking around and see there are tree's and paths, as well as the night sky has stars visible with the mmon out behind some clouds...",
    choices: [],
  },
  {
    id: "toolpractice1",
    text: "The tool you are given immediately seems to conform to your hand and it seems there is a lot that can be done with it given the forest setting...",
    choices: [],
  },
];
