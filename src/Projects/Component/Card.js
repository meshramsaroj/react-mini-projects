import React from "react";

export const CardHeader = ({ children, className }) => {
  return <div className={className + " card-title"}>{children}</div>;
};

export const CardBody = ({ children, className }) => {
  return <div className={className + " card-body"}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
    return <div className={className+ " card-footer"}>{children}</div>;
  };

export const Card = ({ children, className }) => {
  return <div className={className + " card"}>{children}</div>;
};
