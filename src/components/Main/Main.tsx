import "../Main/Main.css"

interface MainProps{
    children: React.ReactNode;
}


export default function Main(props: MainProps){
    return (
        <main>
            {props.children}
        </main>
    );
}