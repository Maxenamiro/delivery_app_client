module.exports = {
    presets: ["babel-preset-expo"],
    plugins: [
        [
            "babel-plugin-root-import",
            {
                rootPathSuffix: "app/",
                rootPathPrefix: "@/",
            },
        ],
        "nativewind/babel",
    ],
}
