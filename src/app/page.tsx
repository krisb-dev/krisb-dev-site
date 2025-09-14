import BlockRenderer from "@/components/blocks/blockRenderer";
import { LayoutRenderer } from "@/components/blocks/layoutRenderer";

export const revalidate = 60;

export default async function Home() {
  const data = await fetch(
    "http://localhost:3000/api/pages/1?depth=3&overridePopulate=true",

    {
      next: { revalidate: 60 },
    }
  );
  const content = await data.json();

  return (
    <>
      <LayoutRenderer layout={content.layout} />
      {/* <pre>{JSON.stringify(content, null, 2)}</pre> */}
    </>
  );
}
