interface props {
    content: string,
    onClick: React.MouseEventHandler<HTMLElement>
}

const CustomLink = ({
    content,
    onClick
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
        >{content}</a>
    )
}

export default CustomLink;