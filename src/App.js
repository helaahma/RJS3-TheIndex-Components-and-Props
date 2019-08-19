import React from "react";
import authors from "./data";

//Component
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="content col-10">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
