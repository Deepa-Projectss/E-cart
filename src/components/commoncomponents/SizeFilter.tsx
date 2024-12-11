

export default function SizeFilter({ item, id, onClick }: any) {
    // console.log("====>",item.value);
    return (
        <div 
            key={item.id}
            onClick={onClick} 
            style={{
            border: '1px solid black',
            height: '25px',
            width: '30px',
            paddingLeft: '19px',
            paddingTop: '5px',
            cursor:'pointer',
            backgroundColor: item.id == id ? "black" : "white",
            color: item.id == id ? "white" : "black"
        }}>
            <a>{item.value}</a>
        </div>
    )
}