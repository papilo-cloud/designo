import { MapContainer,Marker, TileLayer, Popup } from 'react-leaflet'
import './location.css'
// import { Marker } from 'leaflet'


export const Location = () => {
    let positionCN: [number, number] = [43.64419484706138, -79.3945608610694]
    let positionUK: [number, number] = [53.71041818128988, -1.34177075950711]
    let positionAU: [number, number] = [-30.329148449296643,149.78822916951194]

  return (
    <div className="mainn">
        <div className="locate">
            <div className="locates flip" data-aos='fade-up' data-aos-duration="1000">
                <div className="img canada">
                    <MapContainer center={positionCN} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionCN} 
                        riseOnHover={true}>
                            <Popup>
                            <p>3886 Wellington Street<br/>
                            Toronto, Ontario M9C 3J5</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
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
                <div className="img au">
                <MapContainer center={positionAU} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionAU} 
                        riseOnHover={true}>
                            <Popup>
                                <p>19 Balonne Street<br/>
                                New South Wales 2443</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
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
                    <div className="img uk">
                    <MapContainer center={positionUK} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionUK} 
                        riseOnHover={true}>
                            <Popup>
                            <p>13  Colorado Way<br/>
                            Rhyd-y-fro SA8 9GA</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
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
