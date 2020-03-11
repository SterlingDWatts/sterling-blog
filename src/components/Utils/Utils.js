import React from "react";
import { format as formatDate } from "date-fns";
import "./Utils.css";

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Label({ className, ...props }) {
  return <label className={["Label", className].join(" ")} {...props} />;
}

export function LabelGroup({ className, ...props }) {
  return <div className={["LabelGroup", className].join(" ")} {...props} />;
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

export function ValidationError(props) {
  if (props.message) {
    return <div className="ValidationError">{props.message}</div>;
  }
  return <></>;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}
