-- Migration number: 0003 	 2024-05-05T11:08:32.587Z
CREATE UNIQUE INDEX "Posts_link_image_key" ON "Posts"("link_image");