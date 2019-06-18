import L from "react-loadable";
import Loading from "./loading";

const Loadable = props =>
  L({
    loading: Loading,
    delay: 300,
    timeout: 10000,
    ...props,
  });

export default Loadable;
