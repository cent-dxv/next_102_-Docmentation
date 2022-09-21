import { useRouter } from "next/router";

function Productdetail() {
  const route = useRouter();
  return <div>Product detail on {route.query.productid}</div>;
}

export default Productdetail;
