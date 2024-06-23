import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

// type for the params
type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({params}: Props){
    // getting the page by the slug
    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent font-bold text-5xl  drop-shadow">
                {page.title}
            </h1>

            <div className="text-lg text-gray mt-10">
                <PortableText value={page.content}/>
            </div>
        </div>
    )
}