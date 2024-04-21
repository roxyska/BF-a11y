import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";

// One method per module
function schoolSlides() {
  return [
    "00_title.md",
    "00_speaker.md",
    "01_what&why.md",
    "02_law.md",
    "03_standards.md",
    "04_errors.md",
    "05_tools.md",
    "06_demo.md"
    // "01_speaker.md",
    // "10_chapter1.md",
    // "11_layouts.md",
    // "15_vertical.md",
    // "20_specifics_slides.md",
    // "30_code_slides.md",
    // "40_helpers.md",
    // "50_modes.md",
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
