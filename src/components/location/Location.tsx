// import { MapContainer,Marker, TileLayer } from 'react-leaflet'
import './location.css'
// import { Marker } from 'leaflet'


export const Location = () => {
    // let positionCN: [number, number] = [52.15, 13.38]
  return (
    <div className="mainn">
        <div className="locate">
            <div className="locates flip" data-aos='fade-up' data-aos-duration="1000">
                <div className="img canada">
                    {/* <MapContainer center={positionCN} zoom={13}
                    scrollWheelZoom={true} >
                        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                        <Marker position={positionCN} >
                            
                        </Marker>
                    </MapContainer> */}
                </div>
                <div className="locate-mesg">
                    <h2>Canada</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">Designo Central Office</p>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : +1 253-863-8967</p>
                            <p>M : contact@designo.co</p>
                        </div> 
                    </div>
                </div> 
            </div>
            <div className="locates" data-aos='fade-up' data-aos-duration="1000">
                <div className="img au"></div>
                <div className="locate-mesg">
                    <h2>Australia</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">Designo AU Office</p>
                            <p>19 Balonne Street</p>
                            <p>New South Wales 2443</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : (02) 6720 9092</p>
                            <p>M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="locates flip" data-aos='fade-up' data-aos-duration="1000">
                    <div className="img uk"></div>
                <div className="locate-mesg">
                    <h2>United Kingdom</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">Designo UK Office</p>
                            <p>13  Colorado Way</p>
                            <p>Rhyd-y-fro SA8 9GA</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : 078 3115 1400</p>
                            <p>M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
