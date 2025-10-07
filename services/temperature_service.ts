import prisma from "../prisma";
import { Temperature } from "@prisma/client";
export const getAllTemperatures = async () => {
  return await prisma.temperature.findMany();
};

export const updateTemperature = async (id: number, value: number) => {
  return await prisma.temperature.update({
    where: { id },
    data: { value },
  });
};

export const getAverageTemperature = async () => {
  const result = await prisma.temperature.aggregate({
    _avg: { value: true },
  });
  return result._avg.value ?? 0;
};

export const randomizeTemperatures = async () => {
  const temps = await prisma.temperature.findMany();
  const updates = temps.map((t: Temperature) =>
    prisma.temperature.update({
      where: { id: t.id },
      data: { value: Math.random() * 40 },
    })
  );
  await Promise.all(updates);
  return { message: "Temperatures randomized" };
};
