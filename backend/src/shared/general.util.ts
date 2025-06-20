export function generateSlug(text: string, unique: boolean = false){
    let slug = text.toLowerCase().replace(' ', '-')
    // generate a unique slug if required
    // generate unique number to append with that slug
    if(unique){
        let uniqueNumber = Math.floor(Math.random() * 1000);
        slug = slug + '-' + uniqueNumber;
    }

    return slug;
}