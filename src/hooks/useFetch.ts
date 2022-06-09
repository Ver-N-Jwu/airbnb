import { useEffect, useState } from "react";

type FetchProps = {
  method?: "GET" | "POST";
  url: string;
  options?: object;
};

type ResponseType = {
  id: number;
  maxGuest: number;
  name: string;
  address: string;
  detailAddres: string;
  latitude: number;
  longitude: number;
  roomType: string;
  roomCount: number;
  bedCount: number;
  bathroomCount: number;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  salePrice: number;
  badge: string;
  thumbnails: string[];
  options: {
    kitchen: boolean;
    wifi: boolean;
    airConditioner: boolean;
    freeParkingLot: boolean;
    hairDryer: boolean;
  };
};

export type Rooms = {
  rooms: ResponseType;
};

const useFetch = <T>({ method, url, options }: FetchProps): { response: T | null; error: unknown } => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          ...options,
        });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;
