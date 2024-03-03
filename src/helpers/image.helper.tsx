import fbRed from "../assets/bikes/fireballRed.png";
import arBlue from "../assets/bikes/auroraBlue.png";
import snBlue from "../assets/bikes/supernovaBlue.png";
import snRed from "../assets/bikes/supernovaRed.png";
import arGreen from "../assets/bikes/auroraGreen.png";

import fbRedTank from "../assets/tanks/fireballRed.png";
import arBlueTank from "../assets/tanks/auroraBlue.png";
import snBlueTank from "../assets/tanks/supernovaBlue.png";
import snRedTank from "../assets/tanks/supernovaRed.png";
import arGreenTank from "../assets/tanks/auroraGreen.png";

// eslint-disable-next-line react-refresh/only-export-components
const Images = {
  fbRed,
  arBlue,
  snBlue,
  snRed,
  arGreen,
  fbRedTank,
  arBlueTank,
  snBlueTank,
  snRedTank,
  arGreenTank,
};

export type ImageKey = keyof typeof Images;

export const getImage = (key?: ImageKey) => {
  if (!key) return;
  return <img src={Images[key]} alt={key} />;
};
