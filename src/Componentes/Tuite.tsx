export function Tuite(props: TweetProps) {
    return (
        <>
            <p className="font-bold uppercase text-center mt-10">{props.text}</p>
            <p className="font-bold uppercase text-center mt-10 text-6xl text-white">Tweet feito!!</p>
        </>
    )
}

type TweetProps = {
    text?: string;
}