interface BlogProps {
    title: string;
    date: string;
    content: string;
}

const BlogComponent = ({ title, date, content }: BlogProps): JSX.Element => {
    return (
        <section className="mt-20 lg:mt-40 flex flex-col gap-8 lg:w-3/5 mx-auto">
            <h1 className="text-2xl lg:text-4xl text-primaryColor font-bold">
                {title}
            </h1>
            <p className="text-gray">{date}</p>
            <div
                className="default-class"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </section>
    );
};

export default BlogComponent;
