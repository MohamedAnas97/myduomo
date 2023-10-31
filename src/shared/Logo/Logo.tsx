import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/duomo.png";
import logoLightImg from "images/duomo.png";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <div>
          <img
            className={`block max-h-10 mb-1  ${imgLight ? "dark:hidden" : ""}`}
            src={img}
            alt="Logo"
          />
        </div>
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-10 mb-1 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
