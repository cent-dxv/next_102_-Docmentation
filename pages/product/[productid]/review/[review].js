import { useRouter } from "next/router";

function Review() {
  const route = new useRouter();

  return (
    <div>
      product of {route.query.productid} review {route.query.review}
    </div>
  );
}

export default Review;
