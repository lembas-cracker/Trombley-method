import React from "react";

export class TextVisibility extends React.Component {
  render() {
    return (
      <div>
        <div className="item_title" onClick={this.props.toggleVisibility}>
          {this.props.title}
        </div>
        {this.props.isVisible ? (
          <p className="item_text">{this.props.text}</p>
        ) : null}
      </div>
    );
  }
}
