module.exports = {
 plugins: [
  require("postcss-import"),
  require("tailwindcss"),
  require("autoprefixer"),

  require("postcss-ts-classnames")({
   dest: "src/tailwindClasses.d.ts",
   // Set isModule if you want to import ClassNames from another file
   isModule: true,
   exportAsDefault: true, // to use in combination with isModule
  }),

  require("@fullhuman/postcss-purgecss")({
   content: ["./src/**/*.html"],
  }),
 ],
};
