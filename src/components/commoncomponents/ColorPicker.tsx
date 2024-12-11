export default function ColorPicker({colors,onClick}:any){
    return(
        <div onClick={onClick} style={{cursor:'pointer'}} >
            <p style={{fontFamily:'Noto-Sans-Regular',fontSize:'14px',}}>{colors.colorName}</p>
            <div>
            <img src={colors.imgs} alt="" style={{height:'100px',width:'80px',borderRadius:'20px',background:'none'}} />
            </div>
        </div>
    )
}