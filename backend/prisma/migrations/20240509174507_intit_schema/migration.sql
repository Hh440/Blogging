-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "published_date" DROP DEFAULT,
ALTER COLUMN "published_date" SET DATA TYPE TEXT;
