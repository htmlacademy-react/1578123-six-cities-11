import { Icon, LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

import { Location, Offer } from '../../types/offers';
import { UrlMarker } from '../../const';

type MapProps = {
  className: string;
  offers: Offer[];
  city: Location;
  selectedOffer: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DefaultMarker,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CurrentMarker,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ className, offers, city, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.setView([city.latitude, city.longitude], city.zoom);
  }, [city, map]);

  const layer = new LayerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { location } = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            selectedOffer && offer.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon
          );

        layer.addLayer(marker);
      });
      layer.addTo(map);
    }

    return () => {
      layer.clearLayers();
    };
  });

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
