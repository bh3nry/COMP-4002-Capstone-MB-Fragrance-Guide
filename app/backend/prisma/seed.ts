import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import "dotenv/config";

const connectionString = `${process.env.PROD_DB_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {

    const scents = [
        { Name: "Dior Sauvage Eau de Toilette", Notes: ["calabrian bergamot", "sichuan pepper", "ambery marine wood"] },
        { Name: "Bleu de Chanel Eau de Parfum", Notes: ["sandalwood", "ambery cedar", "tonka bean"] },
        { Name: "Yves Saint Laurent Y Eau de Parfum", Notes: ["apple", "ginger", "bergamot", "sage", "juniper berries", "tonka bean"] },
        { Name: "Giorgio Armani Acqua di Gio Profondo", Notes: ["sea notes", "bergamot", "green mandarin", "rosemary", "lavender", "patchouli"] },
        { Name: "Creed Aventus", Notes: ["blackcurrant", "bergamot", "apple", "pineapple", "birch", "musk"] },
        { Name: "Rabanne 1 Million", Notes: ["blood mandarin", "grapefruit", "mint", "cinnamon", "leather", "amber"] },
        { Name: "Tom Ford Oud Wood Parfum", Notes: ["cardamom", "pink pepper", "rosemary", "sandalwood", "oud", "tonka bean"] },
        { Name: "Versace Eros", Notes: ["mint", "green apple", "lemon", "tonka bean", "ambroxan", "vanilla"] },
        { Name: "Jean Paul Gaultier Le Male", Notes: ["lavender", "mint", "cardamom", "bergamot", "cinnamon", "vanilla"] },
        { Name: "Hermes Terre d'Hermes", Notes: ["orange", "grapefruit", "pepper", "flint", "vetiver", "cedar"] },
        { Name: "Dior Homme Parfum", Notes: ["tuscan iris", "italian orange", "leather", "rose", "sandalwood", "oud"] },
        { Name: "Yves Saint Laurent La Nuit de L'Homme Eau de Parfum", Notes: ["cardamom", "grapefruit", "leather", "lavender", "tonka bean", "vetiver"] },
        { Name: "Dolce & Gabbana The One for Men", Notes: ["grapefruit", "coriander", "basil", "ginger", "cardamom", "tobacco"] },
        { Name: "Givenchy Gentleman Eau de Parfum", Notes: ["black pepper", "lavender", "bergamot", "orris", "cinnamon", "tonka bean"] },
        { Name: "Prada L'Homme", Notes: ["neroli", "black pepper", "cardamom", "iris", "amber", "patchouli"] },
        { Name: "Bvlgari Man In Black", Notes: ["spices", "rum", "tobacco", "leather", "iris", "benzoin"] },
        { Name: "Armani Code Parfum", Notes: ["bergamot", "bergamot leaf", "iris", "clary sage", "tonka bean", "cedar"] },
        { Name: "Valentino Uomo Born in Roma", Notes: ["mineral notes", "violet leaf", "salt", "sage", "ginger", "vetiver"] },
        { Name: "Montblanc Explorer", Notes: ["bergamot", "pink pepper", "clary sage", "haitian vetiver", "leather", "ambroxan"] },
        { Name: "Hugo Boss Boss Bottled", Notes: ["apple", "plum", "bergamot", "cinnamon", "vanilla", "sandalwood"] },
    ];

    for (const scent of scents) {
        await prisma.scents.upsert({
            where: { Name: scent.Name },
            update: {},
            create: scent,
        });
    }

    const locations = [
        { fragranceId: 1, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 2, saleLocations: { create: [{ name: "Chanel Boutique" }, { name: "Holt Renfrew" }, { name: "Nordstrom" }] } },
        { fragranceId: 3, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 4, saleLocations: { create: [{ name: "Sephora" }] } },
        { fragranceId: 5, saleLocations: { create: [{ name: "Saks Fifth Ave" }] } },
        { fragranceId: 6, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 7, saleLocations: { create: [{ name: "Holt Renfrew" }, { name: "Nordstrom" }] } },
        { fragranceId: 8, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 9, saleLocations: { create: [{ name: "Sephora" }, { name: "Nordstrom" }] } },
        { fragranceId: 10, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 11, saleLocations: { create: [{ name: "Nordstrom" }] } },
        { fragranceId: 12, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 13, saleLocations: { create: [{ name: "Sephora" }, { name: "Nordstrom" }] } },
        { fragranceId: 14, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 15, saleLocations: { create: [{ name: "Nordstrom" }] } },
        { fragranceId: 16, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 17, saleLocations: { create: [{ name: "Armani Store" }, { name: "Nordstrom" }] } },
        { fragranceId: 18, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
        { fragranceId: 19, saleLocations: { create: [{ name: "Sephora" }, { name: "Nordstrom" }] } },
        { fragranceId: 20, saleLocations: { create: [{ name: "Sephora" }, { name: "Shoppers Drug Mart" }] } },
    ];

    for (const location of locations) {
        await prisma.location.upsert({
            where: { fragranceId: location.fragranceId },
            update: {},
            create: location,
        });
    }

    const notes = [
        { name: "Juniper", description: "Sharp, pine-like, gin-like, aromatic, slightly peppery.", season: "Spring", suggestions: "V Good smell no.5" },
        { name: "Patchouli", description: "Sweet, dark, with an earthy, woody edge, it is very popular in many blends, especially the contemporary woody floral musks.", season: "Winter", suggestions: "V Good smell no.5" },
        { name: "Sandalwood", description: "Warm, creamy, and woody aroma known for its grounding, luxurious, and long-lasting scent profile, often featuring notes of milk, earth, and soft spices.", season: "Winter", suggestions: "V Good smell no.5" },
        { name: "Bergamot", description: "A radiant citrus note with a refined blend of sweetness and gentle bitterness, accented by a faint floral elegance that feels both fresh and sophisticated.", season: "Spring", suggestions: "" },
        { name: "Lemon", description: "Crisp and invigorating, lemon delivers a sharp burst of zesty brightness with a clean, sparkling character that instantly energizes.", season: "Spring", suggestions: "" },
        { name: "Grapefruit", description: "Juicy and vibrant, grapefruit combines tart citrus freshness with a subtle bitter edge, creating a lively and uplifting sparkle.", season: "Summer", suggestions: "" },
        { name: "Pineapple", description: "Lush and tropical, pineapple brings a juicy sweetness with a tangy twist, adding a playful, sun-soaked vibrance.", season: "Summer", suggestions: "" },
        { name: "Sea Water", description: "Light and breezy, this note captures the essence of ocean air—fresh, slightly salty, and airy, like a cool wind rolling over waves.", season: "Summer", suggestions: "" },
        { name: "Cinnamon", description: "Warm and enveloping, cinnamon offers a soft, spicy sweetness with a hint of dryness, adding depth and a comforting glow.", season: "Fall", suggestions: "" },
        { name: "Tonka Bean", description: "Rich and velvety, tonka bean exudes a creamy sweetness with nuances of vanilla, almond, and soft caramel, leaving a smooth and sensual finish.", season: "Fall", suggestions: "" },
    ];

    for (const note of notes) {
        await prisma.note.upsert({
            where: { name: note.name },
            update: {},
            create: note,
        });
    }

    // default profile
    await prisma.profile.upsert({
        where: { id: 1 },
        update: {},
        create: {
            displayName: "Jane Doe",
            bio: "This is my fragrance profile."
        }
    });

    console.log("Database seeded successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });