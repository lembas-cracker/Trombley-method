import React from "react";

export class TextVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }
  toggleVisibility = () => {
    this.setState({
      visibility: true
    });
  };

  render() {
    return (
      <div>
        <div className="item_title" onClick={this.toggleVisibility}>
          {this.props.title}
        </div>
        {this.state.visibility ? (
          <p className="item_text">{this.props.text}</p>
        ) : null}
      </div>
    );
  }
}
