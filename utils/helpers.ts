export function createSlug(title: string) {
    return title.trim().toLowerCase().split(' ').join('_')
}