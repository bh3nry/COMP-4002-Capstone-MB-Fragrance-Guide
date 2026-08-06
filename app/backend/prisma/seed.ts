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
        {
            id: 1,
            name: "amber",
            description: "Warm, sweet, and resinous note providing a rich, cozy oriental foundation."
        },
        {
            id: 2,
            name: "ambery cedar",
            description: "A comforting blend of clean, woody cedarwood with warm, golden amber undertones."
        },
        {
            id: 3,
            name: "ambroxan",
            description: "A modern synthetic compound delivering a clean, skin-like warmth with salty, musky, and amber facets."
        },
        {
            id: 4,
            name: "apple",
            description: "Crisp, juicy, and vibrantly fruity note that adds refreshing sweetness."
        },
        {
            id: 5,
            name: "basil",
            description: "Fresh, green, and aromatic herb with subtle peppery and slightly sweet anise undertones."
        },
        {
            id: 6,
            name: "bean",
            description: "A general warm, seed-like accord, often hinting at underlying sweet, nutty, or earthy tones."
        },
        {
            id: 7,
            name: "benzoin",
            description: "A balsamic resin offering a warm, sweet aroma reminiscent of vanilla with hints of incense."
        },
        {
            id: 8,
            name: "bergamot",
            description: "A crisp, complex citrus note that is intensely fresh, elegant, and slightly bitter-spicy."
        },
        {
            id: 9,
            name: "berries",
            description: "A sweet, tart, and vibrant medley of mixed red and dark summer fruits."
        },
        {
            id: 10,
            name: "birch",
            description: "A deeply smoky, tar-like woody note frequently used to create rich leather profiles."
        },
        {
            id: 11,
            name: "black",
            description: "An abstract concept note conveying darkness, depth, mystery, or intense richness."
        },
        {
            id: 12,
            name: "black pepper",
            description: "Sharp, hot, and dry spice note that injects immediate energy and texture into a fragrance."
        },
        {
            id: 13,
            name: "blackcurrant",
            description: "A complex tangy-sweet fruit note with deep, slightly green and ammonia-like nuances."
        },
        {
            id: 14,
            name: "blood",
            description: "A metallic, sharp, and avant-garde accord used to introduce an edgy, mineral drama."
        },
        {
            id: 15,
            name: "blood mandarin",
            description: "A deeply sweet, intensely juicy citrus note with rich, red-fleshed fruit nuances."
        },
        {
            id: 16,
            name: "cardamom",
            description: "A brilliant, aromatic spice offering a unique blend of cool sweetness, warmth, and green lemon facets."
        },
        {
            id: 17,
            name: "cedar",
            description: "A classic, grounding woody note evoking clean pencil-shavings, dry bark, and rugged forest air."
        },
        {
            id: 18,
            name: "cinnamon",
            description: "A comforting, highly recognizable spice delivering sweet, powdery warmth and intense heat."
        },
        {
            id: 19,
            name: "clary",
            description: "An aromatic element adding a clean, naturally green, and slightly medicinal vibe."
        },
        {
            id: 20,
            name: "clary sage",
            description: "A complex herb with soft lavender, leathery, ambery, and sweet hay facets."
        },
        {
            id: 21,
            name: "coriander",
            description: "A woody, spicy seed note with light, fleeting citrus and herbal undertones."
        },
        {
            id: 22,
            name: "flint",
            description: "A mineral-heavy, smoky, and stone-like accord that adds a dry, earthy texture."
        },
        {
            id: 23,
            name: "ginger",
            description: "A sharp, fiery root note providing a zesty, effervescent, and spicy-clean brightness."
        },
        {
            id: 24,
            name: "grapefruit",
            description: "A tart, bitter-sweet citrus note known for its uplifting, sharp freshness and sulfurous edges."
        },
        {
            id: 25,
            name: "green",
            description: "An overarching category evoking crushed leaves, fresh-cut grass, and dew-drenched foliage."
        },
        {
            id: 26,
            name: "green apple",
            description: "Tart, sour, and intensely crisp fruit note that cuts through heavy compositions."
        },
        {
            id: 27,
            name: "green mandarin",
            description: "A bright, zesty citrus note captured early in harvest, giving it a sharper, peel-like green edge."
        },
        {
            id: 28,
            name: "haitian",
            description: "Refers to materials sourced from Haiti, typically implying a high-quality, earthy, and smoky pedigree."
        },
        {
            id: 29,
            name: "haitian vetiver",
            description: "A premium vetiver variety prized for its deeply clean, earthy, smoky, and slightly sweet-woody profile."
        },
        {
            id: 30,
            name: "iris",
            description: "An elegant, sophisticated floral note known for its powdery, soft suede, and earthy root qualities."
        },
        {
            id: 31,
            name: "italian",
            description: "Signifies premium Mediterranean origins, typically associated with sunny, bright, and high-quality citrus oils."
        },
        {
            id: 32,
            name: "italian orange",
            description: "A sunny, sweet, and vibrant citrus note brimming with cheerful, natural fruit sugars."
        },
        {
            id: 33,
            name: "juniper",
            description: "A crisp, aromatic evergreen wood note with a sharp, cooling, and pine-like presence."
        },
        {
            id: 34,
            name: "juniper berries",
            description: "The gin-like note: intensely fresh, cooling, resinous, and sharply aromatic."
        },
        {
            id: 35,
            name: "lavender",
            description: "The quintessential aromatic floral, presenting clean, soothing, herbal, and slightly sweet-woody tones."
        },
        {
            id: 36,
            name: "leaf",
            description: "A generic green accord emphasizing natural, botanical, and crisp foliage textures."
        },
        {
            id: 37,
            name: "leather",
            description: "A rich, animalic accord varying from soft, luxury suede to smoky, rugged jacket textures."
        },
        {
            id: 38,
            name: "lemon",
            description: "A classic, sour, and intensely energetic citrus note that provides a sharp burst of freshness."
        },
        {
            id: 39,
            name: "mandarin",
            description: "A sweet, warm, and highly juicy citrus note that is softer and more relaxing than orange."
        },
        {
            id: 40,
            name: "mineral",
            description: "An abstract category capturing cold stone, wet pavement, sand, or salty sea cliffs."
        },
        {
            id: 41,
            name: "mineral notes",
            description: "Synthetic or natural accords mimicking cold, dry, or crisp outdoor textures like granite and salt."
        },
        {
            id: 42,
            name: "mint",
            description: "An intensely cooling, invigorating herb that brings an icy freshness to compositions."
        },
        {
            id: 43,
            name: "musk",
            description: "A versatile base note ranging from clean, laundry-fresh, and powdery to warm and skin-like."
        },
        {
            id: 44,
            name: "neroli",
            description: "Steam-distilled orange blossom producing a green, citrusy, and cleanly elegant floral scent."
        },
        {
            id: 45,
            name: "notes",
            description: "A generic placeholder or abstract blending element within a fragrance pyramid."
        },
        {
            id: 46,
            name: "orange",
            description: "A familiar, bright, sweet, and tangy citrus note that boosts radiant warmth."
        },
        {
            id: 47,
            name: "orris",
            description: "The prized root of the iris flower, creating a luxurious, buttery, and heavily powdery texture."
        },
        {
            id: 48,
            name: "oud",
            description: "A highly complex agarwood resin offering deep woody, smoky, animalic, and sweet balsamic layers."
        },
        {
            id: 49,
            name: "patchouli",
            description: "A rich, dark herb delivering a deeply earthy, woody, musky, and slightly sweet chocolate-like base."
        },
        {
            id: 50,
            name: "pepper",
            description: "A fiery spice accord that provides lift, warmth, and texture to top and heart notes."
        },
        {
            id: 51,
            name: "pineapple",
            description: "A tropical, sweet, and tart fruit note that brings a bright, modern, and juicy optimism."
        },
        {
            id: 52,
            name: "pink",
            description: "An abstract concept note usually hinting at light florals, soft berries, or delicate spices."
        },
        {
            id: 53,
            name: "pink pepper",
            description: "A bright, berries-meet-spice note that is fresh, rosy, vibrant, and not overly hot."
        },
        {
            id: 54,
            name: "plum",
            description: "A dark, lush, and velvety fruit note providing rich, jammy, and slightly boozy depth."
        },
        {
            id: 55,
            name: "rose",
            description: "The king of florals, spanning from fresh, dewy, and green to opulent, dark, and velvety sweet."
        },
        {
            id: 56,
            name: "rosemary",
            description: "A pungent, aromatic herb with strong camphoraceous, pine-like, and refreshing facets."
        },
        {
            id: 57,
            name: "rum",
            description: "A boozy, intoxicating note packed with sugar cane warmth, oak aging, and spicy dark vanilla."
        },
        {
            id: 58,
            name: "sage",
            description: "A savory, silvery herb providing dry, earthy, aromatic, and slightly bitter-green tones."
        },
        {
            id: 59,
            name: "salt",
            description: "A savory, marine-like mineral effect that adds breezy texture, ocean air vibe, and cuts sweetness."
        },
        {
            id: 60,
            name: "sea notes",
            description: "Aquatic accords channeling fresh ocean air, saltwater, ozone, and breezy coastal vibes."
        },
        {
            id: 61,
            name: "spices",
            description: "A general warming or cooling blend of dynamic kitchen and exotic woods seasonings."
        },
        {
            id: 62,
            name: "tobacco",
            description: "A rich, comforting note evoking sweet, dried leaves with facets of honey, hay, and warm smoke."
        },
        {
            id: 63,
            name: "tonka",
            description: "A sweet, complex seed delivering elements of warm vanilla, rich almond, and freshly mown hay."
        },
        {
            id: 64,
            name: "tonka bean",
            description: "The full expression of tonka, acting as a creamy, powdery, and comforting balsamic base note."
        },
        {
            id: 65,
            name: "tuscan",
            description: "Evokes the central Italian countryside, signaling rustic herbs, cypress woods, or fine leathers."
        },
        {
            id: 66,
            name: "tuscan iris",
            description: "A highly premium, earthy, and extraordinarily refined powdery iris root from regional Italy."
        },
        {
            id: 67,
            name: "vanilla",
            description: "A universally loved, comforting base note offering rich, creamy, and sweet bakery-warmth."
        },
        {
            id: 68,
            name: "vetiver",
            description: "A complex perennial grass yielding a dry, woody, smoky, and intensely earthy fragrance foundation."
        },
        {
            id: 69,
            name: "violet",
            description: "A delicate, nostalgic floral note with sweet, powdery, and romantic woodsy undertones."
        },
        {
            id: 70,
            name: "violet leaf",
            description: "Completely distinct from the flower; a sharply green, metallic, and ozonic note resembling sliced cucumber."
        }
    ];

    for (const note of notes) {
        await prisma.note.upsert({
            where: { id: note.id },
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
            bio: "This is my fragrance profile.",
            clerkId: "clerk_1234567890"
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