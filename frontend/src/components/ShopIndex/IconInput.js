import { Icon } from "@iconify/react";
import TextInput from "../UI/TextInput/TextInput";

import "./IconInput.css";

const IconInput = ({
  className,
  iconClassName,
  inputClassName,
  placeholder,
  type,
  icon,
  flipped,
}) => {
  return (
    <div
      className={`icon-input ${flipped ? "flipped" : ""} ${className || ""}`}
    >
      <Icon className="icon-input__icon" icon={icon} />
      <TextInput
        className="icon-input__input"
        type={type}
        placeholder={placeholder || ""}
      />
      <div className="icon-input__exclamation-container">
        <Icon
          className="icon-input__exclamation"
          icon="bi:exclamation-circle"
        />
      </div>
    </div>
  );
};

export default IconInput;
