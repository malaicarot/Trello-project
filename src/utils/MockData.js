export const mockData = [
  {
    id: Date.now() + Math.random() * 2,
    title: "To Do",
    card: [
      {
        id: Date.now() + Math.random() * 2,
        title: "Run Dealine",
        labels: [{
            text: "Frontend",
            color: "cyan"

        }],
        date: "",
        tasks: [{
            id: Date.now() + Math.random(),
            title: "Make UI"
        }],
        desc: "sdafsdsafdsfasdf",
        date: new Date()
      },
    ],
  },
  {
    id: Date.now() + Math.random() * 2,
    title: "Doing",
    card: [
      {
        id: Date.now() + Math.random() * 2,
        title: "CARD TITLE",
        labels: [{
            text: "Backend",
            color: "blue"

        }],
        date: "",
        tasks: [{
            id: Date.now() + Math.random(),
            title: "ASDASA"
        }],
        desc: "sdfassdfsds",
        date: new Date()
      },
    ],
  },
];
