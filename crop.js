const { Jimp } = require("jimp");

async function main() {
  try {
    console.log("Reading image...");
    const image = await Jimp.read("C:/Users/ramza/.gemini/antigravity-ide/brain/e810db1d-89be-4053-8776-012d0e0a545c/media__1780281881711.png");
    
    // In the 1024x576 image:
    // The Google Maps sidebar starts around x = 24.
    // The photo area is at the top of the sidebar under the search input:
    // x = 24, y = 48
    // Let's crop width = 216 (proportional to sidebar width) and height = 135 (proportional to photo height).
    const cropX = 24;
    const cropY = 48;
    const cropW = 216;
    const cropH = 135;

    console.log(`Cropping coordinates: x=${cropX}, y=${cropY}, w=${cropW}, h=${cropH}`);
    
    const cropped = image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    await cropped.write("D:\\Downloads\\RK\\frontend\\public\\about-image.png");
         
    console.log("Successfully saved cropped image to D:\\Downloads\\RK\\frontend\\public\\about-image.png");
  } catch (err) {
    console.error("Error cropping image:", err);
  }
}

main();
