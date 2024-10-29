// import './App.css'
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import Title from './components/layout/Title'
// import AddPerson from './components/forms/AddPerson'
// import AddCar from './components/forms/AddCar'
// // import Contacts from './components/lists/Contacts'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// })

// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//       <div className='App'>
//         <Title />
//         <AddPerson />
//         <AddCar />
//         {/* <Contacts /> */}
//       </div>
//     </ApolloProvider>
//   )
// }

// export default App


// import './App.css'
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import Title from './components/layout/Title'
// import AddPerson from './components/forms/AddPerson'
// import PersonCard from './components/forms/PersonCard'
// import AddCar from './components/forms/AddCar'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// })

// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//       <div className='App'>
//         <Title />
//         <AddPerson />
//         <AddCar />
//         <PersonCard />
//          {/* This will show all persons and their associated cars */}
//       </div>
//     </ApolloProvider>
//   )
// }

// export default App


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Layout } from "antd";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import CarList from "./components/forms/CarList";
// import UserList from "./components/forms/UserList";
// import UserDetails from "./components/forms/UserDetails";

// const { Content } = Layout;

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
//   cache: new InMemoryCache()
// });

// function App() {
//   return (
//     <div className="App">
//       <ApolloProvider client={client}>
//         <Content style={{ padding: "0 48px" }}>
//           <Router>
//             <Routes>
//               <Route path="/" element={<UserList />} />
//               <Route path="/user/:id" element={<UserDetails />} />
//               <Route path="/cars" element={<CarList />} /> {/* Use a unique path for CarList */}
//             </Routes>
//           </Router>
//         </Content>
//       </ApolloProvider>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import First from "../src/components/pages/First";
import PersonDetails from "../src/components/pages/PersonDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/person/:id" element={<PersonDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;