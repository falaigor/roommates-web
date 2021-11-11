import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import api from "../../services/api";
import mapIcon from "../../utils/mapIcon";
import * as S from "./styles";

interface Room {
  id: string;
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

export const Roommate = () => {
  const params = useParams();
  const [room, setRoom] = useState<Room>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/rooms/${params.id}`).then((response) => {
      setRoom(response.data);
    });
  }, [params.id]);

  if (!room) {
    return <p>Carregando...</p>;
  }

  return (
    <S.RoomWrapper>
      <S.RoomContent>
        <S.ImageContainer>
          <S.Image src={room.images[activeImageIndex].path} alt={room.title} />

          <S.Images>
            {room.images.map((image, index) => {
              return (
                <button
                  className={activeImageIndex === index ? "active" : ""}
                  key={image.id}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.path} alt={room.title} />
                </button>
              );
            })}
          </S.Images>
        </S.ImageContainer>
        <S.Info>
          <div>
            <h2>{room.title}</h2>
            <p>{room.description}</p>
          </div>
          <S.Button>{room.price}/mounth</S.Button>
        </S.Info>
      </S.RoomContent>

      <S.RoomContent>
        <S.Map>
          <MapContainer
            zoom={15}
            center={[room.latitude, room.longitude]}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            <Marker icon={mapIcon} position={[room.latitude, room.longitude]}>
              <S.NewTooltip
                direction="right"
                offset={[-8, -20]}
                opacity={1}
                permanent
              >
                <span>Here</span>
              </S.NewTooltip>
            </Marker>
          </MapContainer>
        </S.Map>
      </S.RoomContent>
    </S.RoomWrapper>
  );
};
