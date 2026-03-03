import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/gallery", permanent: false },
});

export default function Portfolio() {
  return null;
}
