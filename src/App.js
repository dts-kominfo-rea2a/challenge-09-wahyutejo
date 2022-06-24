import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (
    <div className="App">
      <Header />
      <Contact kontak={contacts[0]} />
      <Contact kontak={contacts[1]} />
      <Contact kontak={contacts[2]} />
      <Contact kontak={contacts[3]} />
      <Contact kontak={contacts[4]} />
      <Contact kontak={contacts[5]} />
    </div>
  );
};

export default App;
