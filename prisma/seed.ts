import { prisma } from "./prisma-client"
import { hashSync } from "bcrypt"

async function up() {
     await prisma.user.createMany({
          data: [
               {
                    fullName: 'User Test',
                    email: 'user@test.ru',
                    password: hashSync('111111', 10),
                    verified: new Date(),
                    role: 'USER',
               },
               {
                    fullName: 'Admin Admin',
                    email: 'admin@test.ru',
                    password: hashSync('111111', 10),
                    verified: new Date(),
                    role: 'ADMIN',
               }
          ]
     })
}

async function down() {
     // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
     // await prisma.$executeRaw`DELETE FROM "User"`
     // await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`
     await prisma.user.deleteMany({}) // минус в том, что при удалении юзера, id остаётся тот же
}

async function main() {
     try {
          await down()
          await up()
     } catch (e) {
          console.error(e)
     }
}

main()
     .then(async () => {
          await prisma.$disconnect();
     })
     .catch(async (e) => {
          console.error(e);
          await prisma.$disconnect();
          process.exit(1);
     })