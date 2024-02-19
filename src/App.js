import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
 
import Page from "./components/Page"; 
import DrawerAppBar from "./components/DrawerAppBar"; 

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [pageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <DrawerAppBar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <section className="hero">
        
       
         
           
          
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;