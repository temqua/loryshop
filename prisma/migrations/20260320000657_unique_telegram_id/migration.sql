/*
  Warnings:

  - A unique constraint covering the columns `[telegram_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "orders_telegram_id_key" ON "orders"("telegram_id");
