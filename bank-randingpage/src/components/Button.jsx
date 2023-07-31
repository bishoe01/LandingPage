import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient ${styles} font-poppins font-medium text-[18px] text-primary outline-none`}
    >
      Get Started
    </button>
  );
}

export default Button;
