import { useEffect } from "react";

const SCRIPT_SRC = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";

const AmazonOneLink = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default AmazonOneLink;
