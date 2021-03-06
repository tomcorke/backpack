import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M19.4 5.1c-2.2-2.2-5.7-2.2-7.9 0l-7.2 7.2c-1.6 1.6-1.6 4.2 0 5.8s4.2 1.6 5.8 0l7.2-7.2c1-1 1-2.6 0-3.6s-2.6-1-3.6 0l-7.2 7.2c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L15 8.7c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-7.2 7.2c-.8.8-2.1.7-2.9-.1-.7-.8-.7-2 0-2.8l7.2-7.2c1.4-1.4 3.7-1.3 5.1.1 1.3 1.4 1.3 3.6 0 4.9l-7.2 7.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l7.2-7.2c2.2-2.1 2.2-5.6.1-7.8z" /></svg>;
  }

}