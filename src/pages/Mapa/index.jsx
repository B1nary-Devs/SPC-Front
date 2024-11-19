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

    return (
        <>
            <Menu />
            <div className="content-page">

                <div className="mapa">
                    <DataDrawer />
                    <iframe
                        src="/mapa_interativo.html" // Caminho relativo ao arquivo na pasta public
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
