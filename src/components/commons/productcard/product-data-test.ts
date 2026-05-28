export type Perfume = {
    title: string,
    notes: string,
    price: string
}

export type ProductCardProps = {
    perfumeObj: Perfume
}

export const testPerfume: Perfume = {
    title: "V Good smell no.5",
    notes: "Juniper, Patchouli, Sandlewood",
    price: `$${49.99}`
}