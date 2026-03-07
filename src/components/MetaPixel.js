import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PIXEL_ID = process.env.REACT_APP_META_PIXEL_ID;

const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    const loadPixel = () => {
      if (window.fbq) return;

      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };

      if (!window._fbq) window._fbq = window.fbq;

      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      window.fbq("init", PIXEL_ID);
    };

    loadPixel();

  }, []);

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

export default MetaPixel;