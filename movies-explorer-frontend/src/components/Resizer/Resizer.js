import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobile(innerWidth <= 768);
      setIsTablet(innerWidth > 768 && innerWidth <= 1279);
      setIsDesktop(innerWidth > 1279);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
