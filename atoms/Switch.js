import PropTypes from "prop-types";
import { useState } from "react";

const Switch = ({ disabled }) => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => {
    if (!disabled) {
      setEnabled(!enabled);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <label className="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={toggleSwitch}
          className={`w-14 h-8 rounded-full peer peer-focus:ring-primary-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all ${
            disabled
              ? "bg-neutral-100 border border-neutral-300 peer-checked:bg-neutral-100 peer-checked:border-neutral-100 after:bg-neutral-300 pointer-events-none"
              : "bg-neutral-300  peer-checked:bg-primary-900"
          }`}
        ></div>
      </label>
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
};

Switch.propTypes = {
  disabled: PropTypes.bool,
};

export default Switch;
