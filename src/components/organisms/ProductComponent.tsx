import styled from "styled-components";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { productOne } from "../../assets";

interface productType {
  imageUrl: string;
  productName: string;
  price: number;
  likeStatus: boolean;
  likes: number;
}

function ProductComponent({
  imageUrl,
  productName,
  price,
  likeStatus,
  likes,
}: productType) {
  const [product, setProduct] = useState<productType>({
    imageUrl: productOne,
    productName: "product name",
    price: 0,
    likeStatus: false,
    likes: 0,
  });

  useEffect(() => {
    setProduct((prevProducts) => {
      return {
        ...prevProducts,
        imageUrl: imageUrl,
        productName: productName,
        price: price,
        likeStatus,
        likes,
      };
    });
  }, [imageUrl, productName, price, likes, likeStatus]);

  return (
    <Container>
      <ComponentSkeleton />
      <section className="product-inner-section">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.productName} />
          <p>{product.productName}</p>
          <div className="product-like-section">
            <span>
              $ <p>{product.price}</p>
            </span>
            <div className="like-section">
              <span className="product-like-btn">
                <FcLike />
              </span>
              {product.likeStatus ? product.likes : 0}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default ProductComponent;

function ComponentSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    });
  }, []);
  return (
    <div>
      {loading && (
        <div>
          <span className="img-skeleton" />
          <span className="prod-name" />
          <div>
            <span className="like-section">
              <span className="like-btn">
                <FcLike style={{ width: "24px", height: "24px" }} />
              </span>
              <span className="like-number" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
const Container = styled.section``;
