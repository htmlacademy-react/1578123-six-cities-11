import { Icon, Marker } from 'leaflet';
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
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={`${className} map`}
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
