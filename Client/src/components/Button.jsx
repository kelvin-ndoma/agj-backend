import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttons }) => {
    if (!buttons || !Array.isArray(buttons)) {
        console.error("The 'buttons' prop is missing or invalid.");
        // prevent rendering if buttons is undefined or invalid
        return null;
    }

    return (
        <div className="flex justify-between mt-6 gap-8">
            {buttons.map((button, index) => {
                const ButtonTag = button.href ? "a" : "button";
                return (
                    <ButtonTag
                        key={index}
                        href={button.href}
                        onClick={button.onClick}
                        className={`p-4 font-semibold capitalize text-base text-center rounded-xl 
                            ${button.variant === "primary"
                                ? "text-white bg-[#000000] hover:bg-white hover:text-[#000000]"
                                : button.variant === "secondary"
                                    ? "bg-white text-[#640433] hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
                                    : button.variant === "simple"
                                        ? "bg-transparent border-2 border-[#640433] text-black hover:bg-[#640433] hover:text-white hover:border-[#640433]"
                                        : button.variant === "elevated"
                                            ? "bg-black border-2 text-white hover:text-black hover:border-[#640433] hover:bg-transparent"
                                            : ""}`}
                    >
                        {button.label}
                    </ButtonTag>
                );
            })}
        </div>
    );
};

// PropTypes validation
Button.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            onClick: PropTypes.func,
            label: PropTypes.string.isRequired,
            variant: PropTypes.oneOf(["primary", "secondary", "simple", "elevated"]).isRequired,
        })
    ).isRequired,
};

export default Button;
