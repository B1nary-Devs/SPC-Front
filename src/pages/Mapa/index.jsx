import Menu from '../../components/SideBarMenu';
import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster"; // Biblioteca React para clusters
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import './mapa.css';
import DataDrawer from '../../components/Drawer';
import { useSelector } from 'react-redux';

export default function Mapa() {

    const [mapCenter, setMapCenter] = useState([-14.235, -51.9253]);
    const [zoomMap, setZoomMap] = useState(4.2);

    const positions = useSelector((state) => state.duplicatas.positions);
    const estadosDuplicatas = useSelector((state) => state.duplicatas.estadosDuplicatas);

    return (
        <>
            <Menu />
            <div className="content-page">

                <div className="mapa">
                    <DataDrawer />
                    <MapContainer center={mapCenter} zoom={zoomMap} className="mapa-leaft">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />

                        {/* Adiciona os marcadores ao agrupador */}
                        <MarkerClusterGroup
                            showCoverageOnHover={false} // Desativa os polígonos de cobertura
                            spiderfyOnMaxZoom={true} // Mostra os marcadores ao dar zoom máximo
                            iconCreateFunction={(cluster) => {
                                const count = cluster.getChildCount();
                                return L.divIcon({
                                    html: `<div style="
                                        background-color: #0c4ec9b2;
                                        color: white;
                                        width: 40px;
                                        height: 40px;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        border-radius: 50%;
                                        font-size: 16px;
                                        border: 2px solid #0a0c0a;
                                    ">${count}</div>`,
                                    className: "cluster-icon",
                                });
                            }}
                        >
                            {positions.map((marker) => (
                                <CircleMarker
                                    key={marker.id}
                                    center={marker.position}
                                    radius={10}
                                    pathOptions={{
                                        color: "#0C4EC9",
                                        fillColor: "#072050",
                                        fillOpacity: 0.2,
                                    }}
                                >
                                    <Popup>Marcador {marker.id}</Popup>
                                </CircleMarker>
                            ))}
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}
