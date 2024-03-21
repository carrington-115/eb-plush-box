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
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <ComponentSkeleton />;
  }
  return (
    <Container>
      <section className="product-inner-section">
        <div className="product-image">
          <img src={imageUrl} alt={productName} />
        </div>
        <p className="product-name">{productName}</p>
        <div className="product-details-section">
          <span className="product-price">
            <p>$ {price}</p>
          </span>
          <div className="like-section">
            <span className="product-like-btn">
              <FcLike
                style={{
                  backgroundColor: likeStatus ? "#6539303b" : "transparent",
                }}
              />
            </span>
            <p>{likes}</p>
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
      <span className="img-skeleton" />
      <span className="prod-name" />
      <div className="details-section">
        <span className="price" />
        <div className="like-section">
          <span className="like-btn">
            <FcLike
              style={{ width: "24px", height: "24px", color: "grey" }}
              fill="grey"
            />
          </span>
          <span className="like-number" />
        </div>
      </div>
    </SkeletonContainer>
  );
}
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 40px;
  background-color: #f7efed;
  width: fit-content;
  color: black;
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 15px 2.5px;
    border-radius: 30px;
    width: 45vw;
  }
  &:hover {
    background-color: #ead7d3;
  }
  cursor: pointer;
  .product-inner-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 95%;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 90%;
    }
    .product-image {
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
    .product-name {
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 18px;
      }
    }
    .product-details-section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 18px;
        justify-content: space-between;
      }
      .product-price {
      }
      .like-section {
        display: flex;
        align-items: center;
        gap: 10px;
        .product-like-btn {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;

          svg {
            width: 24px;
            height: 24px;
            @media (min-width: 320px) and (max-width: 599px) {
              width: 22px;
              height: 22px;
              padding: 2.5px;
            }
          }
          &:hover {
            background-color: #6539303b;
          }
        }

        p {
        }
      }
    }
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: fit-content;
  margin: 20px;
  border-radius: 10px;
  background-color: #d4d4d468;
  span {
    background-color: #d4d4d4;
    height: 10px;
    border-radius: 10px;
  }
  .img-skeleton {
    width: 200px;
    height: 200px;
  }
  .prod-name {
    width: 200px;
    height: 20px;
  }
  .details-section {
    display: flex;
    justify-content: flex-start;
    gap: 50px;
    .price {
      width: 50px;
      height: 20px;
    }
    .like-section {
      display: flex;
      align-items: center;
      .like-btn {
        padding: 5px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .like-number {
        width: 40px;
        height: 20px;
      }
    }
  }
`;
