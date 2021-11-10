import { useEffect, useMemo, useState } from "react";
import { Room } from "./Room";
import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet";

import * as S from "./styles";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";

interface RoomsProps {
  id: number;
  title: string;
  description: string;
  price: string;
  latitude: number;
  longitude: number;
  images: {
    id: string;
    path: string;
    room_id: string;
  }[];
}

export const RoommatesMap = () => {
  const [position, setPosition] = useState({
    latitude: -22.199547,
    longitude: -47.3804479,
  });
  const [rooms, setRooms] = useState<RoomsProps[]>([]);

  useEffect(() => {
    api.get("/rooms").then((response) => {
      setRooms(response.data);
    });
  }, []);

  const [clickedCount, setClickedCount] = useState(0);

  const eventHandlers = useMemo(
    () => ({
      click() {
        setClickedCount((count) => count + 1);
        console.log(clickedCount);
      },
    }),
    []
  );

  return (
    <S.RoommatesMapWrapper>
      <S.RoommatesMapContent>
        <S.Rooms>
          {rooms.map((room) => {
            const images = room.images;
            const image = images[0].path;

            return (
              <Room
                key={room.id}
                title={room.title}
                description={room.description}
                price={room.price}
                cover={image}
                onClick={() =>
                  setPosition({
                    latitude: room.latitude,
                    longitude: room.longitude,
                  })
                }
              />
            );
          })}
        </S.Rooms>

        <S.Map id="map">
          <MapContainer
            zoom={15}
            center={[position.latitude, position.longitude]}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            <MapConsumer>
              {(map) => {
                map.setView([position.latitude, position.longitude]);
                return null;
              }}
            </MapConsumer>

            {rooms.map((room) => {
              return (
                <Marker
                  key={room.id}
                  icon={mapIcon}
                  position={[room.latitude, room.longitude]}
                  eventHandlers={eventHandlers}
                >
                  <S.NewTooltip
                    direction="right"
                    offset={[-12, -20]}
                    opacity={1}
                    permanent
                  >
                    <span>{room.price}</span>
                  </S.NewTooltip>
                </Marker>
              );
            })}
          </MapContainer>
        </S.Map>
      </S.RoommatesMapContent>
    </S.RoommatesMapWrapper>
  );
};
