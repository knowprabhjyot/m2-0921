const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;

// Graphql Package 
const { graphqlHTTP } = require('express-graphql');


// We are getting types from Graphql
const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

const authors = [
    {
        id: 1,
        name: "Prabh"
    },
    {
        id: 2,
        name: "Daniel"
    },
    {
        id: 3,
        name: "Sae"
    }
];

const posts = [
    {
        id: 123,
        authorId: 1,
        title: "How to code",
        trending: true,
        description: "In this article you will learn about how you can code from scratch"
    },
    {
        id: 124,
        authorId: 1,
        trending: false,
        title: "Positive approach",
        description: "How to live a positive and live with hustle"
    },
    {
        id: 125,
        authorId: 3,
        treding: true,
        title: "Fitness Regime",
        description: "Fitness is an important element in day-to-day life"
    },
    {
        id: 126,
        authorId: 2,
        trending: false,
        title: "Gaming",
        description: "How I learned gaming in the first place without any gaming background"
    }
]


// First you have to create Types

const PostsType = new GraphQLObjectType({
    name: "Posts",
    description: "Posts for users",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt)  // Int is a type of number
        },
        authorId: {
            type: new GraphQLNonNull(GraphQLInt)  // Int is a type of number
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)  // This is a type of string        
        },
        trending: {
            type:  new GraphQLNonNull(GraphQLBoolean) // This is a type of boolean        
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)  // This is a type of string        
        },
    })
});

const AuthorsType = new GraphQLObjectType({
    name: "Author",
    description: "Author of posts",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt)  // Int is a type of number
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)  // This is a type of string        
        },

    })
});

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Main query for Graphql",
    fields: () => ({
        posts: {
            type: new GraphQLList(PostsType),
            description: "List of posts shared by users",
            resolve: () => posts
        },
        authors: {
            type: new GraphQLList(AuthorsType),
            description: "List of authors who shared posts",
            resolve: () => authors
        }
    })
})

// In Rest API --> CRUD (Create, Read, Update, Delete)
// In Graphql, CREATE, UPDATE, DELETE ======> MUTATIONS


const mainSchema = new GraphQLSchema({
    query: RootQueryType
})


app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: mainSchema
}));

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})