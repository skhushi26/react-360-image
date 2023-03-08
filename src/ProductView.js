import React from "react";
import ThreeSixty from "react-360-view";

function ProductView() {
  return (
    <div>
      <ThreeSixty
        amount={251}
        imagePath="https://mining-now.s3.us-east-2.amazonaws.com/prod/images/miner/360/z-15"
        fileName="z-15-{index}.png"
        autoplay
        loop
      />
    </div>
  );
}

export default ProductView;
