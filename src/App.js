import React from "react";
import Contact from "./components/Contact";
import users from "./components/contactsList";

function App() {
  return (
    <div>
      {users.map(contact => (
        <Contact key={contact.name} {...contact} />
      ))}
    </div>
  );
}

export default App;
