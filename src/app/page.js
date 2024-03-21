import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://simetria-app.connect.ge/api/view/main/getCurrentContent?contentid=1&selectedlan=ka",
    { method: "POST" }
  );

  const data = await res.json();
  // console.log(data);
  // console.log(
  //   data.secondary?.MainSlider_ui1707141292996.data.list[0].image[0].url
  // );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{data.secondary?.MainSlider_ui1707141292996.data.list[0].title}</h1>
      <p>{data.secondary?.MainSlider_ui1707141292996.data.list[0].teaser}</p>
      <Image
        src={
          data.secondary?.MainSlider_ui1707141292996.data.list[0].image[0].url
        }
        width={1920}
        height={1080}
        alt="Picture of the author"
      />
    </main>
  );
}
