interface props {
    content: string,
    onClick: React.MouseEventHandler<HTMLElement>,
    target: string,
    href: string
}

const CustomLink = ({
    content,
    onClick,
    target = "_self",
    href = ""
}: props) => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <a className = "md:hover:text-accentColorShade transition duration-300 ease-out cursor-pointer"
        onClick = {(event) => {
                if (content == "Home") {
                    scrollTop();
                }
                onClick(event);
            }}
            target={target}
            href={href}
        >{content}</a>
    )
}

export default CustomLink;