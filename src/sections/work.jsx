import "./work.scss"

export default function Work() {
    return(
        <div className='work' id="work">
            <div className="left">
                <div className="title">
                    <h1>Experience</h1>
                </div>

                <div className="demonware">
                    <p className="time">May 2021 - Dec 2021</p>
                    <h4>Software Engineer Intern, Backend</h4>
                    <p>Activision Blizzard (Demonware)</p>
                </div>
                <div className="sierra">
                    <p className="time">Sep 2020 - Apr 2021</p>
                    <h4>Software Engineer Intern, Backend</h4>
                    <p>Sierra Wireless</p>
                </div>
                <div className="geocortex">
                    <p className="time">Sep 2019 - Dec 2019</p>
                    <h4>Quality Assurance Intern</h4>
                    <p>Geocortex</p>
                </div>
            </div>
            <div className="right">
                <p>Being interning in three different companies over 12+ months, I got a lot of industry experience about backend development. More importantly, I found my own work methodology to make me highly productive continuously.</p>
            </div>
        </div>
    );
}