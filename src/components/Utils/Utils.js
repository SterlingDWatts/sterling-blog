import React from "react";
import { format as formatDate } from "date-fns";
import "./Utils.css";

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function BlogContent({ content, className, ...props }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={["BlogContent", className].join(" ")}
      {...props}
    />
  );
}

export function NiceDate({ date, format = "MMMM dd, yyyy" }) {
  return formatDate(date, format);
}
