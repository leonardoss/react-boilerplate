module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    // "env": {
    //     "node": true,
    //     "es6": true
    // },
    // "plugins": [
    //     "react",
    //     "jsx-a11y",
    //     "import"
    // ],
    // "rules": {
    //     "react/jsx-filename-extension": 0,
    //     "react/prefer-stateless-function": [0],
    //     "react/jsx-curly-spacing": [2, "always"],
    //     "class-methods-use-this": [2, "always"],
    // },
    "rules": {
        "env": {
            "node": true,
            "es6": true
        },
        "experimentalDecorators": true,
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "global-require": "off",
        "consistent-return": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": 1,
        "no-use-before-define": [
            "error",
            { "functions": true, "classes": true, "variables": false }
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "printWidth": 100
            }
        ]
    },
    "plugins": ["prettier"],
    "parser": "babel-eslint"
};
