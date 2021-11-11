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

  const [position, setPosition] = useState({
    latitude: -22.199547,
    longitude: -47.3804479,
  });

  console.log(position);

  // useEffect(() => {
  //   api.get(`/rooms/${params.id}`).then((response) => {
  //     setRoom(response.data);
  //   });
  // }, [params.id]);

  // if (!room) {
  //   return <p>Carregando...</p>;
  // }

  return (
    <S.RoomWrapper>
      <S.RoomContent>
        <S.ImageContainer>
          <S.Image
            src="https://images.ui8.net/uploads/unity-gaming-fullpreview-2_1602474763804.png"
            alt="Alt"
          />

          <S.Images>
            <button
              className={activeImageIndex === 1 ? "active" : ""}
              type="button"
              onClick={() => {
                setActiveImageIndex(1);
              }}
            >
              <img
                src="https://images.ui8.net/uploads/unity-gaming-fullpreview-2_1602474763804.png"
                alt="alt"
              />
            </button>
          </S.Images>
        </S.ImageContainer>
        <S.Info>
          <div>
            <h2>Title</h2>
            <p>Description</p>
          </div>
          <S.Button>$1200/mounth</S.Button>
        </S.Info>
      </S.RoomContent>

      <S.RoomContent>
        <S.Map>
          <MapContainer
            zoom={15}
            center={[position.latitude, position.longitude]}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            <Marker
              icon={mapIcon}
              position={[position.latitude, position.longitude]}
            >
              <S.NewTooltip
                direction="right"
                offset={[-16, -20]}
                opacity={1}
                permanent
              >
                <span>Teste</span>
              </S.NewTooltip>
            </Marker>
          </MapContainer>
        </S.Map>
      </S.RoomContent>
    </S.RoomWrapper>
  );
};
