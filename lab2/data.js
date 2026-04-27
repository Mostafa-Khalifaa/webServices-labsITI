const users = [
  { id: "1", fullname: "Ahmed Ali", email: "ahmed@example.com", dob: "2003-03-15" },
  { id: "2", fullname: "mostafa khalifa", email: "mostafa@example.com", dob: "2001-07-22" },
  { id: "3", fullname: "mohamed ahmed", email: "mohamed@example.com", dob: "2002-05-10" },
];

const articles = [
  { id: "1", title: "What is GraphQL?", content: "GraphQL is a query language for your API.", authorId: "1" },
  { id: "2", title: "Node.js Tips", content: "Node.js is great for building servers.", authorId: "2" },
  { id: "3", title: "React Hooks", content: "React Hooks are a new way to write React components.", authorId: "3" },
  { id: "4", title: "Angular", content: "Angular is a framework for building web applications.", authorId: "1" },

];

const comments = [
  { id: "1", title: "Nice post!", content: "I really liked this article.", articleId: "1" },
  { id: "2", title: "Great tips", content: "Very helpful, thank you.", articleId: "2" },
  { id: "3", title: "Agreed", content: "GraphQL is amazing.", articleId: "1" },
];

module.exports = { users, articles, comments };