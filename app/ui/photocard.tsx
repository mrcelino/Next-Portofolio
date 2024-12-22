"use client";
import Image from "next/image";
import {CardContainer, CardItem } from "../../components/ui/3d-card";

export default function PhotoCard() {
  return (
    <CardContainer className="inter-var">
      <CardItem
        translateZ="100"
        className="w-full h-full rounded-2xl bg-white bg-opacity-10 p-4"
      >
        <Image
          src="/images/foto.jpg"
          height="1000"
          width="1000"
          className="md:h-96 w-full object-contain group-hover/card:shadow-xl rounded-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  );
}
