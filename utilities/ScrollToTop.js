
import { Component } from "react";
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    // let location = useLocation();
    // console.log("location",location)
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default (ScrollToTop);
