import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function main() {
   const newCards = await prisma.card.createMany({
        data: [
            {
            name: "Austere Command",
            scryfallUri: "https://scryfall.com/card/cmr/12/austere-command?utm_source=api",
            images:{
                create:[{
                    size: "small",
                    uri:"https://c1.scryfall.com/file/scryfall-cards/small/front/c/e/ce4ec853-411d-40a3-84a7-a62b3cb57cb3.jpg?1608908685"
                }]
            }
        },
            {
            name: "Kruphix, God of Horizons",
            scryfallUri: "https://scryfall.com/card/jou/152/kruphix-god-of-horizons",
            images:{
                create:[{
                    size: "small",
                    uri:"https://c1.scryfall.com/file/scryfall-cards/small/front/2/7/27427233-da58-45af-ade8-e0727929efaa.jpg?1593096427"
                }]
            }
        },
        ],
       skipDuplicates:true,
    })

    console.dir(newCards, { depth: null })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

