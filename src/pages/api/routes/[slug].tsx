import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  return {
    props: {
      slug,
    },
  };
};

const Route = ({ slug }: any) => {
  const router = useRouter();
  return (
    <>
      <h1>Route: {slug}</h1>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </>
  );
};

export default Route;
