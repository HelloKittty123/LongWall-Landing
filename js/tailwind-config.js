tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            animation: {
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
                "fade-in-up-delay": "fadeInUp 0.6s ease-out 0.3s forwards",
                "fade-in-up-delay-2": "fadeInUp 0.6s ease-out 0.6s forwards",
                counter: "counter 2s ease-out forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
};
