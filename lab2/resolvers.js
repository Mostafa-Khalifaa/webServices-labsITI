let { users, articles, comments } = require('./data');

const resolvers = {
  Query: {
    getAllArticles: () => {
      return articles;
    },

    getArticleById: (parent, { id }) => {
      return articles.find(article => article.id === id);
    },

  },

  Mutation: {

    createArticle: (parent, { input }) => {
      const newArticle = {
        id: String(articles.length + 1),
        title: input.title,
        content: input.content,
        authorId: input.authorId,
      };
      articles.push(newArticle);
      return newArticle;
    },

  },
  Article: {
    author: (parent) => {
      return users.find(user => user.id === parent.authorId);
    },
    comments: (parent) => {
      return comments.filter(comment => comment.articleId === parent.id);
    },
  },

};
module.exports = resolvers;