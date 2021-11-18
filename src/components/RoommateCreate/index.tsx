import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

import icon from "../../utils/constants";
import { FiPlus } from "react-icons/fi";

import { CurrencyInput, Input, Textarea } from "../Input";

import documentSVG from "../../images/document.gif";

import * as S from "./styles";
import api from "../../services/api";
import { AppRoute } from "../../routes/routes";

export const RoommateCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({
    latitude: -22.199547,
    longitude: -47.3804479,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  function MarkerMap() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
        L.marker([lat, lng], { icon }).addTo(map);
      },
    });
    return null;
  }

  async function handleSubmit() {
    setLoading(true);
    const { latitude, longitude } = position;
    const data = new FormData();

    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("room", data);

    setLoading(false);
    navigate(AppRoute.Roommates);
  }

  return (
    <S.RoommatesMapWrapper>
      {loading && (
        <S.Loading>
          <div>
            <img src={documentSVG} alt="Loading" width="200px" />
            Wait, we are registering the roommate!
          </div>
        </S.Loading>
      )}
      <S.RoommatesFormContent onSubmit={handleSubmit}>
        <S.RoomForm>
          <S.InputBlock>
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </S.InputBlock>

          <S.InputBlock>
            <label htmlFor="description">Description</label>
            <Textarea
              name="description"
              maxLength={300}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </S.InputBlock>

          <S.InputBlock>
            <label htmlFor="price">Price</label>
            <CurrencyInput
              placeholder="$ 0,00"
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </S.InputBlock>

          <S.InputBlock>
            <label htmlFor="images">Photos</label>

            <S.ImagesContainer>
              {previewImages.map((image) => {
                return <img key={image} src={image} alt={title} />;
              })}

              <label htmlFor="image[]" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label>
            </S.ImagesContainer>
            <input
              multiple
              onChange={handleSelectImages}
              type="file"
              id="image[]"
            />
          </S.InputBlock>

          <S.InputBlock>
            <S.Button type="submit">Register</S.Button>
          </S.InputBlock>
        </S.RoomForm>

        <div>
          <S.TitleMap>Click on map to select location</S.TitleMap>
          <S.Map id="map">
            <MapContainer
              zoom={15}
              center={[position.latitude, position.longitude]}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <MarkerMap />
            </MapContainer>
          </S.Map>
        </div>
        <S.InputBlockMobile>
          <S.ButtonMobile type="submit">Register</S.ButtonMobile>
        </S.InputBlockMobile>
      </S.RoommatesFormContent>
    </S.RoommatesMapWrapper>
  );
};
