import { useRouter } from "next/router";

function Prams() {
  const route = useRouter();
  const { params = [] } = route.query;

  if (params.length === 1) {
    return (
      <>
        <h1> view params of lenght one </h1>
        <p>Prams {params[0]} </p>
      </>
    );
  } else if (params.length === 2) {
    return (
      <>
        <h1> view params of lenght two </h1>
        <p>Prams {params[0] + params[1]} </p>
      </>
    );
  } else if (params.length === 3) {
    return (
      <>
        <h1> view params of lenght two </h1>
        <p>Prams {params[0] + params[1] + params[1]} </p>
      </>
    );
  } else {
    return (
      <>
        <h1>opps .. not found</h1>
      </>
    );
  }
}

export default Prams;
