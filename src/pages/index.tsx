import { Grid, Heading, Hero, Wrapper, BgElement, Faq } from "@/components";

import { Api } from "@/api";

import { Attributes } from "@/types";

export default function Home({ data }: { data: Attributes }) {
  console.log(data);
  return (
    <section className="bg-primary pb-20 pt-24">
      <BgElement className="-left-0 top-[100px] hidden h-[375px] -rotate-[50deg] md:block lg:-left-[135px]" />

      <Wrapper>
        <Hero heading={data.heading} />
        <Grid data={data.Grid} className="mt-10" />

        <section className="my-20 md:my-36">
          <Heading tag="h1" className="relative">
            {data.Features.Heading}
          </Heading>

          <div className="mt-10 grid gap-20 md:mt-16 md:grid-cols-3">
            {data.Features.ListItems.map((item) => (
              <section className="" key={item.id}>
                <h3 className="mb-2 text-xl">{item.heading}</h3>

                <p className="text-white">{item.text}</p>
              </section>
            ))}
          </div>
        </section>

        <Faq data={data.Faq} />
      </Wrapper>
    </section>
  );
}

export const getStaticProps = async () => {
  const data = await Api.home.getHomepage();
  return {
    props: {
      data: data.home.data.attributes,
    },
  };
};

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common"])),
//     data: await Api.properties.getProperties(locale),
//     categories: await Api.categories.getCategories(),
//   },
// });
