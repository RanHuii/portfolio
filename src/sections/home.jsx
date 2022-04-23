import "./home.scss"
export default function Home() {
  return (
    <div className='home' id="home">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/ProfileImage.jpg"></img>
            </div>
        </div>
        <div className="right">
            <div className="titleWrapper">
                <h1 className="title">HELLO, I AM </h1>
            </div>
            <div className="nameWrapper">
                <h1 className="name">Yiming Huang</h1>
                </div>
            <div className="intro">
                <p>Currently, I am studying Computer Science at the University of Victoria. </p>
                <p> In this Fall, I will join Amazon as a Software engineer.</p>
                <p> To Be Continue:)</p>
            </div>
               
           
           
        </div>
    </div>
  )
}
