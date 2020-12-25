import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p>This is the sample page</p>
      <Link href="/">
        <a>Top</a>
      </Link>
    </div>
  );
};

export default Index;
