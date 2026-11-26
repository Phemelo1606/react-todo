import { useState } from "react";
import { Pen, Trash2, Moon, Add, Search4 } from "reicon-react";
import "./App.css";
import '@fontsource/kanit'

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>TODO LIST</h1>

          <br />

          <div className="header">
            <div className="search">
              <input type="search" placeholder="Search Note" />
            </div>

            <div className="filter-section">
              <select id="filter" name="filter">
                <option value="all">ALL</option>
                <option value="all">Complete</option>
                <option value="all">Incomplete</option>
              </select>
              <button className="theme">
                <Moon size={24} className="Moon"/>
              </button>
            </div>
          </div>
          <br />
          <div className="list">
            <div className="list-items">
              <input type="checkbox" className="check" />
              <h2>Note #1</h2>
              <div className="icons">
                <a href="#">
                  <Pen size={24} />
                </a>
                <a href="#">
                  <Trash2 size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="list-items">
              <input type="checkbox" className="check" />
              <h2>Note #2</h2>
              <div className="icons">
                <a href="#">
                  <Pen size={24} />
                </a>
                <a href="#">
                  <Trash2 size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="list-items">
              <input type="checkbox" className="check" />
              <h2>Note #3</h2>
              <div className="icons">
                <a href="#">
                  <Pen size={24} />
                </a>
                <a href="#">
                  <Trash2 size={24} />
                </a>
              </div>
            </div>
          </div>

          <button className="addNote" id="addNote">
            <Add size={30} className="Add"/>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
