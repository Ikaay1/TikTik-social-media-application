## Tiktik

A social media web application.

Built with TypeScript(ES6) and Next.js.
For demo, visit https:/tiktik-ikm.vercel.app

## Features

- Google authentication
- Post content
- Like and comment on content
- User profile with profile and cover photos
- Suggested accounts and content filter by popular topics

## Technologies used

- Next.js: for handling our application's user interface(view layer)
- Node.js: for handling our backend services (CRUD functionalities)
- Typescript: for static/strong typing
- [`jwt-decode`](https://www.npmjs.com/package/jwt-decode): for decoding our authentication tokens
- [`mongodb`](https://www.npmjs.com/package/mongodb): database for building the app
- [`mongoose`](https://www.npmjs.com/package/mongoose): for connecting your MongoDB clusters or collections with your Node.js app
- [`react-google-login`](https://www.npmjs.com/package/react-google-login): for google authentication
- [`uuidv4`](https://www.npmjs.com/package/uuidv4): for creating unique keys
- [`react-icons`](https://www.npmjs.com/package/react-icons): for sidebar icons on mobile view
- Tailwind CSS: for better css styling approach

## Implementation process

- Architecture: Package-By-Feature
- Connecting to database, Schema creation, and api creation
- Api integration

The whole process of building this React App involves the following stages:-

1. Design/ Planning
2. Building a static version of the app
3. Setting up API and configuring proxy for API
4. Integration

#### 1. The Design/Planning stage

Ideally, I needed to divided the components in such a way that one component only has a single functionality. I also needed to account for component re-usability Eg. components for displaying error messages or app loading state.

#### 2. Building a static version of the app

This stage is just about building the folder structure, creating the components, adding styling, populating the components with mock data. I created the components using a top to down approach - starting with bigger encapsulating one to smaller(least) ones. <br>
For me, main objective in this stage was to build the structure of the app and seeing how it would look like with real data, without having to worry about handling data and interactivity yet.

#### 3. Setting up API and configuring proxy for API

In this stage, I connected to my database and setup my api logic to perform the Create, Update, Delete, and Get requests. I created my routes for all needed cases which all query the database and return the desired response for the frontend to use.

#### 4. Integration

In this stage, I sent requests to the required api routes, whilst also sending the body data needed. The api routes returned response, which I manipulated and populated the DOM with.


## Author

- **Mgbemele Ikechukwu** - Software Developer.
