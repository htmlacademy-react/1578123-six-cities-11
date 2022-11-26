import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Location } from '../types/offers';

enum MapSetting {
  LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Location
): Map | null {
  const [map, setmap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(MapSetting.LAYER, {
        attribution: MapSetting.ATTRIBUTE,
      });

      instance.addLayer(layer);
      setmap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
