import styled from "styled-components";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { productType } from "../../types/vartypes";

function ProductComponent({
  imageUrl,
  productName,
  price,
  likeStatus,
  likes,
}: productType) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    });
  }, []);

  if (loading) {
    return <ComponentSkeleton />;
  }
  return (
    <Container>
      <section className="product-inner-section">
        <div className="product-image">
          <img src={imageUrl} alt={productName} />
          <p>{productName}</p>
          <div className="product-like-section">
            <span>
              $ <p>{price}</p>
            </span>
            <div className="like-section">
              <span className="product-like-btn">
                <FcLike />
              </span>
              {likeStatus ? likes : 0}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default ProductComponent;

function ComponentSkeleton() {
  return (
    <SkeletonContainer>
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
    </SkeletonContainer>
  );
}
const Container = styled.section``;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    background-color: grey;
  }
`;
