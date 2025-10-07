-- CreateTable
CREATE TABLE "Temperature" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Temperature_pkey" PRIMARY KEY ("id")
);
