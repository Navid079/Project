import { Icon } from "@iconify/react";
import TextInput from "../UI/TextInput/TextInput";

import "./IconInput.css";

const IconInput = ({
  className,
  placeholder,
  type,
  icon,
  flipped,
  error,
  onChange,
}) => {
  return (
    <div
      className={`icon-input ${flipped ? "flipped" : ""} ${className || ""}`}
    >
      <div className="icon-input__icon-container">
      <Icon className="icon-input__icon" icon={icon} />
      </div>
      <TextInput
        className="icon-input__input"
        type={type}
        placeholder={placeholder || ""}
        onChange={onChange}
      />
      <div className="icon-input__icon-container">
        <Icon
          className={`icon-input__exclamation ${
            error ? "icon-input__exclamation--show" : ""
          }`}
          icon="bi:exclamation-circle"
        />
      </div>
    </div>
  );
};

export default IconInput;
