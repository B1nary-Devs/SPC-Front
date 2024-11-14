import Menu from '../../components/SideBarMenu';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DataDrawer from '../../components/Drawer';
import L from "leaflet";
import './mapa.css'
import bluePinIcon from "/placeholder.png"; // Caminho para sua imagem personalizada

// Configurando o ícone personalizado
const customIcon = new L.Icon({
    iconUrl: bluePinIcon,
    iconSize: [30, 30], // Ajuste o tamanho conforme necessário
    iconAnchor: [12, 41], // Define o ponto onde o ícone está "ancorado" no mapa
    popupAnchor: [0, -41], // Posiciona o popup acima do pin
});

// Componente para atualizar dinamicamente o centro e zoom do mapa
function SetCenterAndZoom({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function Mapa() {
    const [mapCenter, setMapCenter] = useState([-14.235, -51.9253]);
    const [zoomMap, setZoomMap] = useState(4.2);

    const markers = [
        { id: 1, position: [-23.1621987, -45.7978744] }, // São José dos Campos - SP
        { id: 2, position: [-22.9068, -43.1729] },       // Rio de Janeiro - RJ
        { id: 3, position: [-15.7942, -47.8822] },       // Brasília - DF
        { id: 4, position: [-12.9714, -38.5014] },       // Salvador - BA
        { id: 5, position: [-3.1190, -60.0217] },        // Manaus - AM
        { id: 6, position: [-8.0476, -34.8770] },        // Recife - PE
        { id: 7, position: [-30.0346, -51.2177] },       // Porto Alegre - RS
        { id: 8, position: [-16.6869, -49.2648] },       // Goiânia - GO
        { id: 9, position: [-25.4284, -49.2733] },       // Curitiba - PR
        { id: 10, position: [-19.9191, -43.9386] },      // Belo Horizonte - MG
        { id: 11, position: [-2.5307, -44.3068] },       // São Luís - MA
        { id: 12, position: [-10.9472, -37.0731] },      // Aracaju - SE
        { id: 13, position: [-12.2569, -38.9645] },      // Feira de Santana - BA
        { id: 14, position: [-15.6014, -56.0979] },      // Cuiabá - MT
        { id: 15, position: [-3.7172, -38.5433] },       // Fortaleza - CE
        { id: 16, position: [-9.6658, -35.7350] },       // Maceió - AL
        { id: 17, position: [-4.2634, -55.9910] },       // Região norte do Brasil (próximo ao Pará)
        { id: 18, position: [-7.1195, -34.8450] },       // João Pessoa - PB
        { id: 19, position: [-1.4558, -48.4902] },       // Belém - PA
        { id: 20, position: [-20.3155, -40.3128] },      // Vitória - ES
        { id: 21, position: [-14.2350, -51.9253] },      // Centro do Brasil (Mato Grosso)
        { id: 22, position: [-22.3190, -49.0686] },      // Bauru - SP
        { id: 23, position: [-28.2631, -52.4062] },      // Passo Fundo - RS
        { id: 24, position: [-17.6868, -39.2600] },      // Teixeira de Freitas - BA
        { id: 25, position: [-22.3791, -41.7848] },      // Cabo Frio - RJ
    ];

    // Função para centralizar o mapa em um marcador e aplicar zoom
    function handleMarkerClick(position) {
        setMapCenter(position);
        setZoomMap(10);
    }

    return (
        <>
            <Menu />
            <div className="content-page">

                <div className="mapa">
                    <DataDrawer/>
                    <MapContainer center={mapCenter} zoom={zoomMap} className='mapa-leaft'>
                        <SetCenterAndZoom center={mapCenter} zoom={zoomMap} />
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {markers.map((marker) => (
                            <Marker
                                key={marker.id}
                                position={marker.position}
                                icon={customIcon}
                                eventHandlers={{ click: () => handleMarkerClick(marker.position), }}
                            >
                                <Popup>ola</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </>
    );
}
