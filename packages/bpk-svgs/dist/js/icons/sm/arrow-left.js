import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M13.7 19.7L6.6 12l7.1-7.7c.6-.6 1.7-.2 1.7.7v14c0 .9-1.1 1.4-1.7.7z" /></svg>;
  }

}