import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "./Chart.jsx";
import { TextVisibility } from "./TextVisibility.jsx";
import { hoverHandleOver, hoverHandleOut } from "./hoverHandleFunction.js";

class App extends Component {
  state = {
    learning: false,
    order: false,
    type: false,
    radicals: false,
    stroke: false,
    reading: false,
    meaning: false,
    materials: false
  };

  toggleItem = itemName => {
    this.setState({
      [itemName]: !this.state[itemName]
    });
  };

  render() {
    return (
      <div className="wrapper container-fluid">
        <div className="container charts">
          <Chart toggleVisibility={this.toggleItem} />
        </div>
        <div className="content-list">
          <div className="introduction">
            <h2>Trombley Kanji Learning Method</h2>
            <p className="introduction_text">
              Relay is a new framework from Facebook that promises to simplify a
              problem complex enough that the simplification is rather complex
              in itself (and here’s a visual explanation of the problem Relay
              solves). I tend to learn things better when I can see how things
              fit together, so I made this interactive diagram that attempts to
              explain how Relay’s various parts fit together.
            </p>
          </div>

          <ul className="sidebar-list">
            <li
              className="item"
              hoverHandle="learning"
              onMouseOver={() => hoverHandleOver("learning")}
              onMouseOut={() => hoverHandleOut("learning")}
            >
              <TextVisibility
                isVisible={this.state.learning}
                toggleVisibility={() => this.toggleItem("learning")}
                title="Trombley Kanji Learning"
                text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
              />
            </li>
            <li>
              <ul className="sidebar-list">
                <li
                  className="item"
                  hoverHandle="order"
                  onMouseOver={() => hoverHandleOver("order")}
                  onMouseOut={() => hoverHandleOut("order")}
                >
                  <TextVisibility
                    isVisible={this.state.order}
                    toggleVisibility={() => this.toggleItem("order")}
                    title="Order of Learning"
                    text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                  />
                </li>
                <li>
                  <ul className="sidebar-list">
                    <li
                      className="item"
                      hoverHandle="type"
                      onMouseOver={() => hoverHandleOver("type")}
                      onMouseOut={() => hoverHandleOut("type")}
                    >
                      <TextVisibility
                        isVisible={this.state.type}
                        toggleVisibility={() => this.toggleItem("type")}
                        title="Kanji Type"
                        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                      />
                    </li>
                    <li>
                      <ul className="sidebar-list">
                        <li
                          className="item"
                          hoverHandle="radicals"
                          onMouseOver={() => hoverHandleOver("radicals")}
                          onMouseOut={() => hoverHandleOut("radicals")}
                        >
                          <TextVisibility
                            isVisible={this.state.radicals}
                            toggleVisibility={() => this.toggleItem("radicals")}
                            title="Radicals"
                            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                          />
                        </li>
                        <li
                          className="item"
                          hoverHandle="stroke"
                          onMouseOver={() => hoverHandleOver("stroke")}
                          onMouseOut={() => hoverHandleOut("stroke")}
                        >
                          <TextVisibility
                            isVisible={this.state.stroke}
                            toggleVisibility={() => this.toggleItem("stroke")}
                            title="Stroke Order"
                            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="sidebar-list">
                    <li
                      className="item"
                      hoverHandle="reading"
                      onMouseOver={() => hoverHandleOver("reading")}
                      onMouseOut={() => hoverHandleOut("reading")}
                    >
                      <TextVisibility
                        isVisible={this.state.reading}
                        toggleVisibility={() => this.toggleItem("reading")}
                        title="Reading"
                        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                      />
                    </li>
                    <li
                      className="item"
                      hoverHandle="meaning"
                      onMouseOver={() => hoverHandleOver("meaning")}
                      onMouseOut={() => hoverHandleOut("meaning")}
                    >
                      <TextVisibility
                        isVisible={this.state.meaning}
                        toggleVisibility={() => this.toggleItem("meaning")}
                        title="Meaning"
                        text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="item"
              hoverHandle="materials"
              onMouseOver={() => hoverHandleOver("materials")}
              onMouseOut={() => hoverHandleOut("materials")}
            >
              <TextVisibility
                isVisible={this.state.materials}
                toggleVisibility={() => this.toggleItem("materials")}
                title="Materials"
                text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
              />
            </li>
          </ul>
          <span>*This project is still in development.*</span>
        </div>
      </div>
    );
  }
}

export default App;
