import Image from "next/image";
import profilePic from "../public/Profile.png";
export default function Home() {
  return (
    <>
      <h1 id="id_for_universal_embedder_e2e_test">My Homepage</h1>
      {/* <Image
        id="id_for_universal_embedder_e2e_test"
        src={profilePic}
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      <p>Welcome to my homepage!</p>
    </>
  );
}
