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

export const createTemperature = async (data: {
  city: string;
  value: number;
}) => {
  // Cek apakah city sudah ada
  const existing = await prisma.temperature.findUnique({
    where: { city: data.city },
  });

  if (existing) {
    throw new Error(`City "${data.city}" already exists`);
  }

  // Kalau belum ada, baru buat
  return prisma.temperature.create({
    data: {
      city: data.city,
      value: data.value,
    },
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

  const updates = temps.map((t) =>
    prisma.temperature.update({
      where: { id: t.id },
      data: {
        value: Number((Math.random() * 40).toFixed(1)),
      },
    })
  );

  await Promise.all(updates);

  return { message: "Temperatures randomized" };
};
