import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        id="id_for_universal_embedder_e2e_test"
        src="/../public/Profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}
