import classes from "./LoadingSpinner.module.css";
import Lottie from "react-lottie";
import spinner from "../../assests/svg/spineer.json";
import { Translate } from "@mui/icons-material";
const LoadingSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="spindiv">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingSpinner;
