import { useState, FC } from "react";

const ImageBlock: FC<{ crypto: CryptoType }> = ({ crypto }) => {
  const [isCode, setIsCode] = useState(false);
  return (
    <button
      className="imageWrapper"
      onClick={() => {
        setIsCode(!isCode);
      }}
    >
      <img src={crypto.link} alt={crypto.currency_long} />
      <div style={{ fontWeight: "500" }}>
        {isCode ? crypto.currency_code : crypto.currency_long}
      </div>
    </button>
  );
};

export default ImageBlock;
