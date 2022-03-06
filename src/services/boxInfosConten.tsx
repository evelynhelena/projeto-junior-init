import book from "../../public/images/book.svg";
interface BoxInfosContentProps {
    data: [
        path: StaticImageData,
        title: string,
        content: string,
        altImg: string,
    ]
}

const boxInfosContent: BoxInfosContentProps = {
    data: [
        {
            path: book,
            title: "teste",
            content: "teste",
            altImg: "teste"
        }
    ]
}



export default boxInfosContent;